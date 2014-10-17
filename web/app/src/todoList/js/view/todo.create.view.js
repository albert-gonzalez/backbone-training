define(['marionette', 'app/model/todo.model'], function (Marionette, Todo) {
    'use strict';
    return Marionette.ItemView.extend({

        template: false,

        ui: {
            titleInput: 'input[name=title]',
            descriptionInput: 'input[name=description]'
        },

        el: '#createTodo',

        events: {
            'submit form': 'createTodo'
        },

        initialize: function() {
            this.model = new Todo;
            this.render();
        },

        createTodo: function (event) {
            event.preventDefault();

            this.model.set({
                title: this.ui.titleInput.val(),
                description: this.ui.descriptionInput.val()
            });
            this.listenToOnce(this.model, 'sync', this.triggerEvent);
            this.model.save();
        },

        triggerEvent: function (todo) {
            this.trigger('todoCreated', todo);
            this.model = new Todo();
        }
    });
});


