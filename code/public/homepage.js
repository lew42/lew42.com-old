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
})

var logo = require("./lew.logo.svg.str.js");
var $ = require("jquery");
var $logo = $(logo)

module.exports = Page({ name: "home" }, function(){
	var app = this.app;
	Paper(function(){
		View(function(){
			this.addClass("content-squeeze");
			View.h1("Michael Lewis");
			View.p("This website is powered by a jQuery-based, webpack-bundled, front-end-framework that I built-myself.").addClass("intro");
		});
	});

	// Paper(function(){
	// 	View(function(){
	// 		this.addClass("content-squeeze");

	// 		View.h3("Maybe this should stay white");
	// 	});
	// });

	View(function(){
		this.addClass("bg-orange");

		View(function(){
			this.addClass("auto-grid llh");

			View(function(){
				View.h2("developer")
			});
			View(function(){
				View.h2("designer");
			});
			View(function(){
				View.h2("dad");
			});
		});
	});

	View(function(){
		this.addClass("split-wrap");
		Paper(function(){
			this.addClass("split");
			View(function(){
				this.addClass("auto-grid");
				View(function(){
					View.h3("It's a work in progress");
					View.p("So don't look too closely.  I've been fighting to make flexbox work, with mixed results.");
				});
				View(function(){
					View.h3("4k monitors, anyone?");
					View.p("I really want a monitor with 4k resolution (but I don't have one yet).  What does that mean for responsive web design?");
				});
			});
		});
	});

	Paper(function(){
		this.addClass("nuts");
		View(function(){
			this.addClass("content-squeeze ta-c")
			View.h3("The Nuts").addClass("tt-u");
			View.p("Sort these into an ordered grid of the most important things I should be showcasing.");
		});

		Section(function(){
			this.addClass("auto-grid");
			Section(function(){
				// this.addClass("auto-grid");
				View(function(){
					this.click(function(){
						app.logo.activate();
					});
					View(function(){
						this.css("padding", "1rem");
						$logo.appendTo(this.$el);
					});
					View.h3("My Fucking SVG Logo");
					View.p().filler("2-3s");
				});
				View(function(){
					View({tag: "img"}).attr("src", "/img/logger.jpg");
					View.h3("console.log grouping, sourcemaps, line numbers");
					View.p("This would be much better if I defined view, h1, div, etc...");
				});
				View(function(){
					View({tag: "img"}).attr("src", "/img/forms.jpg");
					View.h3("Getting LESS to work with webpack");
					View.p().filler("2-3s");
				});
				View(function(){
					View({tag: "img"}).attr("src", "/img/aecircles.gif");
					View.h3("The view sandbox.");
					View.p("This would be much better if I defined view, h1, div, etc...");
				});
			})
			Section(function(){
				// this.addClass("auto-grid");
				View(function(){
					View({tag: "img"}).attr("src", "/img/obj.jpg");
					View.h3("JavaScript framework stuff (a lot)");
					View.p().filler("2-3s");
				});
				View(function(){
					View({tag: "img"}).attr("src", "/img/perspective-panel.jpg");
					View.h3("Giga and micro layouts");
					View.p().filler("2-3s");
				});
				View(function(){
					View({tag: "img"}).attr("src", "/img/ih3.jpg");
					View.h3("Flexbox columns and grids");
					View.p().filler("2-3s");
				});
			})
		});
	});

	View(function(){
		this.addClass("split-fire global-squeeze");

		View(function(){
			this.addClass("auto-grid");

			View(function(){
				this.addClass("dark-card");

				View.h3("Employment Status:").addClass("orange");
				View.h3("Unemployed").addClass("white");

				// View.p("But, with a little TLC, it should work pretty well").css("color", "#ccc");

				// View("Button in orange, text in white").addClass("btn");
			});

			View(function(){
				this.addClass("right");

				View(function(){
					this.addClass("inner");
					View.h3("The best decision you'll ever make.");

					View(function(){
						this.addClass("tar");
						View("Hire me &nbsp;&nbsp;", View.Icon("angle-right").removeClass("fa-fw")).addClass("cta");
					});
				});

			});
		});
	});
});