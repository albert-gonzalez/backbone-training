require(['./config'], function () {
    'use strict';
    require([
        'app/view/edit.view',
        'app/model/todo.model'
    ], function (EditView, Todo) {
        var $container = $('#editTodo'),
            todo = new Todo({
                id: $container.data('todo-id')
            }),
            editView = new EditView({
                el: $container,
                model: todo
            });
        editView.listenTo(todo, 'sync', editView.render);
        todo.fetch();
    });
});