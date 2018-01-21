const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 840,
    height: 480,
    minWidth: 500,
    minHeight: 200,
    acceptFirstMouse: true,
    titleBarStyle: 'hidden'
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', _ => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', _ => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', _ => {
  if (mainWindow === null) createWindow()
})
