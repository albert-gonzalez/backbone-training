require(['./config'], function () {
    'use strict';
    require(['app/view/index.view'], function (IndexView) {
        var indexView = new IndexView();
    });
});