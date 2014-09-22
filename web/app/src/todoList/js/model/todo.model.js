define(['backbone'], function (Backbone) {
    var Todo = Backbone.Model.extend({
        defaults: function() {
            return {
              title: "Todo",
              description: "",
              done: false
            };
        },
        
        urlRoot: '/api/todolist'
    });
    
    return Todo;
});


