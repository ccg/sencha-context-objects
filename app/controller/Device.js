Ext.define('App.controller.Device', {
    extend: 'Ext.app.Controller',

    requires: [
        'App.context.Device'
    ],

    init: function (application) {
        var me = this;
        App.context.Device.on('pause', me.onDevicePaused, me);
    },

    /**
     * Display a message when simulating a PhoneGap event.
     * Responds to the "pause" event on the Device context.
     */
    onDevicePaused: function () {
        Ext.Msg.alert('DEVICE PAUSED', 'Simulating a "pause" PhoneGap event.');
    }
});
