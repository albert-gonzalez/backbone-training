define([
    'marionette',
    'text!app/template/index.view.html',
    'app/view/todo.list.view',
    'app/view/todo.create.view',
    'app/view/todo.view'
], function(Marionette, template, TodoListView, TodoCreateView, TodoView) {
    return Marionette.LayoutView.extend({
        template: _.template(template),
        regions: {
            createTodo: '#createTodo',
            todoList: '#todoList'
        },
        initialize: function() {
            this.todoCreateView = new TodoCreateView();
            this.todoListView = new TodoListView({collection: this.collection});
        },
        onRender: function() {
            this.todoList.show(this.todoListView);
            this.createTodo.show(this.todoCreateView);
            this.collection.listenTo(this.todoCreateView, 'todoCreated', this.collection.add);
        }
    });
});