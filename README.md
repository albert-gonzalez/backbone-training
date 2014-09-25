backbone-training
=================

Atrapalo backbonejs with requirejs training

##First steps
* Clone this repo:

  `git clone git://github.com/albert-gonzalez/backbone-training`

* Download composer.phar in project path:

  `curl -sS https://getcomposer.org/installer | php`

* Install nodejs:

  * Mac: `brew install node`
  * Linux: `sudo apt-get install nodejs`

* Install bower:

  `npm install -g bower`

* Install project dependencies (execute in project path):
  ```
  php composer.phar install
  bower install
  ```
* Start the server:
  
  `php -S localhost:8080 -t web web/index.php`

* Open the url and check out everything works:

  `http://localhost:8080/todolist`
  
##Exercises
###1. Check out BackboneJs Doc
* http://backbonejs.org/

###2. Check out Todos example
* Todo app: http://backbonejs.org/examples/todos/index.html
* Annotated source: http://backbonejs.org/docs/todos.html

###3. Activate backbone app on edit page
* Uncomment line 33 on /src/Atrapalo/Infrastructure/Template/TodoList/Twig/edit.html.twig
* See the new behaviour of the edit page
* See the backbone app files: /web/app/src/todoList/js/page/edit.js and /web/app/src/todoList/js/view/edit.view.js

###4. Create Static Todo List View
* HINT: Use Todo example of backbone doc as reference
* Twig has no longer to print the todo list. Delete lines 23-42 of index.html.twig (for todo in todoList...)
* Define AMD Modules
  * Create /web/app/src/todoList/js/collection/todo.collection.js and define an AMD module inside with backbone and todo.model as dependencies
  * Create /web/app/src/todoList/js/view/todo.view.js  and define an AMD module inside with backbone and todo.model as dependencies
  * Create /web/app/src/todoList/js/view/todo.list.view.js and define an AMD module inside with backbone, todo.collection, todo.model and todo.view as dependencies
  * Modify /web/app/src/todoList/js/view/index.view.js and add backbone and todo.list.view as dependencies
* Create a Backbone.Collection inside the module of todo.collection.js
  * Define the model property with the Todo model
  * Create an instance of a collection passing a array of Todo models, check if it works and remove it.
* Create a Backbone.View inside the module of todo.view.js
  * Define the tagName property with 'li'
  * Define the template property with a function that returns the this.model Title
  * On render property, call the template function and assign the result to the view element.
  * Create an instance of a view passing a Todo model, check if it works and remove it.
* Create a Backbone.View inside the module of todo.list.view.js
  * Define an el (element) property with #todoList
  * Define an initialize property with a method. This method must initialize a Todo Collection passing a parameter of an array of Todo Models.
  * Create an instance of a view and check if it works.
  * The view has to listen to add event of the collection. Every time the collection add a todo, a todo will be printed on the html. To do this, You have to define a listener that create a new Model View passing the added Todo as a parameter
  * Check again the created instance and remove it. 
* Create a Backbone.View inside the module of index.view.js
  * Define an initialize method inside the view
  * Create a new instance of TodoListView inside the initialize method
* Modify page/index.js
  * Create a new instance of index.view inside the require module

###5. Try Remote Collections
* Modify todo.collection.js module
  * Define url property with '/api/todolist'
* Modify todo.list.view
  * Don't pass the static model array to the collection
  * Fetch the collection items from the server

###6. Try Underscore Template Engine
* Modify todo.view.js module
  * Change the template property assigning the html of the '#todo-template' element available in index.html.twig
  * Change the render method calling the underscore template method

###7. Check if everything works :)
