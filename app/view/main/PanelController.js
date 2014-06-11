Ext.define('ET.view.main.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.panelcontroller',

    onReset: function (resetBtn) {
        var tf = this.lookupReference('tfName');

        Ext.Msg.confirm('Confirm reset', 'Are you sure you want to reset ' + tf.getValue(), function (choice) {
            if (choice === 'yes') tf.reset();
        });
    }
});