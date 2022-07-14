const { app, BrowserWindow } = require("electron");
const path = require("path");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 900,
        height: 250,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.setMenuBarVisibility(false);

    mainWindow.loadFile(path.join(__dirname, "index.html"));

    // uncomment this line to show dev tools
    //mainWindow.webContents.openDevTools();
}

// open main window on startup of app
app.on("ready", loadMainWindow);

// actually close the app when all windows are closed
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});

// open main window when app icon is clicked in OS's dock
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});
