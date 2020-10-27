import { app, BrowserWindow } from 'electron';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  console.log(process.env.NODE_ENV)
  mainWindow.loadFile('./dist/index.html');
  //mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;