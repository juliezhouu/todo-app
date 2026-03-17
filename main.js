const { app, Tray, BrowserWindow } = require('electron');

let tray = null;
let window = null;

app.whenReady().then(() => {
  app.dock.hide(); 

  tray = new Tray('');
  tray.setTitle('To-Do'); 

  window = new BrowserWindow({
    width: 300,
    height: 400,
    show: false,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
  });

  window.loadFile('index.html');

  tray.on('click', () => {
    app.focus();
    const trayBounds = tray.getBounds();
    const windowBounds = window.getBounds();

    const x = Math.round(
      trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2
    );

    const y = Math.round(trayBounds.y + trayBounds.height);

    if (window.isVisible()) {
      window.hide();
    } else {
      window.setPosition(x, y, false);
      window.show();
      window.focus();
    }
  });

  window.on('blur', () => {
    window.hide();
  });
});