require(['./config'], function () {
    'use strict';
    require([
        'backbone', 'app/view/todo.list.view', 'app/view/todo.create.view', 'app/collection/todo.collection'
    ], function (Backbone, TodoListView, TodoCreateView, TodoCollection) {
        var app = new Marionette.Application();
        app.addRegions({
            createTodo: '#todoList',
            todoList: '#createTodo'
        });
        app.addInitializer(function() {
            var todoCreateView = new TodoCreateView();

            this.collection = new TodoCollection();

            this.createTodo.attachView(todoCreateView);
            this.todoList.attachView(new TodoListView({collection: this.collection}));

            this.collection.listenTo(todoCreateView, 'todoCreated', this.collection.add);
        });
        app.start();
    });
});