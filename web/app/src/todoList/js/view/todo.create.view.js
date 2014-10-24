define([
    'marionette',
    'app/model/todo.model',
    'text!app/template/todo.create.view.html'
], function (Marionette, Todo, template) {
    'use strict';
    return Marionette.ItemView.extend({

        template: _.template(template),

        ui: {
            titleInput: 'input[name=title]',
            descriptionInput: 'input[name=description]'
        },

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
        }
    });
});


