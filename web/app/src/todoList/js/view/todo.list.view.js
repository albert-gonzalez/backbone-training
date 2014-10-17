define([
    'marionette', 'app/collection/todo.collection', 'app/model/todo.model', 'app/view/todo.view'
], function (Marionette, TodoCollection, Todo, TodoView) {
    'use strict';
    return Marionette.CollectionView.extend({
        el: '#todoList',

        childView: TodoView,

        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render());
            this.listenTo(this.collection, 'add', function() {
                console.log('added');
            });
            this.collection.fetch();
        }
    });
});