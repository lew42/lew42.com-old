var Page = require("page42");
var View = require("view42");

var P = View.P, Img = View.Img, H1 = View.H1, H2 = View.H2, H3 = View.H3, H4 = View.H4, H5 = View.H5, H6 = View.H6, Button = View.Button, Section = View.Section, Article = View.Article, Main = View.Main, Nav = View.Nav, Header = View.Header, Footer = View.Footer, Menu = View.Menu, Pre = View.Pre, Code = View.Code, Ul = View.Ul, Ol = View.Ol, Li = View.Li, Em = View.Em, Strong = View.Strong, Span = View.Span;

var Paper = Section.extend({
	name: "Paper"
})

module.exports = Page(function(){
	this.addClass("spa-page page flush");
	var page = this;

	View(function(){
		this.addClass("has-inner-bg banner");

		View(function(){
			this.addClass("inner-bg bg-fire")
		});

		View(function(){
			this.addClass("global-squeeze inner ta-c white text-shadow");
			View.h1("Single Page Applications");
			
		});
	});

	Paper(function(){

		View(function(){
			this.addClass("content-squeeze");
			// View.h1("Single Page Applications");
			View.p("This is a really bad name for a... 'bundled' website...").addClass("intro");

			P("Can I come up with a better name?");
			P("Yet, in practice, a hybrid between the traditional server request and a client-side-routed app is optimal.  In other words, most of what a SPA is should be considered a 'best practice'.");

			H5("There are 2 main components to consider:")
		});

		Section(function(){
			this.addClass("auto-grid c-basis-m");

			var Item = Article.extend({
				addClass: "padded"
			})
			Item(function(){
				H5("Bundling: aka Networking");

				P("Load multiple pages (potentially the entire site) on the first request.");

				P("There is a very wide range of options in terms of:");

				Ul(function(){
					Li("# of file requests");
					Li("Size of file requests");
					Li("Asynchronous vs blocking");
					Li("Preloading vs On-demand/Lazy loading");
					Li("Types of assets (css, js, fonts, imgs, json, etc)");
				});
			});

			Item(function(){
				H5("Client-Side Routing");
				P("Utilizes the history.pushState feature to avoid making server requests to load a few more bytes of data.");
			});
		});
	});
});