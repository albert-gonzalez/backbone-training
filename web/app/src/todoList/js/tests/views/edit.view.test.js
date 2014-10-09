define(['backbone', 'app/view/edit.view'], function(Backbone, EditView) {
    describe('Edit View', function() {
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
        })
        describe('On instantiate', function() {
            beforeEach(function() {
                this.view = new EditView();
            });
            describe('OnSubmitForm', function() {
                beforeEach(function() {
                    this.view.$('form').submit();
                });
                it('Should save the movement', function() {
                    var saveData = JSON.parse(this.server.requests[0].requestBody);
                    expect(saveData.id).toBe('myId');
                    expect(saveData.title).toBe('myTitle');
                    expect(saveData.description).toBe('myDescription');
                    expect(saveData.done).toBe(true);
                });
                it('Should show a success message', function() {
                    this.server.respond(JSON.stringify({message: 'SuccessMessage'}));
                    var $messageLayer = this.view.$('#message');
                    expect($messageLayer.text()).toBe('SuccessMessage');
                    expect($messageLayer.hasClass('alert-success')).toBe(true);
                    expect($messageLayer.hasClass('alert-danger')).toBe(false);
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

    function prepareDom() {
        $(document.body).append(
            $('<div id="editTodo"></div>')
                .append(
                $('<form>')
                    .append('<input name="id" value="myId">')
                    .append('<input name="title" value="myTitle">')
                    .append('<input name="description" value="myDescription">')
                    .append('<input name="done" type="checkbox" checked>')
            )
        );
    }

    function restoreDom() {
        $('#editTodo').remove();
    }
});