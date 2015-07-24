var application = require('app'),
    BrowserWindow = require('browser-window'),
    TrayMenu = require('./js/tray-icon-menu');
application.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 600,
        height: 300,
        center:true,
        title:"Electron Tray Icon Menu Demo",
    });
    TrayMenu.renderTrayIconMenu();
    mainWindow.loadUrl('file://' + __dirname + '/main.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});