// site/js/app.js

var app = app || {};

$(function() {
 	tpl.loadTemplates(['give_coins', 'leaderboard', 'confirm_give_coins', 'about', 'inbox', 'message'], function() {
	new app.GCRouter();
	Backbone.history.start();
	});
});
