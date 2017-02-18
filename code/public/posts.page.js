var View = require("view42");
var Page = require("page");

var P = View.P, Img = View.Img, H1 = View.H1, H2 = View.H2, H3 = View.H3, H4 = View.H4, H5 = View.H5, H6 = View.H6, Button = View.Button, Section = View.Section, Article = View.Article, Main = View.Main, Nav = View.Nav, Header = View.Header, Footer = View.Footer, Menu = View.Menu, Pre = View.Pre, Code = View.Code, Ul = View.Ul, Ol = View.Ol, Li = View.Li, Em = View.Em, Strong = View.Strong, Span = View.Span, Blockquote = View.Blockquote;

var $ = require("jquery");
var $logo = $(require("./lew.logo.svg.str.js"));

module.exports = Page({
	title: "Posts",
	desc: "A list of posts I should write.",
	content: function(){
		P("Keep them simple and short.  If longer content is in order, then make several posts and link between them.");

		var Sect = Section.extend({
			name: "Sect",
			addClass :"stack-3rem fs-90"
		})

		Sect(function(){
			H5("The English Language Effect");
			P("Our language is far from perfect.  In fact, many words, rules, and exceptions just don't make any sense, and only make it much harder to learn.");
			Blockquote("Examples are effective:  I had a few good ones...  Vowels are confusing as hell.  What was that other one I was thinking about?  'one' vs 'won', wtf?  Tone, Ton, Tune");
			P("We've had a history of grammar police caring so much about how to spell, read, write, and speak the language properly, that nobody even considers the alternative.  We need to redesign our language.");
			P("Sure, there's a lot of... barriers to be overcome.  You can't expect a billion people to drop everything and relearn a language.  But, if we designed a new super-language, and taught it around the world, so that we all just have to learn 1 other language, and we're immediately a globally-linguistic species... That would be awesome.");
		});


		Sect(function(){
			H5("Constructor Helpers");
			P("Class.helper() --> makes a new class with some help.  Could export a property of the new instance, so you don't have to use Class().whatever all the time.  Could configure a property, so you don't have to.");
			Blockquote("new this(o).fn, or new this({}, o); works");
			P("The problem there, is that if you want an arbitrary amount of constructs, you're out of luck.  The challenge is, how do you apply the arguments, while modifying them.");
			P("Look at View1 and now Method2 for some ridiculous examples.");

			// return this.apply(null, [{
			// 	export: true
			// }].concat([].slice.call(arguments)));
		});

		Sect(function(){
			H5("createConstructor");
			P("Before/after:  If we reuse a 'constructor' function for all classes, that's what we get in the logs...");
		});

		Sect(function(){
			H5("Getters/Setters for clever tooling");
			P("Take the log, for example... You could come up with all sorts of log configuration settings, such as log levels, or UI-driven switches.");
		});

		Sect(function(){
			H5("Meepo...");
			P("This is so helpful.  Having global modules is so hard without some crazy setup.  And you have the added bonus that you can version control all of them at once.");
			P("This would be a good discussion piece for... everyone.  The issues on this repo would only be for learning purposes. Maybe ask the Lerna peeps to take an honest look, leave their opinion if they don't like it, and if they do, maybe offer it as an alternative in their README, to give me a little exposure.");
			P("Now, here's the thing - have a dual setup:  lew42.com/meepo/ AND github.com/lew42/meepo.  Then go around to popular stackoverflow posts, reddit, codrops? etc, and point them back to my website.  My page can introduce the concept, maybe with some illustrations or even a video.  And, I can have a bunch of sidebar posts tantilizing their imagination.  And they can click through to the GitHub page to check it out, obviously.");
			P("The point there, is to drive traffic to my site.  The more links I have on reputable sites, the better the boost, more organic traffic, and... yea. ");
			P("Get testimonials from well-known developers.  It's funny because it's not actually any code, it's just a pattern.  But, if I market the hell out of it, and make it seem like the coolest new thing (and, it's SUPER simple, yet effective), then it should take off...")
		});

		Sect(function(){
			H5("Code progressions and Anti-Git");
			P("The progressions are very helpful.  Yes, you're copy+pasting code, but it gives you a new folder to mess around with, and completely abandon if necessary.");
			P("It's helpful to take an existing Class, and start slashing and hacking it down.  Just do crazy stuff, without caring.  You could do this with git.  You could create a new branch to isolate all your changes.  Personally, I'm not great with git, and fast-forwarding and rewinding at will doesn't come natural to me.");
			P("It's not quite as easy to do when your module is hooked into a massive application, and making a brand new naked module doesn't really help you - you need to see it in action.  This is where code control comes into play.  You need to be able to duplicate an arbitrarily sized portion of your app (the whole thing, or any chunk, or any tiny piece), and start hacking around with it.");
			P("The version system I'm using now, while quite redundant in all the extra module.export index files, does provide a benefit:  you can easily create an alternate version, either at the root package level, or at the ")
		});

		Sect(function(){
			H5("Course: OOP with JavaScript - the easy way");
			P("Class vs method:  Use constructs/settings instead of arguments.  Mfn let's you do so with a single method, without any additional wrapper code.");
			P("There's the perfect logical progression to learn the Base -> Mfn -> Set").addClass("fw-b");
		});


		Sect(function(){
			H5("The Future of Version Control");
			P("I don't even have to go into much detail.  Nobody will figure this out.");
			P("Basically, grunt, gulp, webpack, git, and npm will all be the same tool.  It's a tool for managing text (code).  Where would you like me to put your characters?  That's all we're doing here...");
			P("Let's face it, git+npm+webpack... it's fucking ridiculous.");
		});

		Sect(function(){
			H5("Global npm modules - Just allow require('mod@v2.3.4')");
			P("Meepo, and the project setup:  It's pretty ridiculous.  Find that gist about the 13 different solutions.  Mention substack, isaacs, and tjs solutions.");
			P("Isaacs solution is worthless.  He just writes the whole thing off as if its not a problem.  Maybe he knows something we don't about the intricacies of npm (surely - he wrote the thing).  But maybe he could help us out?  Clearly there's an unsolved problem.");
			P("I've seen that attitude from Isaacs before.  Who knows what his deal is.  But clearly he's missing some really simple solutions... Like being able to require a specific package version.");
		});

		Sect(function(){
			H5("SVG guide and tests");
		});

		Sect(function(){
			H5("Safari and the damn flex-basis thing...");
			P("flex: 1; was working really well.  Little did I know that this resets flex-basis from default of 'auto' to 0.  But not on Safari.  Safari leaves it at its default of auto.  So yea, don't use flex: 1;  Make sure to set flex: 1 1 auto; or flex-grow: 1;");
		});

		Sect(function(){
			H5("Optimal Workflow with Workspaces");
			P("Getting 'live' persistence is kind of nice.  I don't think you can do this with preprocessed CSS, though...  The live edits don't work through sourcemaps.  I wonder if this could be fixed with a Chrome Dev Tools extension.");
			P("Anyway, - it might be better that it doesn't persist.  When you're testing stuff out, you would need a way to revert...")
		});

		Sect(function(){
			H5("Unicorns Hiding in Plain Sight");
			P("There are literally a billion unicorns hiding in the realm of software development alone.  Dev is so bad right now, it hurts.");
			P("How about a realtime, version controlled templating system?");
			P("How about an internet-based hardware store that actually helps you?");
			P("How about an amazon that updates its user interface more than never?");
			P("How about an email GUI that updates its user interface more than never?");
			P("How about a scalable, realtime CMS that's easy to learn and has a massive community?");
			P("How about a clothing design-->manufacture system that uses CNC to expedite iteration and ensure 100% consistency?");
			P("How about a medical diagnosis system, somewhat like WebMD, that uses real data and follow ups to expediate triage?");
			P("How about an education system that actually works?  Like Udacity, only faster, better, stronger.");
			P("How about an operating system that people actually contribute to?  Linux is only 1% of the ideal solution.");
			P("How about a 3D modeling, animation, and interaction platform that's easy to learn and use, and that anyone can contribute to?  Unity, you're only 1% of the ideal solution.");			
			P("How about a word database?  Scan text, and identify word counts, frequencies, proximities to other words, etc.  There's SO MUCH data that can be derived from existing information, just based on intelligently looking at it.");


		});


	}
});