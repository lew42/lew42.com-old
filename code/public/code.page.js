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

module.exports = Page(function(){
	this.addClass("code-page");
	Paper(function(){
		View(function(){
			this.addClass("content-squeeze");
			View.h1("Code");
			View.p("Here are some things I've been working on.").addClass("intro");
			View({tag: "ul"}, function(){

				View({tag: "li"}, "This website");
				View({tag: "li"}, "My framework");
				View({tag: "li"}, "Base");
				View({tag: "li"}, "Webpack + LESS integration");
				View({tag: "li"}, "Console logging stuff");
				View({tag: "li"}, "Router");
				View({tag: "li"}, "Views");
				View({tag: "li"}, "Tests");
				
			});
		});
	});
});