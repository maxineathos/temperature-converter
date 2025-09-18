// processing terminal values

const value = Number(process.argv[2]);
const fromUnit = process.argv[3];
const toUnit = process.argv[4];

// processing conversion operations

let operations = {

    celsiusToFahrenheit() {return (value * (9/5)) + 32},
    celsiusToKelvin() {return value + 273.15},
    fahrenheitToCelsius() {return (value - 32) / (9/5)},
    fahrenheitToKelvin() {return (value + 459.67) * 5/9},
    kelvinToCelsius() {return value - 273.15},
    kelvinToFahrenheit() {return (value * (9/5)) - 459.67}

}

// this function computes the value to be converted, the current unit to be converted, and the destination unit

function convertTemperature() {

    console.log(value)

    switch (`${fromUnit} ${toUnit}`.toLowerCase()) {
        case 'c f':
        case 'celsius fahrenheit':
            console.log(`${value}°C => ${Number.isInteger(value) ? parseInt(operations.celsiusToFahrenheit()) : operations.celsiusToFahrenheit().toFixed(1)}ºF`);
            return operations.celsiusToFahrenheit().toFixed(1);
        
        case 'c k':
        case 'celsius kelvin':
            console.log(`${value}°C => ${Number.isInteger(value) ? parseInt(operations.celsiusToKelvin()) : operations.celsiusToKelvin().toFixed(1)}K`);
            return operations.celsiusToKelvin().toFixed(1);
        
        case 'f c':
        case 'fahrenheit celsius':
            console.log(`${value}ºF => ${Number.isInteger(value) ? parseInt(operations.fahrenheitToCelsius()) : operations.fahrenheitToCelsius().toFixed(1)}ºC`);
            return operations.fahrenheitToCelsius().toFixed(1);
        
        case 'f k':
        case 'fahrenheit kelvin':
            console.log(`${value}ºF => ${Number.isInteger(value) ? parseInt(operations.fahrenheitToKelvin()) : operations.fahrenheitToKelvin().toFixed(1)}K`);
            return operations.fahrenheitToKelvin().toFixed(1);

        case 'k c':
        case 'kelvin celsius':
            console.log(`${value}K => ${Number.isInteger(value) ? parseInt(operations.kelvinToCelsius()) : operations.kelvinToCelsius().toFixed(1)}ºC`);
            return operations.kelvinToCelsius().toFixed(1);

        case 'k f':
        case 'kelvin fahrenheit':
            console.log(`${value}K => ${Number.isInteger(value) ? parseInt(operations.kelvinToFahrenheit()) : operations.kelvinToFahrenheit().toFixed(1)}ºF`);
            return operations.kelvinToFahrenheit().toFixed(1);

        default:
            console.log('You have to use the correct format: (value) (fromUnit) (toUnit) => 10 F C (e.g.) => -12ºC')
            break;

    }
}

convertTemperature()

// maxine athos (c) 2025 => LIT license