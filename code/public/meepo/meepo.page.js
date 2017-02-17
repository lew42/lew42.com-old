var Page = require("page42");
var View = require("view42");

var Section = View.extend({
	tag: "section",
	name: "Section"
});
Section.prototype.$el.removeClass("section");

var Paper = Section.extend({
	name: "Paper"
});

var Content = View.extend({
	name: "Content"
});

var prism = require("prismjs");

var $ = require("jquery");

var test1 = require("raw-loader!./test1.js");

module.exports = Page(function(){
	this.addClass("meepo-page page");
	var meepo = this;

	var problem;
	Paper(function(){
		View(function(){
			this.addClass("content-squeeze");
			View.h1("meepo");
			View.p("A simple repo pattern for JavaScript sub-modules.  Named after the DotA hero.").addClass("intro");

			View({tag: "ul"}, function(){

				View({tag: "li"}, "Make a lew42/meepo repo.");
				View({tag: "li"}, "Include the webpack setup.");
				View({tag: "li"}, "Grab some screenshots of the folder structure?");
				View({tag: "li"}, "Just let people browse on over and check it out...");
				View({tag: "li"}, "An alternative to Lerna, using environment variables, or git sub modules.");
				View({tag: "li"}, "More about the problem -->").click(function(){
					problem.activate();
				});
				View({tag: "li"}, "Make sure to show how to setup Sublime to ignore the root n_m, and not the 'local' n_m...");
				
			});
		});
	});


	problem = this.addSubPage("problem", Page(function(){
		Paper(function(){
			View(function(){
				this.addClass("content-squeeze");
				View.p("Back").click(function(){
					meepo.activate();
				});

				View.h1("meepo/problem");
				View.p("What is the problem that this pattern is solving?");

				View.h2("1. Module madness");
				View.p("Obviously, we want to break our files into pieces.  This is the job of something like webpack.  I'll have to write a separate post that really illustrates the before/after webpack/browserify.");

				View.h2("2. Global module namespace");
				View.p("Using relative require('./path/to/module') is a major pain in the ass.  Whenever you refactor your code, you have to micro manage these.")
				View.p("You can use Lerna, or npm link, or environment variables, but this pattern is much easier.");

				View.h2("3. Version controlled sub modules");
				View.p("You have to .gitignore your node_modules folder, and it's a bad idea to put your own modules in that folder.  Here, we're just creating a nested /code/node_modules/ folder, so that any module inside that /code/ folder can require() the 'local' node_modules.");

				View({tag: "pre", addClass: "language-javascript" }, function(){
					View({tag: "code"}, function(){
						$(prism.highlight("require('yo'); \r\nfunction name(){};", prism.languages.javascript)).appendTo(this.$el);
						
					});	
				});	

				View({tag: "pre", addClass: "language-javascript" }, function(){
					View({tag: "code"}, function(){
						$(prism.highlight(test1, prism.languages.javascript)).appendTo(this.$el);
						
					});	
				});
			});
		});
	}));
});