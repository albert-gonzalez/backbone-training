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

* Install Karma client globally
  `npm install -g karma-cli`

* Install project dependencies (execute in project path):
  ```
  php composer.phar install
  bower install
  ```
* Start the server:
  
  `php -S localhost:8080 -t web web/index.php`

* Open the url and check out everything works:

  `http://localhost:8080/todolist`

##Setting exercises start point
* Show available tags
  `git tag`
* Go to tag
  `git checkout tags/3.1´

##Launching tests
* Launch server
  `karma start`
* Launch tests
  `karma run`
  
###Launch only desired tests
* Replace jasmine functions calls:
** 'describe()' by 'ddescribe()'
** 'it()' by 'iit()'

##Disclaimer
* The collection view dont need a re-render when a model is added to the collection

##Exercises
###1. Convert entry point in a Marionette Application
* Create a Marionette.Application and start it at the entry point
* The applications initialize should create the index.view
###2. Convert edit Twig template in a underscore template
* The file with html extension containing the template should exists
* The container DOM element should be injected in the view
* The logic should be in the view, use instead the templateHelpers
* The view should require (or get injected) the template through the text filter
###3. Add Routing
* The application should create the AppRouter
* The router should define the controllers for the router
** One controller for index view
** One controller for edit view
* The router should bind the routes to the controllers
###4. Simplificate
* Create the App directly from the entry point
* The create view's model should be injected
* The create view should not inform that the model is saved, its the work for the model
* The create view should be rendered externally
* The create views and edit views template could be the same
* The create view and the edit view could be the same
* The collection should be injected at the collection view
* As the collection view doesn't have special logic, it isn't nedded to extend the Backbone.Collection 