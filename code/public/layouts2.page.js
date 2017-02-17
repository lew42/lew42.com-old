var Page = require("page42");
var View = require("view42");

require("./layout-tests.less");

var LayoutTest = View.extend({
	name: "LayoutTest"
})

module.exports = Page(function(){
	this.addClass("layout-test-page");

	LayoutTest(function(){
		var grid;
		View.h3(".grid.spaced");

		View(function(){
			this.addClass("controls flex");
			View("add").click(function(){
				grid.item("item");
			});
			View("spaced").click(function(){
				grid.toggleClass("spaced");
			});
			View("large").click(function(){
				grid.toggleClass("large");
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

	LayoutTest(function(){
		this.addClass("");
		View.h3(".pad > .full")
		View(function(){
			this.addClass("pad");
			View.p().filler('2s');
			View(function(){
				this.addClass("full pad style-1");
				View.p().filler("2s");
			});
				View.p().filler("2s");
		});
	});
});