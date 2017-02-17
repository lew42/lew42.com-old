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

var homepage = module.exports = Page(function(){
		var app = this.app;
	Paper(function(){
		View(function(){
			this.addClass("sitemap-items auto-grid");
			for (var i = 0; i < app.pages.length; i++){
				(function(i){
					View(app.pages[i].name).click(function(){
						app.pages[i].activate();
					}).addClass("sitemap-item");
				})(i);
			}
		});
	});

});