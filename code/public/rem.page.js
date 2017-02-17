var Page42 = require("page42");
var View = require("view42");
var Page = require("page");

var P = View.P, Img = View.Img, H1 = View.H1, H2 = View.H2, H3 = View.H3, H4 = View.H4, H5 = View.H5, H6 = View.H6, Button = View.Button, Section = View.Section, Article = View.Article, Main = View.Main, Nav = View.Nav, Header = View.Header, Footer = View.Footer, Menu = View.Menu, Pre = View.Pre, Code = View.Code, Ul = View.Ul, Ol = View.Ol, Li = View.Li, Em = View.Em, Strong = View.Strong, Span = View.Span;

var Paper = Section.extend({
	name: "Paper"
});

module.exports = Page({
	title: "CSS rem Units",
	desc: "A few important things to remember",
	content: function(){
		Ul(function(){
			Li("Useful for header margins.  Usually, an hX header tag will have a font-size property, which manipulates the size of em margins.")
			Li("But, if the rems get too small, then your content gets cramped.");
			Li("You could switch off between ems and rems at a certain breakpoint.  This allows you to let your rems get really small, which is nice for side (left/right) padding at mobile resolutions.");
			Li("If you use rems, you can avoid this.  For example, if you add a margin: 1rem 0; to all hX (h1, h2, h3...), you'll get consistent spacing, no matter what the font-size.");

			Li("Another approach to this, to avoid having to use rems, is to do a LESS/SASS calculation every time you set a font-size.  Basically, you'd reverse the font-size adjustment.  If font-size: 2em, you'd use margin: 0.5em.")

			Li("Also useful for having a more extreme responsive sizing system.  If you scale your body font-size up or down too far, it won't look right.  So it's useful to put a min/max font-size on the body.  But, that doesn't mean you can't use an html font-size for rem that differs from the body font-size.  And both can be 'responsive' (vw-based) font sizes.");
		});
	}
});