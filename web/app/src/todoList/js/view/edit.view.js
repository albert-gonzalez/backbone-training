define([
    'underscore',
    'marionette',
    'app/model/todo.model',
    'text!app/template/edit.view.html'
], function (_, Marionette, Todo, template) {
    'use strict';
    return Marionette.ItemView.extend({

        template: _.template(template),

        ui: {
            idInput: 'form input[name=id]',
            message: '#message'
        },

        events: {
            "submit form":  "saveTodo"
        },

        onRender: function () {
            this.listenTo(this.model, 'sync', function (data) {
                this.ui.message.hide();
                this.ui.message.removeClass('alert-danger').addClass('alert-success').
                    html(data.get('message')).show('fadein');
            });

            this.listenTo(this.model, 'error', function (data, response) {
                this.ui.message.hide();
                this.ui.message.removeClass('alert-success').addClass('alert-danger').
                    html(response.responseText).show('fadein');
            });

            this.ui.message.hide();
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