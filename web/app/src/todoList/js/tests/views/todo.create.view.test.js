define(['backbone', 'app/view/todo.create.view'], function(Backbone, TodoCreateView) {
    describe('Todo Create View', function() {
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
            beforeEach(function() {
                this.view = new TodoCreateView();
            });
            describe('On render', function() {
                beforeEach(function() {
                    this.view.render();
                });
                describe('On sending form', function() {
                    beforeEach(function() {
                        $('#createTodo form').submit();
                    });
                    afterEach(function() {
                        this.server.respond('{}');
                    });
                    it('Should send data to the server', function() {
                        var requestData = JSON.parse(this.server.requests[0].requestBody);
                        expect(requestData.title).toBe('myTitle');
                        expect(requestData.description).toBe('myDescription');
                    });
                    it('Should trigger a event todoCreated', function(done) {
                        this.view.on('todoCreated', function() {
                            done();
                        });
                        this.server.respond('{}');
                    });
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
    }

    function restoreDom() {
        $('#createTodo').remove();
    }
});