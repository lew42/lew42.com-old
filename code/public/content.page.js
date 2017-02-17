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

module.exports = Page(function(){
	Paper(function(){
		View(function(){
			this.addClass("content-squeeze");
			View.h1("Michael Lewis");
			View.p("Some catchy, maybe humorous slogan can go here.  Not sure if anyone will even read this though.  They'll probably just go for a colorful box.").addClass("intro");
		});
	});
	View(function(){
		this.addClass("bg-orange");
		View(function(){
			this.addClass("auto-grid llh");
			View(function(){
				View.h2("code")
			});
			View(function(){
				View.h2("style");
			});
			View(function(){
				View.h2("life");
			});
		});
	});

	Paper(function(){
		this.addClass("split");
		View(function(){
			this.addClass("auto-grid");
			View(function(){
				View.h3("Don't try to sell myself");
				View.p("The second I start putting 'hire me' buttons around my site, it makes me look desperate.  Just add some quality content, and use my email to indicate that I'm looking for work.");
			});
			View(function(){
				View.h3("Help people find their way to what they're looking for");
				View.p("If it were easy to make websites, developers wouldn't have jobs.  Still, workflow improvements can unlock competitive advantages.  The most significant of which, is that time is money, and a streamlined development process means cost effectiveness.");
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
					View(function(){
						this.css("padding", "1rem");
						$logo.appendTo(this.$el);
					});
					View.h3("My Fucking SVG Logo");
					View.p().filler("2-3s");
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
					View({tag: "img"}).attr("src", "/img/perspective-panel.jpg");
					View.h3("Giga and micro layouts");
					View.p().filler("2-3s");
				});
				View(function(){
					View({tag: "img"}).attr("src", "/img/ih3.jpg");
					View.h3("Flexbox columns and grids");
					View.p().filler("2-3s");
				});
				View(function(){
					View({tag: "img"}).attr("src", "/img/obj.jpg");
					View.h3("JavaScript framework stuff (a lot)");
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

				View.h3("This has problems at low widths").addClass("orange");
				View.h3("This also has problems when breaking").addClass("white");

				View.p("But, with a little TLC, it should work pretty well").css("color", "#ccc");

				View("Button in orange, text in white").addClass("btn");
			});

			View(function(){
				this.addClass("right");

				View(function(){
					this.addClass("inner");
					View.h3("This is a really important question, and if it gets long enough, I should put a max-width on the .inner container, to prevent it from growing ridiculously wide at 1600+ px?");

					View(function(){
						this.addClass("tar");
						View("Call to action").addClass("cta");
					});
				});

			});
		});
	});
});