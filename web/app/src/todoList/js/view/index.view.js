define(['backbone', 'app/view/todo.list.view'], function (Backbone, TodoListView) {
    'use strict';
    var IndexView = Backbone.View.extend({
        initialize: function () {
            var todoListView = new TodoListView();
        }
    });
    
    return IndexView;
});