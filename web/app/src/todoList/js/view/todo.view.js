define(['backbone', 'app/model/todo.model'], function (Backbone, Todo) {
    'use strict';
    var TodoView = Backbone.View.extend({
        tagName: 'li',

        template: _.template($('#todo-template').html()),
        
        initialize: function () {
            this.listenTo(this.model, 'destroy', this.remove);
        },

        events: {
            'click .app-deleteTodo' : 'removeTodo'
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        removeTodo: function (e) {
            e.preventDefault();
            this.model.destroy();
        }
    });

    return TodoView;
});