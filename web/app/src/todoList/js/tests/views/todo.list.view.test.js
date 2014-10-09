define([
    'backbone',
    'app/view/todo.list.view',
    'app/collection/todo.collection'
], function(Backbone, TodoListView, TodoCollection) {
    describe('Todo List View', function() {
        beforeEach(function() {
            this.template = prepareDom();
            this.server = sinon.fakeServer.create();
            this.collection = createCollectionFake(Backbone.Collection);
        });
        afterEach(function() {
            this.server.restore();
            restoreDom();
        });
        describe('When initialize with a collection', function() {
            beforeEach(function() {
                this.view = new TodoListView({
                    collection: this.collection,
                    el: null
                });
            });
            it('should have the passed collection', function() {
                expect(this.view.collection).toBe(this.collection);
            });
        });
        describe('When initialize without collection', function() {
            beforeEach(function() {
                this.view = new TodoListView({
                    el: null
                });
            });
            it('Should have a TodoCollection as collection', function() {
                expect(this.view.collection instanceof TodoCollection).toBe(true);
            });
            it('Should call for data to the server', function () {
                expect(this.server.requests.length).toBe(1);
            });
            describe('Added a element to the collection', function() {
                beforeEach(function() {
                    this.view.collection.add(new Backbone.Model());
                });
                it('Should append a element to the view', function() {
                    this.server.respond();
                    expect(this.view.$el.children().length).toBe(1);
                });
            });
        });
    });
    function createCollectionFake(Base) {
        var collection = new Base();
        collection.url = '/';
        return collection;
    }

    function prepareDom() {
        var template = document.createElement('SCRIPT');
        template.setAttribute('id', 'todo-template');
        template.setAttribute('type', 'template');
        document.body.appendChild(template);
        return template;
    }
    function restoreDom() {
        $('#todo-template').remove();
    }
});

