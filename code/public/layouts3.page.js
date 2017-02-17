var Page = require("page42");
var View = require("view42");

require("./background.less");
require("./grid-page.less");
require("./layouts3.less");

var Section = View.extend({
	tag: "section",
	name: "Section",
	removeClass: "section"
});

// var logo = require("./lew.logo.svg.str.js");

// var $ = require("jquery");

module.exports = Page(function(){
	this.addClass("layouts3-page");
	var layouts3 = this;

	var subPage = this.addSubPage("sub-page", Page(function(){

		var another = this.addSubPage("another", Page(function(){
			View.h1("back").click(function(){
				subPage.activate();
			});
		}));

		View.h1("another").click(function(){
			another.activate();
		}.bind(this));

		View.h1("back").click(function(){
			layouts3.activate();
		});
	}));


	View.h1("sub-page").click(function(){
		subPage.activate();
	}.bind(this));

	var s1 = Section(function(){
		this.addClass("global-squeeze section-2");

		View.h1("Let's say we have some content here");
		View.p("And we want some gutters for our grid.");

		View(function(){
			this.addClass("auto-grid");
			View().filler("2-4s");
			View().filler("2-4s");
			View().filler("2-4s");
		});		
	});
	s1.clone().addClass("dark");
	Section(function(){
		this.addClass("global-squeeze section-1 stack-2rem");

		View(function(){
			this.addClass("auto-grid");
			View().filler("2-4s");
			View().filler("2-4s");
			View().filler("2-4s");
		});		
	});
	Section(".global-squeeze").addClass("global-squeeze viz padded");
	View(function(){
		this.addClass("viz");
		Section(".giga-squeeze should have its own bg wrapper").addClass("giga-squeeze padded");
	});
	
	Section(function(){
		// View(function(){
			this.addClass("auto-grid  minc-15 pad-c");
			View().filler("1-3s").css("background", "#333");
			View("two").addClass("min-max-1").css("background", "#ff6600");
			View().filler("1-3s").css("background", "#333");
		// });
	}).addClass("global-squeeze viz");
	
	Section(function(){
		// View(function(){
			this.addClass("auto-grid  minc-15 pad-c");
			View().filler("1-3s").css("background", "#333");
			View("two").addClass("min-max-1").css("background", "#ff6600");
			// View().filler("1-3s").css("background", "#333");
		// });
	}).addClass("global-squeeze viz");
	
	Section(function(){
		// View(function(){
			this.addClass("auto-grid  minc-15 pad-c");
			View("two").addClass("min-max-1").css("background", "#ff6600");
			View().filler("1-3s").css("background", "#333");
			// View().filler("1-3s").css("background", "#333");
		// });
	}).addClass("global-squeeze viz");


	Section(function(){
		this.addClass("global-squeeze stack-c-1rem stack-3rem");
		View(function(){
			this.addClass("auto-grid");
			View(function(){
				View.h3("Wrapped with global-squeeze");
				View.p("A section can have global-squeeze, and optionally have padding, depending on what content it has");	
			});
			View(function(){
				View.h3("Mixing squeeze and abs-full");
				View.p("You can't unwrap the global squeeze, so you'd have to keep everything unwrapped.");	
			});
		});
		View(function(){
			this.addClass("auto-grid  minc-15 pad-c");
			View("two").addClass("min-max-1").css("background", "#ff6600");
			View().filler("1-3s").css("background", "#333");
		});
		View(function(){
			this.addClass("auto-grid  minc-15 pad-c");
			View().filler("1-3s").css("background", "#333");
			View("two").addClass("min-max-1").css("background", "#ff6600");
			// View().filler("1-3s").css("background", "#333");
		});

		View(function(){
			this.addClass("auto-grid  minc-15 pad-c");
			View().filler("1-3s").css("background", "#333");
			View("two").addClass("min-max-1").css("background", "#ff6600");
			View().filler("1-3s").css("background", "#333");
		});
	});

	View().addClass("viz").filler("2-5s");

	View(function(){
		this.addClass("viz oh stack-2rem");
		Section(function(){
			this.addClass("auto-grid grid-13");

			View().filler("1-3s");
			View().filler("1-3s");
			View().filler("1-3s");
		});

		// Section("yo").addClass("viz");

		Section(function(){
			this.addClass("auto-grid grid-13");

			View().filler("1-3s");
			View().filler("1-3s");
			View().filler("1-3s");
		});
		Section(function(){
			this.addClass("auto-grid grid-13");

			View().filler("1-3s");
			View().filler("1-3s");
			View().filler("1-3s");
		});
	});
	// View("yo").addClass("viz");
	// View().addClass("viz").filler("2-5s");

	View(function(){
		this.addClass("viz oh grids-14 stack-2rem");
		Section(function(){
			this.addClass("auto-grid");

			View().filler("1-3s");
			View().filler("1-3s");
			View().filler("1-3s");
		});

		// Section("yo").addClass("viz");

		Section(function(){
			this.addClass("auto-grid");

			View(function(){
				this.addClass("no-pad");
				View().filler("1-3s");
				
			});
			View(function(){
				this.addClass("auto-grid flex-2");
				View().filler("1-3s");
				View().filler("1-3s");
			});
		});
		Section(function(){
			this.addClass("auto-grid");

			View().filler("1-3s");
			View().filler("1-3s");
			View().filler("1-3s");
		});
	});
	Section(function(){
		this.addClass("global-squeeze stack-3rem oh grids-14");
		Section(function(){
			this.addClass("auto-grid");

			View().filler("1-3s");
			View().filler("1-3s");
			View().filler("1-3s");
		});

		// Section("yo").addClass("viz");

		Section(function(){
			this.addClass("auto-grid");

			View(function(){
				this.addClass("auto-grid");
				View().filler("1-3s");
				
			});
			View(function(){
				this.addClass("auto-grid flex-2");
				View().filler("1-3s");
				View().filler("1-3s");
			});
		});
	});
});