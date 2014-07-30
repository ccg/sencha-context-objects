Ext.define('App.controller.Device', {
    extend: 'Ext.app.Controller',

    requires: [
        'App.context.Device'
    ],

    init: function (application) {
        var me = this;
        App.context.Device.on('pause', me.onDevicePaused, me);
    },

    onDevicePaused: function (user) {
        Ext.Msg.alert('DEVICE PAUSED', 'Simulating a "pause" PhoneGap event.');
    }
});
