var app = require('app')
var BrowserWindow = require('browser-window')
var crashReporter = require('crash-reporter')
var win

crashReporter.start()

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('ready', function () {
  win = new BrowserWindow({
    width: 840,
    height: 480,
    'min-width': 500,
    'min-height': 200,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden'
  })

  win.loadUrl('file://' + __dirname + '/index.html')
  win.webContents.openDevTools()
  win.on('closed', function () {
    win = null
  })
})
