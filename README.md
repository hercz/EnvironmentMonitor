Environment Monitor
===================


A little program, which can monitor a room environment (temperature, Humidity). 

Thanks to [Imre Lindi](https://github.com/lindi-imre) to show me this world, and for the help! :)

----------


> **Features:**

> - Display temperature and humidity data in a webapp (Angular2)
> - Write that data to a .txt file
> - Log data to console

> **Tools:**

> - [Arduino nano](https://www.arduino.cc/en/Main/ArduinoBoardNano) 
> - [DHT22 Sensor](https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf)

> **How does it work?**

>  1. Clone the repo
>  2. Upload arduino code to your arduino
>  3. Open a console window
>  4. Go to the "EnvironmentMonitor" folder
>  5. Type `node nodeServer.js COM4` then press Enter.
>  (COM4 parameter is depends, which port you connected your arduino)Go to the "Angular2FrontEnd" folder
>  6.  Type `npm start` then press Enter.
>  7. In the page `http://localhost:3000/` you should see the app, and the environment data.

**Pictures about the projcect:**
> ![Picture about the project](https://github.com/hercz/EnvironmentMonitor/blob/master/pics/Screenshot%202016-08-22%2015.11.20.png?raw=true)
![Picture about the project](https://github.com/hercz/EnvironmentMonitor/blob/master/pics/theCircuit.jpg?raw=true)
![Picture about the project](https://github.com/hercz/EnvironmentMonitor/blob/master/pics/2016-08-17%2011.14.50.jpg?raw=true)

**Sources:**
 - [How to use DHT-22 sensor - Arduino Tutorial](http://www.instructables.com/id/How-to-use-DHT-22-sensor-Arduino-Tutorial/?ALLSTEPS)
 - [Angular2 Quick Start](https://angular.io/docs/ts/latest/quickstart.html)

