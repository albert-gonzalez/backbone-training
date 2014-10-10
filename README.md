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
  
##Exercises
###1. Convert todo.view in a Marionette.ItemView
* Import Marionette
* Change the extended constructor, from Backbone.View to Marionette.ItemView
* Clean the logic implemented by Marionette
* Change call for remove function for destroy function  
* The tests should continue passing

###2. Convert todo.create.view in a Marionette.ItemView
* The constructor should extend from Marionette.ItemView
* css selectors should only be in the ui hash
* Should not replace el content when render
* Should launch render logic on initialize

###3. Convert todo.list.view in a Marionette.CollectionView
* The constructor should extend from Marionette.CollectionView.
* Each item view should be rendered automatically
* When the collection changes (events add, remove, reset and sort), the view should be updated.
* The tests should continue passing

###4. Convert index.view in a Marionette.Layout
* The constructor should extend from Marionette.LayoutView.
* The views should be positioned in regions
* The views should not replace el content
* The tests should continue passing

###5. Convert edit.view in a Marionette ItemView
* The constructor should extend from Marionette.ItemView
* Should launch render logic on initialize
* css selectors should only be in the ui hash
* Should not replace el content when render
* The tests should continue passing

###Next lesson
* Dependency injection to get agnostic views
* Reusing views
* Main App
* Router