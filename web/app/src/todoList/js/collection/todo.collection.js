define(['backbone', 'app/model/todo.model'], function (Backbone, Todo) {
    var TodoCollection = Backbone.Collection.extend({
        model: Todo
    });

    return TodoCollection;
});


