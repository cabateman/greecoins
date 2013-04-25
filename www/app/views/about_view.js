// site/js/views/main_view.js

var app = app || {};

app.AboutView = Backbone.View.extend({
    el: $( '#main' ),

    
    initialize: function() {
        this.render();
    },

    
    // render library by rendering each book in its collection
    render: function() {

	var tmpl = _.template( tpl.get('about') );

	this.$el.html( tmpl );
        
     },
});
