define([
    'backbone', 'app/collection/todo.collection', 'app/model/todo.model', 'app/view/todo.view'
], function (Backbone, TodoCollection, Todo, TodoView) {
    var TodoListView = Backbone.View.extend({
        el: '#todoList',
        
        initialize: function () {
            this.collection = new TodoCollection();
            this.listenTo(this.collection, 'add', this.addTodo);
            this.collection.fetch();
        },
        
        addTodo: function (todo) {
            var todoView = new TodoView({model: todo});
            this.$el.append(todoView.render().el);
        }
    });
    
    return TodoListView;
});