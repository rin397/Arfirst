const electorn = require('electron')
const app = electorn.app
const path = require('path')
const url = require('url')

const BrowserWindow = electorn.BrowserWindow;

var mainWindow;

app.on('ready', function(){
	mainWindow = 
	new BrowserWindow({width:1024,heigth:70,backgroudColor:'#2e2c29'});
	//mainWindow.loadURL('https://www.facebook.com');
	mainWindow.loadURL(url.format({
	pathname: path.join(__dirname,'three_js.html'),
	protocol: 'file',
	slashes: true
	}));
})
