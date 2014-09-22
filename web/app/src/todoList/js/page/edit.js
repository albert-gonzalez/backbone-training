require(['./config'], function () {
    require(['app/view/edit.view'], function (EditView) {
        var editView = new EditView();
    });
});