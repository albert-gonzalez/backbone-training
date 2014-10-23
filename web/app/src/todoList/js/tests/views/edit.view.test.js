define(['backbone', 'app/view/edit.view'], function(Backbone, EditView) {
    describe('Edit View', function() {
        beforeEach(function() {
            this.server = sinon.fakeServer.create();
            this.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
            prepareDom();
        });
        afterEach(function() {
            this.server.restore();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = this.originalTimeout;
            restoreDom();
        });
        describe('On instantiate', function() {
            beforeEach(function() {
                this.view = new EditView({
                    el: $('#editTodo'),
                    model: new Backbone.Model({
                        id: 1,
                        title: 'a',
                        description: 'c',
                        done: true
                    })
                });
                this.view.model.url = '/';
            });
            describe('Rendered', function() {
                beforeEach(function() {
                    this.view.render();
                });
                it('should not show the message', function() {
                    expect(this.view.$('#message').is(':visible')).toBe(false);
                });
                describe('OnSubmitForm', function() {
                    beforeEach(function() {
                        this.view.$('input[name=title]').val('myTitle');
                        this.view.$('input[name=id]').val('myId');
                        this.view.$('input[name=description]').val('myDescription');
                        this.view.$('input[name=done]').prop('checked', true);
                        this.view.$('form').submit();
                    });
                    it('Should save the element', function() {
                        var saveData = JSON.parse(this.server.requests[0].requestBody);
                        expect(saveData.id).toBe('myId');
                        expect(saveData.title).toBe('myTitle');
                        expect(saveData.description).toBe('myDescription');
                        expect(saveData.done).toBe(true);
                    });
                    describe('When surver succedeed', function() {
                        beforeEach(function() {
                            this.server.respond(JSON.stringify({message: 'SuccessMessage'}));
                        });
                        it('Should show a success message', function() {
                            var $messageLayer = this.view.$('#message');
                            expect($messageLayer.is(':visible')).toBe(true);
                            expect($messageLayer.text()).toBe('SuccessMessage');
                            expect($messageLayer.hasClass('alert-success')).toBe(true);
                            expect($messageLayer.hasClass('alert-danger')).toBe(false);
                        });
                    });
                    describe('When server fails saving', function() {
                        beforeEach(function() {
                            this.server.respond([404, {}, 'ErrorMessage']);
                        });
                        it('Should show error message', function() {
                            var $messageLayer = this.view.$('#message');
                            expect($messageLayer.text()).toBe('ErrorMessage');
                            expect($messageLayer.hasClass('alert-danger')).toBe(true);
                            expect($messageLayer.hasClass('alert-success')).toBe(false);
                        });
                    });
                });
            });
        });
    });

    function prepareDom() {
        $(document.body).append($('<div id="editTodo"></div>'));
    }

    function restoreDom() {
        $('#editTodo').remove();
    }
});