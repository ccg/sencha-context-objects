Ext.define('App.context.Device', {
    mixins: ['Ext.mixin.Observable'],
    singleton: true,

    pause: function () {
        this.fireEvent('pause');
    }
});
