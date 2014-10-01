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
  * Modify index.view adding todo.create.view, todo.collection as dependencies
* Create a Backbone.View inside the module of todo.create.view
  * Define the el property with the id that view has to control
  * Define the events property to bind the form submit to a callback function
    * This callback has to create a new todo with the form fields. When the todo is created, the view has to trigger an event to inform other listening entities.
* Modify index.view
  * Create a new intance of Todo Create View to control the form
  * Create a new instance of Todo Collection. This collection has to listen the Todo Create View to add the created Todo.
  * Pass the created collection to the Todo List View (modify the creation of the new instance)

###2. Synchronizing with the server
* Modify todo.collection
  * Define url property with 'api/todolist/'
* Modify todo.list.view
  * Fetch the collection from the server
* Modify todo.create.view
  * Invoke the save method to save the new todo at the server
  * Now the view has to wait the new todo to synchronize with the server (it could happen any error: bad request, server failure...). In other words, the view has to listen to once (and only once) the sync event. When this event is triggered, the view will trigger the todoCreated event.
* Modify index.html.twig
  * The server returns a JSON with the id of the created Todo. Now you can modify the todo item template changing "toModify" string for the Todo id

###3. Removing Todos
* Modify index.html.twig
  * The item template no longer needs the form to delete todos. Change this form for a link (like the edit button).
* Modify todo.view.js
  * Define a events hash property with the click event on the new delete link.
  * Define a method that destroy the Todo.
  * The view has to listen the destroy event of the todo to remove the view when the todo is destroyed.
