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

    /**
     * Display a message when a user logs in.
     * Responds to the "loggedIn" event on the User context.
     * @param {App.model.User} user
     */
    onUserLoggedIn: function (user) {
        Ext.Msg.alert('LOGGED IN', 'Welcome, ' + user.get('name'));
    },

    /**
     * Display a message when a user logs out.
     * Responds to the "loggedOut" event on the User context.
     */
    onUserLoggedOut: function () {
        Ext.Msg.alert('LOGGED OUT', 'You have been logged out.');
    }
});
