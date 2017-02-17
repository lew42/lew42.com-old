var View = require("view42");
var Page = require("page");

var P = View.P, Img = View.Img, H1 = View.H1, H2 = View.H2, H3 = View.H3, H4 = View.H4, H5 = View.H5, H6 = View.H6, Button = View.Button, Section = View.Section, Article = View.Article, Main = View.Main, Nav = View.Nav, Header = View.Header, Footer = View.Footer, Menu = View.Menu, Pre = View.Pre, Code = View.Code, Ul = View.Ul, Ol = View.Ol, Li = View.Li, Em = View.Em, Strong = View.Strong, Span = View.Span;

var $ = require("jquery");
var $logo = $(require("./lew.logo.svg.str.js"));

module.exports = Page({
	title: "Making an SVG Logo",
	desc: "Was it worth it?  Not really.",
	content: function(){
		P("The whole point of SVG is to have interactive, style-able pieces, right?  Well, it turns out the SVG system is horribly broken.  There are a dozen ways to use SVG, but none of them let you take an illustration, and customize each piece of it with CSS.");

		P("Adobe Illustrator exported the drop shadows as encoded bitmap data, which defeats the purpose of SVG.  I figured I could add the drop shadow afterwards.  Good news, there are a whole set of SVG-based CSS effects accessible via the 'filter' CSS property.");

		P("I wanted to use the CSS: filter: drop-shadow() to add the shadows, but it turns out that these filters are only applicable to the svg as a whole, and not to individual paths.  This is very counter-intuitive, given that you CAN use CSS to style other aspects of each sub-path, such as fills and strokes.");

		P("I tried nesting the SVGs to get around this limitation, but the filters only apply to the root svg, and not the nested/child svgs.");

		P("This might take a while to explain, and I should create some CodePens or something.  Here's the gist:");

		P("Do you want your SVG embedded (aka, copy + paste the &lt;svg&gt; into your html)?  No, probably not.  If you want to externally include your svgs, so they're cached and shit.");

		P("Well, if you try to use the &lt;use&gt; svg tag, you lose the ability to style sub elements within the svg.  Actually - it doesn't really matter where the original svg is (inlined or external), if you use the use tag, you lose the ability to style sub elements.");

		P("I really need to make a CodePen to show this.  You CAN use CSS to style sub-paths within an SVG, but not with `use`.");

		H5("A million ways to embed - and none of them are optimal");
		
		View("Link to a page about the /origami/")
	},
	image: function(){
		View(function(){
			this.addClass("post-image");
			$logo.appendTo(this.$el);
		});
	}
});