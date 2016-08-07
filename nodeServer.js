/**
 * Created by herczkumihalybalazs on 2016.08.07..
 */
var express = require('express');
var app = express();


var serialport = require('serialport');
var serialPort = serialport.SerialPort;
var portName = process.argv[2];

var myPort = new serialPort(portName, {
    baudRate: 9600,
    parser: serialport.parsers.readline("\r\n")
})

myPort.on('open', onOpen);
myPort.on('data', onData);

function onOpen() {
    console.log('Open connection with serial port...')
}

const fs = require('fs');


function onData(data) {
    console.log('data:' + data);
    var d = new Date();


    fs.appendFile('data.txt', d.toUTCString() + ',' + data + '\n', 'utf8');


    // app.get('/environmentdata', function (req, res) {
    //     console.log("Got a GET request for /environmentdata");
    //     res.setHeader('Content-Type', 'application/json');
    //     res.send(data);
    // });
}

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Arduino server app listening at http://%s:%s", host, port)
});