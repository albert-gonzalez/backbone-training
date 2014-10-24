define([
    'marionette',
    'text!app/template/todo.view.html'
], function (Marionette, template) {
    'use strict';
    return Marionette.ItemView.extend({

        template: _.template(template),

        tagName: 'li'

    });
});