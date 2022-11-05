//preload accesss script
const {
    ipcRenderer,
    contextBridge
} = require('electron');


let indexBridge = {
    button1Click:(args)=> ipcRenderer.send('chat', args),
    button2Click:(args)=> ipcRenderer.sendSync('maintorender',args),
    button3Click: (args)=> ipcRenderer.invoke("maintorender",args),
    buttonSendClick: (args)=> ipcRenderer.send('sendbtn',args),
    ipcRenderer: {
        ...ipcRenderer,
        on: ipcRenderer.on
    },
}


contextBridge.exposeInMainWorld("api", indexBridge);
