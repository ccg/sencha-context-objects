Ext.define('App.store.Users', {
    extend: 'Ext.data.Store',
    requires: ['App.model.User'],

    config: {
        model: 'App.model.User',
        data: [
            {
                id: 1,
                name: 'Alice'
            },
            {
                id: 2,
                name: 'Bob'
            }
        ]
    }
});
