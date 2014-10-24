define([
    'marionette',
    'app/collection/todo.collection',
    'app/view/todo.view'
], function (Marionette, TodoCollection, TodoView) {
    'use strict';
    return Marionette.CollectionView.extend({

        childView: TodoView

    });
});