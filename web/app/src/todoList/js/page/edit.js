require(['./config'], function () {
    'use strict';
    require(['app/view/edit.view'], function (EditView) {
        var editView = new EditView();
    });
});