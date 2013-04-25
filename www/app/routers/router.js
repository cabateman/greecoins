/*global Backbone*/
var app = app || {};

// GC Router
// ----------

app.messages = [
		{ sender: 'Patrick Traughber', hasMessage: true, message: 'You are 1333', timestamp: 1366847942},
		{ sender: 'Linda Chung', hasMessage: true, message: 'Yay! You get a coin', timestamp: 1366835400},
		{ sender: 'Damian Ball', hasMessage: true, message: 'Woot! This looks sexy', timestamp: 1366830600},
		{ sender: 'Patrick Traughber', hasMessage: true, message: 'Please please pretty please join our haxing', timestamp: 1366755840},
		{ sender: 'Scott Lin', hasMessage: false, message: '', timestamp: 1366755840},
		{ sender: 'Alex Rosen', hasMessage: false, message: '', timestamp: 1366567800},
		    ];



app.GCRouter = Backbone.Router.extend({
       	routes: {
		'': 'init',
		'give': 'getGiveCoin',
		'leaderboard': 'getLeaderboard',
		'inbox': 'getInbox',
		'about': 'getAbout',
	},
	initialize: function() {
		app.inboxCollection = new app.InboxCollection(app.messages);
//		app.inboxCollection.fetch();

		app.parentView = new app.ParentView();
	},
	init: function() {
		document.location.href = '#/give';		
		this.getGiveCoin();
	},
	getGiveCoin: function() {
		if (!app.mainView) {
			app.mainView = new app.MainView();
		} else {
			app.mainView.render();
		}
	},
	getLeaderboard: function() {
		if (!app.leaderView) {
			app.leaderView = new app.LeaderView();
		} else {
			app.leaderView.render();
		}

	},	
	getInbox: function() {
		if (!app.inboxView) {
			app.inboxView = new app.InboxView();
		} else {
			app.inboxView.render();
		}

	},	
	getAbout: function() {
		if (!app.aboutView) {
			app.aboutView = new app.AboutView();
		} else {
			app.aboutView.render();
		}
	},
	
});
