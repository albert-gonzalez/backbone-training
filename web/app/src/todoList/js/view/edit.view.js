define([
    'marionette',
    'app/model/todo.model',
    'text!app/template/edit.view.html'
], function (Marionette, Todo, editViewTemplate) {
    'use strict';
    return Marionette.ItemView.extend({
        el: "#main-container",

        template: _.template(editViewTemplate),

        ui: {
            idInput: 'form input[name=id]'
        },

        initialize: function (options) {
            this.model = new Todo({id: options.id});
            this.createMessageElement();
            this.addListeners();
            this.model.fetch();
        },

        templateHelpers: {
            checked: function() {
                return this.done ?
                    'checked' :
                    null;
            }
        },

        events: {
            "submit form":  "saveTodo"
        },

        createMessageElement: function () {
            var messageElement = $('<div id="message" class="alert"></div>').hide();
            this.$el.prepend(messageElement);
        },

        addListeners: function () {
            this.listenTo(this.model, 'sync', function (data) {
                this.$('#message').hide();
                this.$('#message').removeClass('alert-danger').addClass('alert-success').
                        html(data.get('message')).show('fadein');
                this.render();
            });

            this.listenTo(this.model, 'error', function (data, response) {
                this.$('#message').hide();
                this.$('#message').removeClass('alert-success').addClass('alert-danger').
                        html(response.responseText).show('fadein');
            });
        },

        saveTodo: function (e) {
            e.preventDefault();
            this.model.save(this.serializeFormToJson());
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
});