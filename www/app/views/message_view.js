// site/js/views/message_view.js

var app = app || {};

app.MessageView = Backbone.View.extend({
    tagName: 'li',
    className: 'inbox',
    
    initialize: function() {
	this.listenTo(this.model, 'change', this.render);
    },

    
    // render inbox by rendering each message in its collection
    render: function() {

	var tmpl = _.template( tpl.get('message') );

	this.$el.html( tmpl(this.model.toJSON()) );
	return this;
     },
     
});
