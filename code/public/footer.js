var View = require("view42");

var Filler = View.extend(function(){
	View.h3().filler("1s");
	View.p().filler("1-3s");
});

var Footer = module.exports = View.extend({
	name: "Footer",
	tag: "footer",
	addClass: "main ta-c",
	content: function(){
		var app = this.app;

		View("Designed and developed with love and tears.");
			View("© Michael Lewis 2017");
	}
});