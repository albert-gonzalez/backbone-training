define(['backbone', 'app/model/todo.model'], function (Backbone, Todo) {
    var TodoView = Backbone.View.extend({
        tagName: 'li',

        template: function () {
            return this.model.get('title');
        },

        render: function () {
            this.$el.html(this.template());

            return this;
        }
    });

    return TodoView;
});