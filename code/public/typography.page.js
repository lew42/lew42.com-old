var View = require("view42");
var Page = require("page");

var P = View.P, Img = View.Img, H1 = View.H1, H2 = View.H2, H3 = View.H3, H4 = View.H4, H5 = View.H5, H6 = View.H6, Button = View.Button, Section = View.Section, Article = View.Article, Main = View.Main, Nav = View.Nav, Header = View.Header, Footer = View.Footer, Menu = View.Menu, Pre = View.Pre, Code = View.Code, Ul = View.Ul, Ol = View.Ol, Li = View.Li, Em = View.Em, Strong = View.Strong, Span = View.Span;

var $ = require("jquery");
var $logo = $(require("./lew.logo.svg.str.js"));

module.exports = Page({
	title: "Typography",
	desc: "A little of this, a little of that",
	content: function(){
		H1("I don't think the h1 should be used more than once.");
		P("Do you even put a period at the end of a title?  Don't think so.");

		H2("And the second most important header, the H2");
		P().filler("3-5s");

		H3("The h3 is always a good option");
		P().filler("3-5s");
		Ul(function(){
			Li("A few list items anyone?");
			Li("Not sure why my inline syntax doesn't work.");
			Li("Don't have time to go back and kill a few days messing around with it though.");
		});

		H4("HOW ABOUT ALL CAPS?");
		P("Can I throw an ", Em("em"), " in the mix?");

		H5("Is the h5 or h6 even needed?");
		P().filler("3-5s");

		H6("I suppose this works");
		P().filler("3-5s");

		Section(function(){
			this.addClass("stack-4rem");
			H1("And an h1 in thin mode").addClass("thin");
			P("Still not sure what to do about sections.  I think the spacing needs to be added strategically and carefully to sections.");
		});
	},
	img: "/img/ih3.jpg"
});