(function solve() {
    let nextId = 0;

    class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = nextId;
            nextId++;
            this.temperature = Number(temperature);
            this.humidity = Number(humidity);
            this.pressure = Number(pressure);
            this.windSpeed = Number(windSpeed);
        }
        toString(){
            let s = '';
            if(this.temperature < 20 &&
                (this.pressure < 700 || this.pressure > 900) &&
                this.windSpeed > 25){
                s = 'Stormy';
            }else{
                s = 'Not stormy';
            }
            let result =
                'Reading ID: ' + this.id + '\nTemperature: ' + this.temperature + '*C\n' +
                'Relative Humidity: ' + this.humidity + '%\n' + 'Pressure: ' + this.pressure + 'hpa\n' +
                'Wind Speed: ' + this.windSpeed + 'm/s\n' + 'Weather: ' + s;

            return result;
        }
    }

    return Record;
})();
