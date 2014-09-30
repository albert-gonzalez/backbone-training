define([
    'backbone', 'app/view/todo.list.view', 'app/view/todo.create.view'
], function (Backbone, TodoListView, TodoCreateView) {
    'use strict';
    var IndexView = Backbone.View.extend({
        initialize: function () {
            var todoListView = new TodoListView();
        }
    });
    
    return IndexView;
});