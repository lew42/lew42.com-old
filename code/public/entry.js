// require("../css/styles.less");
require("lorem");
var Router = require("route42/Route3/Router3");

var view = require("view42");
var $ = window.$ = require("jquery");

var test = require("test42");

var Page1 = require("page42/Page1");
var App = require("app42");

var app = view.x(function(){
	var app = this;

	this.route = window.router = Router({
		// log: true
	});

	this.route.add("style")
	this.route.add("pkg42")
	var code = this.route.add("code")
		code.add("base42");
		code.add("log42");
		code.add("mod42");
		code.add("route42");
		code.add("test42");
		code.add("view42");
	this.route.add("topic")
	this.route.add("post")
	this.route.add("hire")
	this.route.add("me")

	// var home = Page1();
	// home.set_route(this.route);

	// var pages = require.context("./", true, /\.page\.js$/);
	// var pageKeys = pages.keys();
	// var rt;
	// var rtp;
	// var route;
	// var page;
	// for (var i = 0; i < pageKeys.length; i++){
	// 	page = pages(pageKeys[i]);
	// 	// this.route.add()
	// 	if (page instanceof Page1){
	// 		console.log(pageKeys[i]);
	// 		rt = pageKeys[i].replace("./", "").replace(".page.js", "");
	// 		rtp = rt.split("/");
	// 		if (rtp[rtp.length - 1] === rtp[rtp.length - 2]){
	// 			rtp.pop();
	// 		}

	// 		rtp = rtp.join("/");
	// 		console.log(rtp);

	// 		route = this.route.add(rtp);
	// 		route.page = page;
	// 		page.set_route(route);
	// 	}
	// }








	// add routes
	var tests = require.context("../", true, /\.tests\.js$/);

	var test_route = this.route.add("test").then(function(){
		// load all
		// tests.keys().forEach(function(v){
		// 	tests(v);
		// });
	});


	var test_routes = function(requireContext, test_route) {
		var keys = requireContext.keys(), key;
		// console.log(keys);
		for (var i = 0; i < keys.length; i++){
			key = keys[i].replace("./", "").replace(".tests.js", "");

			test_route.add({
				name: key,
				path: key,
				label: key,
				key: keys[i],
				allowDefault: true,
				matchBeginning: true,
				expand: false
			}).then(function(){
				var route = this;
				this.remainder = this.remainder || [];
				test.route = this;
				// probably doesn't get captured anywhere...
				var v = view(function(){
					this.h3("Test: " + route.part);
					requireContext(route.key);
				});

				this.andThen(function(){
					return v.slideUp().$el.promise();
				});

				v.hide().appendTo("body").slideDown()
				return v.$el.promise();
			});
		}
		// keys.forEach(context); 
	};
	
	test_routes(tests, test_route);

	// collapses the /test/* routes
	test_route.each(function(route){
		route.expand = false;
	});

	this.route.matchAndActivate();
	this.route.render();
});

$(function(){
	app.prependTo("body").render();
});