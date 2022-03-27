const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 1366,
    height: 768,
    resizable: true,
  });
  win.removeMenu()
  win.loadFile("index.html");
}