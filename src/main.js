//back-end script

const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron');
const path = require('path');
var mainPage = 'http://localhost:3000';
var mainWin
function createWindow() {
    mainWin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
            devTools: true,
            worldSafeExecuteJavaScript: true,
            allowRunningInsecureContent: false,
            maximizable: true,
            show: false
        },

    });
    mainWin.maximize()
    mainWin.loadURL(mainPage);
    mainWin.once('ready-to-show', () => {

        mainWin.show();
    });
}

ipcMain.on("chat", (event, message) => {
    console.log(message);

})

ipcMain.on("maintorender", (event, args) => {

    console.log(args);
})

ipcMain.handle("maintorender", (event, args) => {
  console.log(args);
})
app.on('ready', createWindow);