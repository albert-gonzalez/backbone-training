require(['./config'], function () {
    'use strict';
    require(['marionette', 'app/view/index.view'], function (Marionette, IndexView) {
        var app = new Marionette.Application();
        app.addInitializer(function() {
            new IndexView()
        });
        app.start();
    });
});