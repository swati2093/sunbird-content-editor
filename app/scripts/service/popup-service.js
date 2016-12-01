EkstepEditor.popupService = new(EkstepEditor.iService.extend({
    callback: undefined,
    modal: undefined,
    initService: function() {
        var thisObj = this;
        EkstepEditorAPI.addEventListener('popupModal:show', function(event, callback) {
            thisObj.modal = callback;
        }, this);

        EkstepEditorAPI.addEventListener('popupservice:controller:load', function(event, data) {
            thisObj.callback.apply(data.controller, data.args);
        }, this);
    },
    open: function(options, callback) {
        if (options && options.template) {
            this.callback = callback;
            $(".ui.modal").remove();
            EkstepEditor.jQuery('#popuptemplate').append(options.template);
            this.modal(options.data);
        }
    }
}));
