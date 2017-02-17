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

var Content = View.extend({
	name: "Content"
});

module.exports = Page(function(){
	this.addClass("digital-agency-page");
	Paper(function(){
		View(function(){
			this.addClass("content-squeeze");
			View.h1("The Digital Agency");
			View.p("Some day I hope to start a web development company of my own.  These are some of my plans.").addClass("intro");
			View({tag: "ul"}, function(){

				View({tag: "li"}, "COMPENSATION");
				View({tag: "li"}, "OPTIMIZED, ACCELERATED, FOCUSED, WORKFLOW, STACK, TECH, TEAM, TRAINING");
				View({tag: "li"}, "STRONG FOCUS ON RAPID TURNAROUNDS");
				View({tag: "li"}, "COMPETITIVE ATMOSPHERE, ENERGY, PRESSURE, ENCOURAGEMENT");
				View({tag: "li"}, "BIG PICTURE: ANALYTICS, SEO, LOCAL");
				View({tag: "li"}, "BUSINESS CONSULTANTS: CREATIVE SOLUTIONS, TOOLS, WORKFLOWS FOR THE CLIENT");
				View({tag: "li"}, "USER EXPERIENCE, CUSTOMER EXPERIENCE, EMPLOYEE EXPERIENCE");
				
			});
		});

		View(function(){
			this.addClass("auto-grid style-1 stack-3rem");

			View(function(){
				View.h3("Bootstrapped");
				View.p("I won't accept any investors.");
			});

			View(function(){
				View.h3("No client too small");
				View.p("I hope to make enterprise grade apps, but I'll never turn away a customer.");
			});

			View(function(){
				View.h3("No employment contracts");
				View.p("I hope to make enterprise grade apps, but I'll never turn away a customer.");
			});
		})

		Section(function(){
			this.addClass("style-1 stack-3rem");

			View.h2("TEAMS");

			View.p("Perfect the team structure, and reproduce it on a massive scale.");

			View(function(){
				this.addClass("style-1 auto-grid");


				View(function(){
					View.h3("A strong focus on training");
					View.p("I'll make a section for training.");
				});

				View(function(){
					View.h3("Shared equity");
					View.p("The only investors I want are the employees.  Employees could take any amount of their pay in cash, or equity, and convert between the two at any time.");
				});

				View(function(){
					View.h3("Project-based employment");
					View.p("No employment contracts.  Work from anywhere.  Take as much time off as you want, in-between projects.");
				});

				View(function(){
					View.h3("Performance-based compensation");
					View.p("Base pay plus schedule-based and quality-based bonuses.");
				});
			});
		});


	});
});