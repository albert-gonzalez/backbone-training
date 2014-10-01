define(['backbone', 'app/model/todo.model'], function (Backbone, Todo) {
    'use strict';
    var TodoView = Backbone.View.extend({
        tagName: 'li',

        template: _.template($('#todo-template').html()),

        events: {
            'click .app-removeTodo' : 'remove'
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });

    return TodoView;
});