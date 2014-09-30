define(['backbone', 'app/model/todo.model'], function (Backbone, Todo) {
    'use strict';
    var TodoCollection = Backbone.Collection.extend({
        model: Todo,

        url: '/api/todolist'
    });

    return TodoCollection;
});


