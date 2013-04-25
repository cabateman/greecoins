// site/js/views/confirm_give_coins_view.js

var app = app || {};

app.ConfirmGiveCoinsView = Backbone.View.extend({
    el: $( '#main' ),

   
    initialize: function() {
        this.render();
    },

    
    // render library by rendering each book in its collection
    render: function() {

	var tmpl = _.template( tpl.get('confirm_give_coins') );

	this.$el.html( tmpl );
	
     },
    
});
