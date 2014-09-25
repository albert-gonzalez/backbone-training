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

###4. Create Todo List View
* HINT: Use Todo example of backbone doc as reference
* Create /web/app/src/todoList/js/collection/todo.collection.js and define an AMD module inside with backbone and todo.model as dependencies
* Create a Backbone.Collection inside the module you have created
  * The url is '/api/todolist' and the model of the collection is a Todo
* Create /web/app/src/todoList/js/view/todo.view.js  and define an AMD module inside with backbone and todo.model as dependencies
* Create a Backbone.View inside the module you have created
  * The tag name is 'li'
  * The template is '#todo-template'
  * On render, it pass the model to the underscore template in json format and assign the result to the html element.
* Create /web/app/src/todoList/js/view/todo.list.view.js and define an AMD module inside with backbone, todo.collection  and todo.view as dependencies
* Create a Backbone.View inside the module you have created
  * The element view is #todoList
  * Define an initialize method. This method must initialize a Todo Collection and fetch results from the server
  * The view has to listen to add event of the collection. Every time the collection add a todo, a todo will be printed on the html. To do this, You have to create a new Model View passing the added Todo as a parameter
* Modify /web/app/src/todoList/js/view/index.view.js
  * Add backbone and todo.list.view as dependencies
  * Create a Backbone.View
  * Define an initialize method inside the view
  * Create a new instance of TodoListView inside the initialize method
