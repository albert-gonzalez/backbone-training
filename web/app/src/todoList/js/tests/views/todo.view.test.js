define(['backbone', 'app/view/todo.view'], function(Backbone, TodoView) {

    describe('Todo View', function() {

        beforeEach(function() {
            prepareDom();
            this.model = new Backbone.Model({
                pus: 'pis'
            });
            this.view = new TodoView({
                model: this.model
            });

            this.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
        });

        afterEach(function() {
            restoreDom();
            jasmine.DEFAULT_TIMEOUT_INTERVAL = this.originalTimeout;
        });

        describe('On render', function() {
            beforeEach(function() {
                this.renderReturn = this.view.render();
            });
            it('Sould return the object itself', function() {
                expect(this.renderReturn).toBe(this.view);
            });
            it('Should print models data', function() {
                expect(this.view.$('#pus').html()).toBe('pis');
            });
            it('The container should be a list element', function() {
                expect(this.view.$el.prop('tagName')).toBe('LI');
            });

            describe('On click delete button', function() {
                it('Should destroy the model', function(done) {
                    this.model.on('destroy', function() {
                        done();
                    });
                    this.view.$('.app-deleteTodo').click();
                });
            });
        });
    });
    function prepareDom() {
        var template = document.createElement('SCRIPT');
        template.setAttribute('id', 'todo-template');
        template.setAttribute('type', 'template');
        template.innerText = '<span id="pus"><%- pus %></span><button class="app-deleteTodo"></button>';
        document.body.appendChild(template);
    }

    function restoreDom() {
        $('#todo-template').remove();
    }
});

