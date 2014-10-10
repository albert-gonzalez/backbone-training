define(['backbone', 'app/view/index.view'], function(Backbone, IndexView) {
    describe('Index View', function() {
        beforeEach(function() {
            prepareDom();
            this.server = sinon.fakeServer.create();
            this.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
        });
        afterEach(function() {
            restoreDom();
            this.server.restore();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = this.originalTimeout;
        });
        describe('On Instantiate', function() {
            beforeEach(function(){
                this.view = new IndexView();
                this.server.respond('[]');
            });
            it('The colection view should have no elements', function() {
                expect(this.view.collection.size()).toBe(0);
            });
            describe('On create a todo with the form', function () {
                beforeEach(function () {
                    $('#createTodo form').submit();
                });
                it('The collection sould have one model', function() {
                    this.server.respond('{}');
                    expect(this.view.collection.size()).toBe(1);
                });
            });
        });
    });

    function prepareDom() {
        $(document.body).append(
            $('<div id="createTodo"></div>')
                .append(
                $('<form>')
                    .append('<input name="title" value="myTitle">')
                    .append('<input name="description" value="myDescription">')
            )
        );
        var template = document.createElement('SCRIPT');
        template.setAttribute('id', 'todo-template');
        template.setAttribute('type', 'template');
        document.body.appendChild(template);
    }

    function restoreDom() {
        $('#createTodo, #todo-template').remove();
    }
});