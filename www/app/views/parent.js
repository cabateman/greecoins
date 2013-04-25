// site/js/views/parent.js
var app = app || {};

    app.ParentView = Backbone.View.extend({
	    el: $( '#parent' ),

	   events: {
		'click .nav li': 'navClicked',
		'click #sendCoin': 'sendCoinFormSubmit',
    	    },
	    initialize: function() {
		app.mainView = new app.MainView();
	    },
	    navClicked: function(ev) {
		$(ev.currentTarget).parent().find('li.active').removeClass('active');
            	$(ev.currentTarget).addClass('active');
	    },
	   sendCoinFormSubmit: function(ev) {
		console.log('form submitted');
		if ($(ev.currentTarget).parent().parent().parent().attr('name') == 'sendCoinForm') {
		        if (!app.confirmGiveCoinsView) {
				app.confirmGiveCoinsView = new app.ConfirmGiveCoinsView();	
				console.log(app.confirmGiveCoinsView);
				console.log(app.confirmGiveCoinsView);
			} else {
				app.confirmGiveCoinsView.render(); 
			}
		}
		return false;
	    }

                
    });
