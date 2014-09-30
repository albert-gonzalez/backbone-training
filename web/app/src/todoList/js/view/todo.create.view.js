define(['backbone', 'app/model/todo.model'], function (Backbone, Todo) {
    'use strict';
    var TodoCreateView = Backbone.View.extend({
        el: '#createTodo',

        events: {
            'submit form': 'createTodo'
        },

        createTodo: function (event) {
            event.preventDefault();
            var title = this.$('input[name=title]').val(),
                description = this.$('input[name=description]').val(),
                todo = new Todo({title: title, description: description});
            this.trigger('todoCreated', todo);
        }
    });

    return TodoCreateView;
});


