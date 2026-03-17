const { menubar } = require('menubar');

const mb = menubar({
  index: 'file://' + __dirname + '/index.html',
  browserWindow: {
    width: 300,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  },
  icon: undefined // You can add a custom icon here
});

mb.on('ready', () => {
  console.log('Menu bar app is ready!');
});
