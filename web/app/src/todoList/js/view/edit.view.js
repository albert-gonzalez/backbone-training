define(['backbone', 'app/model/todo.model'], function (Backbone, Todo) {
    'use strict';
    var EditView = Backbone.View.extend({
        el: "#editTodo",

        initialize: function () {
            this.todo = new Todo({id: this.$('form input[name=id]').val()});
            this.createMessageElement();
            this.addListeners();
        },

        events: {
            "submit form":  "saveTodo"
        },

        createMessageElement: function () {
            var messageElement = $('<div id="message" class="alert"></div>').hide();
            this.$el.prepend(messageElement);
        },

        addListeners: function () {
            this.listenTo(this.todo, 'sync', function (data) {
                this.$('#message').hide();
                this.$('#message').removeClass('alert-danger').addClass('alert-success').
                        html(data.get('message')).show('fadein');
            });

            this.listenTo(this.todo, 'error', function (data) {
                this.$('#message').hide();
                this.$('#message').removeClass('alert-success').addClass('alert-danger').
                        html(data.get('message')).show('fadein');
            });
        },

        saveTodo: function (e) {
            e.preventDefault();
            this.todo.save(this.serializeFormToJson());
        },

        serializeFormToJson: function () {
            return {
                id: this.$('form input[name=id]').val(),
                title: this.$('form input[name=title]').val(),
                description: this.$('form input[name=description]').val(),
                done: this.$('form input[name=done]').prop('checked') 
            };
        }
    });

    return EditView;
});