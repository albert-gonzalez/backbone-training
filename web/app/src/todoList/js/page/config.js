requirejs.config({
    baseUrl: '/app',
    paths: {
        'app': 'src/todoList/js',
        'backbone': 'vendor/backbone/backbone',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'jquery': 'vendor/jquery/dist/jquery',
        'underscore': 'vendor/underscore/underscore'
    },
    deps: ['backbone', 'jquery', 'bootstrap'],
    shim: {
        'bootstrap': ['jquery']
    }
});