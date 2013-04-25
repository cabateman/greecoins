// site/js/views/inbox_view.js

var app = app || {};

app.InboxView = Backbone.View.extend({
    el: $( '#main' ),

    
    initialize: function() {
	this.collection = app.inboxCollection;
	this.listenTo(this.collection, 'add', this.render);
	this.listenTo(this.collection, 'reset', this.render);
	this.listenTo(this.collection, 'all', this.render);
	this.render();
    },

    
    // render inbox by rendering each message in its collection
    render: function() {

	var tmpl = _.template( tpl.get('inbox') );

	this.$el.html( tmpl );
	console.log(this.collection);
	this.collection.each(function(message) {
		this.renderMessage(message);
	}, this);
     },
     renderMessage: function( message ) {
         var messageView = new app.MessageView({
		model: message
	});
	this.$el.append( messageView.render().el );
    },
    
});
