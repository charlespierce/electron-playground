import { app, BrowserWindow } from 'electron';

let mainWindow: Electron.BrowserWindow | null = null;

app.on("ready", function () {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadURL(["file://", __dirname, "/main.html"].join(""));
});
