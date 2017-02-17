var Promise = require("promise-polyfill");

if (!window.Promise){
	window.Promise = Promise;
}

var App = require("app42");
var App2 = require("app42/App2");
var View = require("view42");
var Cols = require("grid").Cols;

// require("less42"); // if you want better control over order - don't just suck it all in at once...
// we can @import it in pieces, within styles.less
require("../css/styles.less");

var $ = window.$ = require("jquery");

var homepage = require("./homepage");
var AppView = require("./AppView");

var Header = require("./header.js");
var Footer = require("./footer.js");

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
		// View(function(){
		// 	this.route.each(function(route){
		// 		RouteView({
		// 			route: route
		// 		})
		// 	});
		// }.bind(this)).addClass("children");
	}
});

var app = App2({
	name: "app",
	home: homepage,
	// View: AppView,
	init: function(){
		this.loadPages(require.context("./", true, /\.page\.js$/), "page");
		// this.loadTests(require.context("../", true, /\.tests\.js$/));
		// this.logger();
		// this.route.logger();
	},
	content: function(){
		// this.nav = RouteView({
		// 	route: this.route
		// }).addClass("nav");
		this.removeClass("app app2 page").attr("id", "app").attr("class", null);

		Header({
			app: this
		});

		this.main = View({
			tag: "main"
		})

		Footer();
	}
});