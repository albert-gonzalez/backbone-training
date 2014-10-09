define(['backbone', 'app/model/todo.model'], function (Backbone, Todo) {
    'use strict';
    var TodoCreateView = Backbone.View.extend({
        el: '#createTodo',

        events: {
            'submit form': 'createTodo'
        },

        initialize: function() {
            this.model = new Todo;
        },

        createTodo: function (event) {
            event.preventDefault();
            var title = this.$('input[name=title]').val(),
                description = this.$('input[name=description]').val();

            this.model.set({title: title, description: description});
            this.listenToOnce(this.model, 'sync', this.triggerEvent);
            this.model.save();
        },

        triggerEvent: function (todo) {
            this.trigger('todoCreated', todo);
        }
    });

    return TodoCreateView;
});


