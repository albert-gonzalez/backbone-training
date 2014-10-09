requirejs.config({
    baseUrl: '/app',
    paths: {
        'app': 'src/todoList/js',
        'backbone': 'vendor/backbone/backbone',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'jquery': 'vendor/jquery/dist/jquery',
        'underscore': 'vendor/underscore/underscore',
        'marionette': 'vendor/marionette/lib/backbone.marionette'
    },
    deps: ['backbone', 'jquery', 'bootstrap'],
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
    }
});