function getcelsius( fahrenheit ) {
    let celsius = ( fahrenheit - 32 ) * ( 5 / 9 );
    return celsius;
}

let givenFahrenheit = 95;
let fahrenheitToCelsius = getcelsius( givenFahrenheit );
console.log( givenFahrenheit, 'degree fahrenheit to celsius is=', fahrenheitToCelsius );