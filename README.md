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
  `git checkout tags/3.1�

##Launching tests
* Launch server
  `karma start`
* Launch tests
  `karma run`
  
###Launch only desired tests
* Replace jasmine functions calls:
** 'describe()' by 'ddescribe()'
** 'it()' by 'iit()'

##Exercises
###1. Convert entry point in a Marionette Application
* topics:
** Application structure
** Views as widgets
** Marionette Application
** Channel
** Regions
* Create a Marionette.Application and start it at the entry point
* The applications initialize should create the index.view
###2. Convert edit Twig template in a underscore template
* Topics:
** require's filters
** template helpers
* The file with html extension containing the template should exists
* The container DOM element should be injected in the view
* The logic shouldn't be in the template, use instead the templateHelpers
* The view should require (or get injected) the template through the text filter
###3. Add Routing
* Topics:
** Router
** Controllers
* The application should create the AppRouter
* The router should define the controllers for the router
** One controller for index view
** One controller for edit view
* The router should bind the routes to the controllers
###4. Simplificate
* Topics:
** Reusable views
** Data injection
** Container and template injection
** Many times, Marionette constructors are enough