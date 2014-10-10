define([
    'marionette', 'app/collection/todo.collection', 'app/model/todo.model', 'app/view/todo.view'
], function (Marionette, TodoCollection, Todo, TodoView) {
    'use strict';
    return Marionette.CollectionView.extend({
        el: '#todoList',

        childView: TodoView,

        initialize: function () {
            this.collection = this.collection || new TodoCollection();
            this.collection.fetch();
            this.listenTo(this.collection, 'add remove reset sort', this.render);
        }
    });
});