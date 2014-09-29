backbone-training
=================

Atrapalo backbonejs with requirejs training

##First steps
* Follow the steps of Lesson 1
* Check out lesson-2 branch

  `git checkout lesson-2`
  
##Exercises
###1. Creating Todos
* HINT: Use Todo example of backbone doc as reference
* Define AMD Modules
  * Create /web/app/src/todoList/js/view/todo.create.view.js and define an AMD module inside with backbone and todo.model as dependencies
* Create a Backbone.View inside the module of todo.create.view
  * Define the el property with the id that view has to control
  * Define the events property to bind the form submit to a callback function
    * This callback has to create a new todo with the form fields. When the todo is created, the view has to dispatch an event to inform other listening entities.
* Modify index.view
  * Create a new intance of Todo Create View to control the form
  * The Todo List View instance has to listen the Todo Create View to update the collection when a Todo is added.
