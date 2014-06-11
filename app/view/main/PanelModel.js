Ext.define('ET.view.main.PanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.panelmodel',

    formulas: {
        upperName: function (get) {
            return get('name').toUpperCase();
        }
    },

    data: {
        name: ''
    }
});