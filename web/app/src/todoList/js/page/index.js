require(['./config'], function () {
    'use strict';
    require([
        'backbone',
        'app/model/todo.model',
        'app/view/index.view',
        'app/view/edit.view',
        'app/collection/todo.collection'
    ], function (Backbone, Todo, IndexView, EditView, TodoCollection) {
        var app = new Marionette.Application();
        app.addRegions({
            mainRegion: '#main-container'
        });
        app.todoListController = function() {
            this.collection = new TodoCollection();
            this.mainRegion.show(new IndexView({
                collection: this.collection
            }));
            this.collection.fetch();
        };
        app.todoEditController = function(id) {
            var todo = new Todo({id: id}),
                editView = new EditView({
                    model: todo
                });
            this.listenTo(editView, 'todo:saved', function() {
                console.log('vbb');
                this.router.navigate('todolist', {trigger: true});
            });
            this.listenToOnce(todo, 'sync', function() {
                this.mainRegion.show(editView);
            });
            todo.fetch();
        };
        app.addInitializer(function() {
            this.router = new Marionette.AppRouter({
                controller: this,
                appRoutes: {
                    'todolist': 'todoListController',
                    'todolist/:id': 'todoEditController'
                }
            });
        });
        app.on('start', function() {
            Backbone.history.start({pushState: true});
        });
        app.start();
    });
});