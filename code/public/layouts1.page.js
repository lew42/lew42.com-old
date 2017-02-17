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
		View.h3(".grid").click(function(){
			grid.toggleClass("break");
		});
		grid = View(function(){
			this.addClass("grid pad-c");
			View("left");
			View("right");
		})
	});

	LayoutTest(function(){
		var grid;
		View.h3(".grid.three").click(function(){
			grid.toggleClass("break");
		});
		View("add").click(function(){
			grid.item("item");
		});
		grid = View(function(){
			this.addClass("grid three pad-c");

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
		var grid;
		View.h3(".grid.four").click(function(){
			grid.toggleClass("break");
		});
		View("add").click(function(){
			grid.item("item");
		});
		grid = View(function(){
			this.addClass("grid four pad-c");

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
			this.item("item");
		});
	});

	LayoutTest(function(){
		var grid;
		View.h3(".grid > .third/.thirds").click(function(){
			grid.toggleClass("break");
		});
		grid = View(function(){
			this.addClass("grid pad-c");
			View("left").addClass("third");
			View("right").addClass("thirds");
		});
	});

	LayoutTest(function(){
		var grid;
		View.h3(".grid > .thirds/.third").click(function(){
			grid.toggleClass("break");
		});
		grid = View(function(){
			this.addClass("grid pad-c");
			View("left").addClass("thirds");
			View("right").addClass("third");
		});
	});


	LayoutTest(function(){
		var grid;
		View.h3("nested .grids").click(function(){
			grid.toggleClass("break");
		});
		grid = View(function(){
			this.addClass("grid pad-c");
			// View(function(){
			// 	this.addClass("no-pad")
				View(function(){
					this.addClass("grid no-pad pad-c").click(function(){
						this.toggleClass("break");
					}.bind(this));
					View("left").addClass("third");
					View("right").addClass("thirds");
				});
			// });
			View("right");
		});
	});

	LayoutTest(function(){

	});


});