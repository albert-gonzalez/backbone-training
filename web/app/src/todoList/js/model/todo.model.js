define(['backbone'], function (Backbone) {
    'use strict';
    var Todo = Backbone.Model.extend({
        defaults: function () {
            return {
                id: '',
                title: "Todo",
                description: "",
                done: false,
                creationDate: ''
            };
        },

        urlRoot: '/api/todolist'
    });

    return Todo;
});


