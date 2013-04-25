// site/js/models/message.js

var app = app || {};

app.Message = Backbone.Model.extend({
//    url: 'request.php',
    defaults: {
        sender: 'Unknown',
        hasMessage: false,
        message: '',
        timestamp: '',
        sent: '',
    },
    initialize: function() {
	this.updateAttributes();
	this.listenTo(this, "change", this.updateAttributes);

    },
    updateAttributes: function() {
	this.set("sent", this.formatDate(this.get("timestamp")));
    },
    formatDate: function(ts) {
        date = new Date(ts * 1000)
	query_date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
	hour = '';
	hour_type = '';
	if (date.getHours() >= 12) {
		hour = date.getHours() - 12;
		if (hour == 0) {
			hour = 12;
		}
		hour_type = "PM";
	} else {
		hour = date.getHours();
		hour_type = "AM";
	}
	today = Date.today().toString("yyyy-M-d");
	result = '';
	if (query_date == today) {
		return "Today "+hour+':'+date.getMinutes()+' '+hour_type;
	}
	return date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear()+' '+hour+':'+date.getMinutes()+' '+hour_type;
    }	
});
