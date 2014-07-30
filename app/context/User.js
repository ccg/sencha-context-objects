Ext.define('App.context.User', {
    mixins: ['Ext.mixin.Observable'],
    singleton: true,

    /**
     * User logged in.
     * @param {App.model.User} user
     */
    loggedIn: function (user) {
        this.fireEvent('loggedIn', user);
    },

    loggedOut: function () {
        this.fireEvent('loggedOut');
    }
});
