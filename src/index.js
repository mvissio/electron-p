'use strict'

// import {app, BrowserWindow} from 'electron';
import {app, BrowserWindow} from 'electron';

app.on('before-quit', () => {
    console.warn("saliendo");
});

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Hello World',
        center: true,
        maximizable: false,
        show: false
    });

    win.once('ready-to-show',()=>{
        win.show();
    });

    win.on('move',()=>{
        const position = win.getPosition();
        console.warn(`La pocision es ${position}`)
    });

    win.on('closed', () => {
        win = null;
        app.quit();
    });
    win.loadURL(`file://${__dirname}/renderer/index.html`);
});