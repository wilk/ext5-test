Ext.define('ET.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.layout.container.Border',
        'ET.view.main.Panel'
    ],

    layout: 'border',
    defaults: {
        layout: 'vbox'
    },

    items: [{
        xtype: 'mainpanel',
        region: 'center'
    } , {
        xtype: 'panel',
        title: 'Responsive Menu',
        flex: 1,
        plugins: 'responsive',
        responsiveConfig: {
            tall: {
                region: 'north'
            },
            wide: {
                region: 'west'
            }
        }
    }]
});