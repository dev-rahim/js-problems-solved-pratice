function getFahrenheit( calsius ) {
    let fahrenheit = calsius * ( 9 / 5 ) + 32;
    return fahrenheit;
}

let givenCelsius = 35;
let calsiusToFahrenheit = getFahrenheit( givenCelsius );
console.log( givenCelsius, 'degree celsius to fahrenheit is=', calsiusToFahrenheit );