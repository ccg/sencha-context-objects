Ext.define('App.controller.User', {
    extend: 'Ext.app.Controller',

    requires: [
        'App.context.User'
    ],

    init: function (application) {
        var me = this;
        App.context.User.on('loggedIn', me.onUserLoggedIn, me);
        App.context.User.on('loggedOut', me.onUserLoggedOut, me);
    },

    onUserLoggedIn: function (user) {
        Ext.Msg.alert('LOGGED IN', 'Welcome, ' + user.get('name'));
    },

    onUserLoggedOut: function () {
        Ext.Msg.alert('LOGGED OUT', 'You have been logged out.');
    }
});
