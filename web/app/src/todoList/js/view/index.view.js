define([
    'backbone', 'app/view/todo.list.view', 'app/view/todo.create.view', 'app/collection/todo.collection'
], function (Backbone, TodoListView, TodoCreateView, TodoCollection) {
    'use strict';
    return Marionette.LayoutView.extend({

        regions: {
            createTodo: '#todoList',
            todoList: '#createTodo'
        },

        initialize: function () {
            var todoCreateView = new TodoCreateView();

            this.createTodo.attachView(todoCreateView);
            this.collection = new TodoCollection();
            this.todoList.attachView(new TodoListView({collection: this.collection}));
            this.collection.listenTo(todoCreateView, 'todoCreated', this.collection.add);
        }
    });
});