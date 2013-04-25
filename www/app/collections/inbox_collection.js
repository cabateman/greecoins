// site/js/collections/inbox_collection.js

var app = app || {};

app.InboxCollection = Backbone.Collection.extend({
//    url: 'request.php',
    model: app.Message,

    // We keep the Messages in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
 /*   nextOrder: function () {
	if (!this.length) {
		return 1;
	}
		return this.last().get('order') + 1;
    },

   // Messages are sorted by their original insertion order.
   comparator: function (message) {
	return message.get('order');
   }
*/
   
});
