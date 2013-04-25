// site/js/views/main_view.js

var app = app || {};

app.MainView = Backbone.View.extend({
    el: $( '#main' ),

    events: {
	'click .toggle': 'toggleHandler',
//	'click #sendCoin': 'sendCoinFormSubmit',
    }, 
    initialize: function() {
        this.render();
    },

    
    // render library by rendering each book in its collection
    render: function() {

	var tmpl = _.template( tpl.get('give_coins') );

	this.$el.html( tmpl );
	
     },
     toggleHandler: function(toggle) {
	   $(toggle.currentTarget).toggleClass("toggle-off");
	
     },
  /*   sendCoinFormSubmit: function(ev) {
	if ($(ev.currentTarget).parent().parent().parent().attr('sendCoinForm')) {

	}
    },*/

});
