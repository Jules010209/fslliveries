const { app, BrowserWindow } = require('electron');
const config = require('./config.json');

let isDev = true;

function createWindow() {
    require('./views/router');

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: !isDev,
        webPreferences: {
            devTools: isDev,
        }
    });
    
    win.loadURL(`http://localhost:${config.application.port}`);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) return createWindow();
    });
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') return app.quit();
});