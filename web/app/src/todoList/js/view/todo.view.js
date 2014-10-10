define(['marionette'], function (Marionette) {
    'use strict';
    return Marionette.ItemView.extend({
        tagName: 'li',

        initialize: function () {
            this.listenTo(this.model, 'destroy', this.destroy);
            this.template = _.template($('#todo-template').html());
        },

        events: {
            'click .app-deleteTodo' : 'removeTodo'
        },

        removeTodo: function (e) {
            e.preventDefault();
            this.model.destroy();
        }
    });
});