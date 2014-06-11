/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('ET.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ET',

    views: [
        'main.Main'
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],

    routes: {
        'hello/:something': {
            action: 'handleHello',
            before: 'beforeHandleHello'
        }
    },

    beforeHandleHello: function (something, action) {
        if (something === 'world') action.resume();
        else action.stop();
    },

    handleHello: function (something) {
        //Ext.Msg.alert('Hello', 'Hello ' + something + '!');
    },
    
    launch: function () {
        // TODO - Launch the application
    }
});
