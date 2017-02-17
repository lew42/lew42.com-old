var Page = require("page42");
var View = require("view42");

require("./background.less");

var LayoutTest = View.extend({
	name: "LayoutTest"
})

var Section = View.extend({
	tag: "section",
	name: "Section"
});

var Paper = View.extend({
	tag: "article",
	name: "Paper"
})

var logo = require("./lew.logo.svg.str.js");

var $ = require("jquery");

module.exports = Page(function(){
	this.addClass("background-page stack-c-2rem")
	View(function(){}).addClass("inner global-squeeze");

	Section(function(){
		this.addClass("s-15 squeeze-c");
		this.click(function(){
			this.toggleClass("flip")
		}.bind(this));
		var $logo = $(logo);
		View(function(){
			this.addClass("logo-wrap")
			View(function(){}).addClass("inner-bg");
			this.append($logo);
			
		});
	});

	Section(function(){
		this.addClass("squeeze-c large");

		Paper(function(){
			this.addClass("radial");
			View.h1("This is a Section with Paper");
			View.p().filler("1-3s");
			View.h2("And this is an H2 header");
			View.p().filler("1-3s");
			View.h3("H3 header right here");
			View({tag: "h4"}, "H4 pls?")
			View({tag: "h5"}, "H5 pls?")
			View({tag: "h6"}, "H6 pls?")
		});
	});
	Section(function(){
		this.addClass("squeeze-c large s-14");

		Paper(function(){
			this.addClass("radial");
			View.h1("This is a Section with padding and Paper");
			View.p().filler("1-3s");
		});
	});

	View(function(){
		this.addClass("paper squeeze-test-1");
		View.h1("squeeze-test-1 directly on paper");
		View.p("Without % width or parent padding, this goes to full width below its max-width (here, 80em)");
	});

	View(function(){
		this.addClass("paper squeeze-test-2 stack-4rem");
		View.h1("squeeze-test-2 directly on paper");
		View.p("Without % width or parent padding, this goes to full width below its max-width (here, 80em)");
	});

	View(function(){
		this.addClass("squeeze-test-1");

		View(function(){
			this.addClass("paper");
			View.h1("squeeze-test-1: max-width: 80em;");
			View.p("Without % width or parent padding, this goes to full width below its max-width (here, 80em)");
		});

	});

	View(function(){
		this.addClass("squeeze-test-3-wrap");

		View(function(){
			this.addClass("squeeze-test-3");

			View(function(){
				this.addClass("paper");
				View.h1("squeeze-test-3: padding on parent");
			})
		});
	});

	View(function(){
		this.addClass("squeeze-test-3-wrap stack-c-2rem squeeze-c");

			View(function(){
				this.addClass("paper");
				View.h1("squeeze-test-3: padding on parent");
			});
			View(function(){
				this.addClass("paper large");
				View.h1("squeeze-test-3: padding on parent");
				View.p().filler("4s");
			});

			View(function(){
				this.addClass("grid spaced three zg s-11");

				View(function(){
					View.h1("Spaced grid shows background");
					View.p("But, I still need to figure out how full views are supposed to work.");
				});
				View(function(){
					View.h1("Grids are good for previews");
					View.p("But, I still need to figure out how full views are supposed to work.");
				});
				View(function(){
					View.h1("Not so good for single view");
					View.p("But, I still need to figure out how full views are supposed to work.");
				});
				View(function(){
					View.h1("THESE FUCKING LAZY VIEWS");
					View.p("But, I still need to figure out how full views are supposed to work.");
				});
				View(function(){
					View.h1("MUST KEEP EVEN COUNT");
					View.p("But, I still need to figure out how full views are supposed to work.");
				});
			});


		View(function(){
			this.addClass("paper large");
			View.h1("squeeze-test-3: padding on parent");
			View.p().filler("4s");
		});


		View(function(){
			this.addClass("grid three grid-with-items-2");

			View(function(){
				View(function(){
					View.h1("Add Item");
					View.p().filler("1-3s");
				});
			}).click(function(){
				Item().appendTo(this.$el);
			}.bind(this));
			var Item = View.extend(function(){
				View(function(){
					View.h1("Item");
					View.p().filler("1-3s");
				});
			});

			Item.make(11);

		});


		View(function(){
			this.addClass("paper large");
			View.h1("squeeze-test-3: padding on parent");
			View.p().filler("4s");
		});

		View(function(){
			this.addClass("grid three grid-with-items");

			View(function(){
				View(function(){
					View.h1("Add Item");
					View.p().filler("1-3s");
				});
			}).click(function(){
				Item().appendTo(this.$el);
			}.bind(this));
			var Item = View.extend(function(){
				View(function(){
					View.h1("Item");
					View.p().filler("1-3s");
				});
			});

			Item.make(11);

		});

		View(function(){
			this.addClass("paper large");
			View.h1("squeeze-test-3: padding on parent");
			View.p().filler("4s");
		});
		View(function(){
			this.addClass("paper large");
			View.h1("squeeze-test-3: padding on parent");
			View.p().filler("4s");
		});
	});

	View(function(){
		this.addClass("squeeze-test-2");

		View(function(){
			this.addClass("paper");
			View.h1("squeeze-test-2: max-width: 80em; width: 90%;");
		});

		View(function(){
			this.addClass("squeeze-test-2 stack-4p");

			View(function(){
				this.addClass("paper");
				View.h1("nested squeeze-test-2: max-width: 80em; width: 90%;");
			});

		});

	});


	View(function(){
		this.addClass("global-squeeze");		

		View(function(){
			View.p("Major problem with this auto-width grid:  It doesn't guarantee 100% width.  One/all of the items needs to grow...").css("color", "#ccc").css("font-size", "2em").css("font-weight", "bold");
			this.addClass("wrap-13");
			View(function(){
				this.addClass("s-eight s-13");

				View(function(){
					this.addClass("flex");

					this.click(function(){
						this.toggleClass("break");
					}.bind(this));

					View(function(){
						this.addClass("dark-card");

						View.h3("Put this in box").addClass("orange");
						View.h3("This also has problems when breaking").addClass("white");

						View.p("But, with a little TLC, it should work pretty well").css("color", "#ccc");

						View("Button in orange, text in white").addClass("btn");
					});

					View(function(){
						this.addClass("right");

						View(function(){
							this.addClass("inner");
							View.h3("Hello world.");

							View(function(){
								this.addClass("tar");
								View("Call to action").addClass("cta");
							});
						});

					});


					View(function(){
						this.addClass("dark-card second-dark-card");

						View.h3("Ooo, this grid is auto-widths").addClass("orange");
						View.h3("This also has problems when breaking").addClass("white");

						View.p("This really needs to break to 1:1/1").css("color", "#ccc").css("font-size", "2em").css("font-weight", "bold");

						View("Button in orange, text in white").addClass("btn");
					});

				});
			});
		});

	});
		View(function(){
			this.addClass("bg-wrap wrap-11");

			View(function(){
				this.addClass("s-11 jumbo-squeeze");
				View(function(){
					this.addClass("inner");

					View.h1("The section > .inner trick");

					View.p("The trick here, is to add the max-width and margin: 0 auto to the section, not the .inner.  That only works if you don't need a FULL width background for he section.  But, it will be semi-full width...");

					View.h2("This is a semi-full width section...");

					View.p("If it doesn't look bad at mega-widths, then you could have a bg to it.  But, that bg has to be UNBORDERED.");

					View.h1("How wide?  You could have several standardized/ reusable widths.")

					View.h2("You might want a wrapper on it to give a true full-width section bg...")
				});	
			});

			View(function(){
				this.addClass("s-11 jumbo-squeeze2");


				View(function(){
					this.addClass("inner inner-2");

					View.h1("How is this on width?");

					View.p("This is still too wide for paragraph text.  If we have a long paragraph, it's going to span more than the ~60 characters or so that you want.")
					View.p("So, I need to find a way to break actual content into smaller pieces.")

				});
			});
			View(function(){
				this.addClass("s-11 jumbo-squeeze3");


				View(function(){
					this.addClass("inner inner-2");

					View.h1("How is this on width?");

					View.p("This is still too wide for paragraph text.  If we have a long paragraph, it's going to span more than the ~60 characters or so that you want.")
					View.p("So, I need to find a way to break actual content into smaller pieces.")

				});
			});

			View(function(){
				this.addClass("grid spaced three s-11");

				View(function(){
					View.h1("Spaced grid shows background");
					View.p("But, I still need to figure out how full views are supposed to work.");
				});
				View(function(){
					View.h1("Grids are good for previews");
					View.p("But, I still need to figure out how full views are supposed to work.");
				});
				View(function(){
					View.h1("Not so good for single view");
					View.p("But, I still need to figure out how full views are supposed to work.");
				});
			});


			View(function(){
				this.addClass("s-11 jumbo-squeeze s-12");

				View(function(){
					this.addClass("inner inner-2");

					View.h1("How is this on width?");

					View.p("This is still too wide for paragraph text.  If we have a long paragraph, it's going to span more than the ~60 characters or so that you want.")
					View.p("So, I need to find a way to break actual content into smaller pieces.")

					View(function(){
						this.addClass("grid three spaced zg grid-dark");

						View(function(){
							View.h1("Spaced grid shows background");
							View.p("But, I still need to figure out how full views are supposed to work.");
						});
						View(function(){
							View.h1("Grids are good for previews");
							View.p("But, I still need to figure out how full views are supposed to work.");
						});
						View(function(){
							View.h1("Not so good for single view");
							View.p("But, I still need to figure out how full views are supposed to work.");
						});
					});

				});
			});
		});

	View(function(){

		this.addClass("global-squeeze")

		View(function(){
			this.addClass("s-nine");

			View(function(){
				this.addClass("inner");

				View.h1("There are two types of centerings: fluid and max-width");

				View.p("I think this is already too wide, unless we jack up the size of the h1");

				View.h1("There are two types of centerings: fluid and max-width").css("font-size", "3em");

			});
		});

		View(function(){
			this.addClass("s-ten");

			View.h1("This is nearly the same layout..");

			View.p("Padding should be a little different.");

			View.p("Can't really have a max-width and keep it centered, without extra work.");

			View.h3("Advantages to an .inner");
			View.p("You can have a background element with as many layers as you want.")
			View.p("You can have a max-width.")
			View.p("You can do cool rotational things.")

			View.h2("Here's the thing");
			View.p("You can do a max-width + margin: 0 auto WITHOUT an .inner.");
			View.p("But - that will become full width below its max width");
			View.p("If you don't want the full-width effect, and maintain a certain amount of padding no matter what, then you need an .inner");

			View.h2("This is the same concept as centering the fire box");
		});

	});


		View(function(){
			this.addClass("s-one grid three pad-c test-center-grid wrap");

			this.click(function(){
				this.toggleClass("break");
			}.bind(this));

			View(function(){
				View.h1("LIFE");
				View("Yo").addClass("yo");
			});

			View(function(){
				View.h1("LIBERTY")
			});

			View(function(){
				View.h1("HAPPINESS")
			});
		});

	View(function(){
		this.addClass("global-squeeze");

		View(function(){
			this.addClass("s-two p-centered");

			View.h1("Let's hope this is padded properly");
			View.p().filler("2-4s");

			View(function(){
				this.addClass("grid three spaced large zg");

				View(function(){
					View.Icon("beer").addClass("fa-3x");
					View.h3().filler("3-5w");
					View.p().filler("1-3s");
				});

				View(function(){
					View.Icon("camera-retro").addClass("fa-3x").css("float", "left");
					View.h3("Remember");
					View.p("I can put any FontAwesome icon behind the contents.  Just use z-indexes and :before pseudo selector, like FA does.");
				});

				View(function(){
					View.Icon("bank").addClass("fa-3x");
					View.h3().filler("3-5w");
					View.p().filler("1-3s");
				});
			});
		});

		View(function(){
			this.addClass("s-three");

			View(function(){
				this.addClass("dark-card");

				View.h3("Don't use % padding for centering, unless you want it squished at smaller resolutions").addClass("orange");
				View.h3("A better approach:").addClass("white");

				View.p("Use the 'squeeze' method (max-width + margin: 0 auto), optionally with padding on the container.").css("color", "white");

				View.p("Using padding on the container is the same as using a width: <100% in addition to the max-width+margin0/auto.").css("color", "white");
				View("Button in orange, text in white").addClass("btn");
			});
		});

		View(function(){
			this.addClass("s-five");

			View(function(){
				this.addClass("grid two");

				this.click(function(){
					this.toggleClass("break");
				}.bind(this));

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


		View(function(){
			this.addClass("s-six");

			var grid;

			View(function(){
				this.addClass("controls flex");
				View("add").click(function(){
					grid.item("item");
				});
				View("spaced").click(function(){
					grid.toggleClass("spaced").removeClass("large");;
				});
				View("large").click(function(){
					grid.toggleClass("large").addClass("spaced");
				});
				View("zg").click(function(){
					grid.toggleClass("zg");
				});
				View("break").click(function(){
					grid.toggleClass("break");
				});

				View("one").click(function(){
					grid.removeClass("three four").addClass("break");
				});

				View("two").click(function(){
					grid.removeClass("three four break");
				});

				View("three").click(function(){
					grid.removeClass("break four").addClass("three");
				});

				View("four").click(function(){
					grid.removeClass("break three").addClass("four");
				});
			});
			grid = View(function(){
				this.addClass("grid spaced pad-c");

				this.item = function(name){
					View(name).click(function(){
						this.remove();
					}).appendTo(grid);
				};

				View("left");
				View("center");
				View("right");

				this.item("item");
				this.item("item");
				this.item("item");
				this.item("item");
				this.item("item");
			});
		});

		// View(function(){
		// 	this.addClass("s-four pad");
		// 	this.filler("8p");
		// });

	View(function(){
		this.addClass("global-squeeze");

		View(function(){
			this.addClass("s-seven");

			View(function(){
				this.addClass("flex");

				this.click(function(){
					this.toggleClass("break");
				}.bind(this));

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
						View.h3("Hello world.");

						View(function(){
							this.addClass("tar");
							View("Call to action").addClass("cta");
						});
					});

				});
			});
		});

		View(function(){
			this.addClass("s-eight");

			View(function(){
				this.addClass("flex");

				this.click(function(){
					this.toggleClass("break");
				}.bind(this));

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
						View.h3("Hello world.");

						View(function(){
							this.addClass("tar");
							View("Call to action").addClass("cta");
						});
					});

				});


				View(function(){
					this.addClass("dark-card second-dark-card");

					View.h3("This has problems at low widths").addClass("orange");
					View.h3("This also has problems when breaking").addClass("white");

					View.p("But, with a little TLC, it should work pretty well").css("color", "#ccc");

					View("Button in orange, text in white").addClass("btn");
				});

			});

			View.p("It would be nice to go from 1/3 1/3 1/3 to 2/3+1/3 and 100%.  Not sure if I can do this with a grid.third-thirds class, and swap it out with a window.resize handler?")
		});






		View(function(){
			this.addClass("dummy-spacer");
		});
	});
});