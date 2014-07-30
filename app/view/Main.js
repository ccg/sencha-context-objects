Ext.define('App.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.form.FieldSet',
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                scrollable: null,

                defaults: {
                    padding: 5
                },

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Demo of Context Objects'
                    },
                    {
                        xtype: 'fieldset',
                        title: 'User',
                        defaults: {
                            margin: 5
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'logIn',
                                text: 'Log In'
                            },
                            {
                                xtype: 'button',
                                itemId: 'logOut',
                                text: 'Log Out'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Device',
                        defaults: {
                            margin: 5
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'pause',
                                text: 'Pause'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
