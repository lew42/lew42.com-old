var Page = require("page42");
var View = require("view42");

require("./background.less");
require("./grid-page.less");

var LayoutTest = View.extend({
	name: "LayoutTest"
});

var Switch = View.extend({
	autoRender: false,
	name: "Switch",
	content: function(){
		this.append(this.name);
		this.click(function(){
			this.clicker();
			this.switches.update();
		}.bind(this));
	},
	update: function(){
		if (this.switches.subject.hasClass(this.name))
			this.addClass("active");
		else 
			this.removeClass("active");
	},
	clicker: function(){
		this.switches.subject.toggleClass(this.name);
		this.switches.subject.removeClass(this.removals);
	}
})

var Switches = View.extend({
	name: "Switches",
	content: function(){
		if (!this.subject)
			console.error("no subject");

		for (var i = 0; i < this.switches.length; i++){
			this.switches[i].switches = this;
			this.switches[i].render();
		}
	},
	update: function(){
		for (var i = 0; i < this.switches.length; i++){
			this.switches[i].update();
		}
	}
})

var Section = View.extend({
	tag: "section",
	name: "Section"
});

var Paper = View.extend({
	tag: "article",
	name: "Paper"
});

var PaperTpl = Paper.extend(function(){
	// View.h3().filler("1s");
	// View.p().filler("2-4s");
});

var Cols = Section.extend({
	name: "Cols",
	addClass: "cols-2",
	make: function(n, arg){
		for (var i = 0; i < n; i++){
			this.addItem(arg);
		}
	},
	main: function(){
		this.removeClass("cols");

		if (this.doSwitches){

			this.switches = Switches({
				subject: this,
				switches: [
					Switch({ name: "one", removals: "two three four" }),
					Switch({ name: "two", removals: "one three four" }),
					Switch({ name: "three", removals: "one two four" }),
					Switch({ name: "four", removals: "one two three" }),

					Switch({ name: "limit" }),
					Switch({ name: "break" }),
				]
			});

			this.switches.$el.insertBefore(this.$el);

			View("add").addClass("switch").click(function(){
				this.addItem();
			}.bind(this)).prependTo(this.switches.$el)
		}

		this.content();
	},
	addItem: function(arg){
		var item = View(arg, function(){
			PaperTpl();
		}).appendTo(this.$el);
		item.click(function(){
			item.remove();
		});
	}
});

var Grid = Section.extend({
	name: "Grid",
	addClass: "grid-2 naked",
	removeClass: "grid",
	make: function(n, arg){
		for (var i = 0; i < n; i++){
			this.addItem(arg);
		}
	},
	main: function(){
		this.removeClass("grid");

		this.switches = Switches({
			subject: this,
			switches: [
				Switch({ name: "one", removals: "two three four" }),
				Switch({ name: "two", removals: "one three four" }),
				Switch({ name: "three", removals: "one two four" }),
				Switch({ name: "four", removals: "one two three" }),
				
				Switch({ name: "limit" }),
				Switch({ name: "space" }),
				Switch({ name: "pad" }),
			]
		});

		this.switches.$el.insertBefore(this.$el);

		View("add").addClass("switch").click(function(){
			this.addItem();
		}.bind(this)).prependTo(this.switches.$el)

		this.content();
	},
	addItem: function(arg){
		var item = PaperTpl(arg).appendTo(this.$el);
		item.click(function(){
			item.remove();
		});
	}
});

var Grid3 = Section.extend({
	name: "Grid3",
	addClass: "grid-3",
	make: function(n, arg){
		for (var i = 0; i < n; i++){
			this.addItem(arg);
		}
	},
	main: function(){
		// this.removeClass("cols");

		// if (this.doSwitches){

			// this.switches = Switches({
			// 	subject: this,
			// 	switches: [
			// 		Switch({ name: "gutters" }),
			// 		Switch({ name: "minc-10", removals: "minc-15 minc-20 minc-30" }),
			// 		Switch({ name: "minc-15", removals: "minc-10 minc-20 minc-30" }),
			// 		Switch({ name: "minc-20", removals: "minc-15 minc-10 minc-30" }),
			// 		Switch({ name: "minc-30", removals: "minc-15 minc-10 minc-20" }),
			// 		Switch({ name: "basis2", removals: "basis3 basis4" }),
			// 		Switch({ name: "basis3", removals: "basis4 basis2" }),
			// 		Switch({ name: "basis4", removals: "basis3 basis2" }),
			// 		Switch({ name: "jc-center" }),
			// 		Switch({ name: "ai-start" }),
			// 		Switch({ name: "ac-start" }),
			// 		Switch({ name: "maxc-45" }),
			// 		Switch({ name: "flex-2" }),
			// 		Switch({ name: "flex-3" }),
			// 		// Switch({ name: "three", removals: "one two four" }),
			// 		// Switch({ name: "four", removals: "one two three" }),

			// 		// Switch({ name: "limit" }),
			// 		// Switch({ name: "break" }),
			// 	]
			// });

			// this.switches.$el.prependTo(this.$el);

			// View("add").addClass("switch").click(function(){
			// 	this.addItem();
			// }.bind(this)).prependTo(this.switches.$el)
		// }

		this.content();
	},
	addItem: function(arg){
		// var item = View(arg, function(){
			var item = PaperTpl(
				function(){ View.h3().css("font-size", "1.5em").filler("1s"); View.p().filler("2-4s"); }
			).appendTo(this.$el);
		// }).appendTo(this.$el);
	}
});

module.exports = Page(function(){
	this.addClass("grid-example-page stack-c-2rem").removeClass("grid");


	Section(function(){
		this.addClass("global-squeeze-42 paper");

		View.h1("v1")

		Grid3(function(){
			this.addClass("stack-4rem");
			this.addClass("minc-20 gutters maxc-45 jc-center")
			this.make(4);
		});

		View.h1("v2")

		// View(function(){
		// 	this.addClass("shaded-bg");
			Grid3(function(){
				this.addClass("stack-4rem gutters")
				Grid3(function(){
					this.addClass("minc-20 gutters")
					this.make(1);
				});
				Grid3(function(){
					this.addClass("minc-20 gutters maxc-45 flex-3")
					this.make(3);
				});
			});
		// });
	});

});