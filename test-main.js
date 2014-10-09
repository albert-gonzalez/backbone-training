var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\/web\/app\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/web/app',
    paths: {
        'app': 'src/todoList/js',
        'backbone': 'vendor/backbone/backbone',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'jquery': 'vendor/jquery/dist/jquery',
        'underscore': 'vendor/underscore/underscore',
        'marionette': 'vendor/marionette/lib/backbone.marionette'
    },
    shim: {
        bootstrap: ['jquery'],
        jquery: {exports: '$'},
        underscore: {exports: '_'},
        backbone: {
            exports: 'Backbone',
            deps: ['underscore', 'jquery']
        },
        marionette: {
            exports: 'Marionette',
            deps: ['backbone']
        }
    },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});