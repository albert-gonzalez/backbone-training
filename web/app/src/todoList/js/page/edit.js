require(['./config'], function () {
    'use strict';
    require(['app/view/edit.view'], function (EditView) {
        new EditView({
            id: /\/([0-9]*)$/.exec(document.location.href)[1]
        });
    });
});