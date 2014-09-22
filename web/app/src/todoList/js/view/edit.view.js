define(['backbone', 'app/model/todo.model'], function (Backbone, Todo) {
    
    var EditView = Backbone.View.extend({
        el: $("#todoEdit"),
        
        initialize: function () {
            this.todo = new Todo({id: this.$('form input[name=id]').val()});
            this.createMessageElement();
            this.addListeners();
        },
        
        events: {
            "submit form":  "saveTodo"
        },
        
        createMessageElement: function () {
            var messageElement = $('<div id="message" class="alert"></div>').hide();
            this.$el.prepend(messageElement);
        },
        
        addListeners: function () {
            this.listenTo(this.todo, 'sync', function () {
                this.$('#message').hide();
                this.$('#message').removeClass('alert-danger').addClass('alert-success').
                        html('Todo updated!').show('fadein');
            });
            
            this.listenTo(this.todo, 'error', function () {
                this.$('#message').hide();
                this.$('#message').removeClass('alert-success').addClass('alert-danger').
                        html('Oops! Something went wrong!').show('fadein');
            });
        },
        
        saveTodo: function (e) {
            e.preventDefault();
            this.todo.save(this.serializeFormToJson());
            
        },
        
        serializeFormToJson: function () {
            return {
                id: this.$('form input[name=id]').val(),
                title: this.$('form input[name=title]').val(),
                description: this.$('form input[name=description]').val(),
                done: this.$('form input[name=done]').prop('checked') 
            };
        }
    });
    
    return EditView;
});