Ext.define('ET.view.main.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainpanel',

    requires: [
        'Ext.form.field.Text',
        'Ext.form.Label',
        'ET.view.main.PanelModel',
        'ET.view.main.PanelController'
    ],

    viewModel: 'panelmodel',
    controller: 'panelcontroller',

    bind: {
        title: '{upperName}'
    },

    items: [{
        xtype: 'textfield',
        labelField: 'Insert your name',
        bind: '{name}',
        reference: 'tfName'
    } , {
        xtype: 'label',
        bind: 'Your name is {name}' // Ext.Template
    } , {
        xtype: 'button',
        text: 'Reset',
        handler: 'onReset'
    }]
});