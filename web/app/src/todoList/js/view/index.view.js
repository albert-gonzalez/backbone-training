define([
    'backbone', 'app/view/todo.list.view', 'app/view/todo.create.view', 'app/collection/todo.collection'
], function (Backbone, TodoListView, TodoCreateView, TodoCollection) {
    'use strict';
    var IndexView = Backbone.View.extend({
        initialize: function () {
            var todoCreateView = new TodoCreateView();

            this.collection = new TodoCollection();

            this.collection.listenTo(todoCreateView, 'todoCreated', this.collection.add);
            new TodoListView({collection: this.collection});
        }
    });
    
    return IndexView;
});