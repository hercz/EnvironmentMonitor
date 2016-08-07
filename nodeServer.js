/**
 * Created by herczkumihalybalazs on 2016.08.07..
 */

var serialport = require('serialport');
var serialPort = serialport.SerialPort;
var portName =  process.argv[2];

var myPort = new serialPort(portName, {
    baudRate:9600,
    parser:serialport.parsers.readline("\r\n")
})

myPort.on('open', onOpen);
myPort.on('data', onData);

function onOpen() {
    console.log('Open connection...')
}

function onData(data) {
    console.log('data:'+ data)
}

