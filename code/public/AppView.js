var View = require("view42");
var Cols = require("grid").Cols;

var RouteView = View.extend({
	name: "RouteView",
	addClass: "route",
	content: function(){
		var route = this.route;
		View(function(){
			this.append(route.part || "home");
			View.Icon("angle-right");
			this.addClass("flex");
			this.click(function(){
				route.activate();
			});
		});
		View(function(){
			this.route.each(function(route){
				RouteView({
					route: route
				})
			});
		}.bind(this)).addClass("children");
	}
});

var AppView = module.exports = Cols.extend({
	addClass: "app",
	break: 600,
	left: function(){
		this.app = this.parent.app;

		View(function(){
			View("LEW42").addClass("ff-ab tt-u logo");
			View.Icon("bars").removeClass("fa-fw").click(function(){
				this.nav.slideToggle();
			}.bind(this));
		}.bind(this)).addClass("header flex");

		this.nav = RouteView({
			route: this.app.route
		}).addClass("nav");
	},
	right: function(){

	}
});

AppView.Route = RouteView;