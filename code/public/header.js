var View = require("view42");
var logo = require("./lew.logo.svg.str.js");
var $ = require("jquery");
var $logo = $(logo)

var Header = module.exports = View.extend({
	name: "Header",
	tag: "header",
	content: function(){
		var app = this.app;

		View(function(){
			this.addClass("inner global-squeeze");
			View(function(){
				this.addClass("logo-wrap").click(function(){
					app.home.activate();
				});
				$logo.appendTo(this.$el);
			});
			for (var i = 0; i < app.pages.length; i++){

			}

			View({
				tag: "nav",
				addClass: "main",
				content: function(){
					// View("LEW42");
					// View("home").click(function(){
					// 	app.home.activate();
					// }.bind(this));
					View({tag: "a"}, function(){
						this.attr("href", "https://github.com/mikelew42")
						View.Icon("github");
					});
					View({tag: "a"}, function(){
						this.attr("href", "http://stackoverflow.com/users/1015232/mike-lewis")
						View.Icon("stack-overflow");
					});
					View({tag: "a"}, function(){
						this.attr("href", "https://www.linkedin.com/in/michael-lewis813")
						View.Icon("linkedin");
					});
					View({tag: "a"}, function(){
						this.attr("href", "https://twitter.com/mlew42")
						View.Icon("twitter");
					});
					View.Icon("bars").click(function(){
						modal.$el.fadeIn();
					});
					// View("test").click(function(){
					// 	app.test.activate();
					// }.bind(this));

					// View("tools").click(function(){
					// 	app.tools.activate();
					// });
					
					// View("sitemap").click(function(){
					// 	app.sitemap.activate();
					// });


					// View("grids").click(function(){
					// 	app.test.view1.grid.route.activate();
					// });

					// View("typography").click(function(){
					// 	app.test.view1.typography.route.activate();
					// });

					// View("theme").click(function(){
					// 	app.test.view1.sandbox.route.activate();
					// });
				}
			});

			var modal = View(function(){
				View(function(){
					this.addClass("inner global-squeeze");

					View({tag: "nav"}, function(){
						View.Icon("close");
						View("test").click(function(e){
							app.test.activate();
						});	
						View("sitemap").click(function(e){
							app.sitemap.activate();
						});

						View(function(){
							View({tag: "a"}, function(){
								this.attr("href", "https://github.com/mikelew42")
								View.Icon("github");
							});
							View({tag: "a"}, function(){
								this.attr("href", "http://stackoverflow.com/users/1015232/mike-lewis")
								View.Icon("stack-overflow");
							});
							View({tag: "a"}, function(){
								this.attr("href", "https://www.linkedin.com/in/michael-lewis813")
								View.Icon("linkedin");
							});
							View({tag: "a"}, function(){
								this.attr("href", "https://twitter.com/mlew42")
								View.Icon("twitter");
							});
						});
					});
				});
			}).appendTo("#app").addClass("modal").click(function(){
				modal.fadeOut();
			});
			
		});
	}
});