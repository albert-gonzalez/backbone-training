define([
    'backbone', 'app/view/todo.list.view', 'app/view/todo.create.view', 'app/collection/todo.collection'
], function (Backbone, TodoListView, TodoCreateView, TodoCollection) {
    'use strict';
    var IndexView = Backbone.View.extend({
        initialize: function () {
            var todoCreateView = new TodoCreateView(),
                todoListView,
                todoCollection = new TodoCollection();

            todoCollection.listenTo(todoCreateView, 'todoCreated', todoCollection.add);
            todoListView = new TodoListView({collection: todoCollection});
        }
    });
    
    return IndexView;
});