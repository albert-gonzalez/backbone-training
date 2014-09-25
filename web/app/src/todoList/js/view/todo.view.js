define(['backbone', 'app/model/todo.model'], function (Backbone, Todo) {
    var TodoView = Backbone.View.extend({
        tagName: 'li',

        template: _.template($('#todo-template').html()),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });

    return TodoView;
});