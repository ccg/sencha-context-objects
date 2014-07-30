Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',

    requires: [
        'App.context.Device',
        'App.context.User',
        'App.store.Users'
    ],

    config: {
        control: {
            'button#logIn': {
                tap: 'onUserLogInButtonTap'
            },
            'button#logOut': {
                tap: 'onUserLogOutButtonTap'
            },
            'button#pause': {
                tap: 'onDevicePauseButtonTap'
            }
        }
    },

    onUserLogInButtonTap: function (button) {
        var user = Ext.create('App.store.Users').first();

        App.context.User.loggedIn(user);
    },

    onUserLogOutButtonTap: function (button) {
        App.context.User.loggedOut();
    },

    onDevicePauseButtonTap: function (button) {
        App.context.Device.pause();
    }
});
