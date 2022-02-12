// variable
/*
var name = 'Rahim Uddin';
let customerName = 'karim Uddin';
const age = 20;
console.log( 'My name is', name, ', and my age', age, '. Customer Name is', customerName );
*/
// Array
/*
var myCustomers = [ 'Rahim', 'karim', 'abul', 'kabul', 'mokbul', 'hasibul', 'torikul', 'faruk' ];
let indexOfMokbul = myCustomers.indexOf( 'mokbul' );
console.log( indexOfMokbul );
let indexOfMahbubul = myCustomers.indexOf( 'Mahabubul' );
console.log( indexOfMahbubul );
myCustomers[ 4 ] = 'Sakibul';
console.log( myCustomers[ 4 ] );
myCustomers.pop();
console.log( myCustomers );
myCustomers.push( 'Rakibul' );
console.log( myCustomers );
myCustomers.unshift( 'Anisul' );
console.log( myCustomers );
myCustomers.shift( 'Anisul' );
console.log( myCustomers );
let lengthOfArray = myCustomers.length;
console.log( lengthOfArray );
*/

// loops
/*
for ( let i = 1; i <= 100; i += 2 ) {
    console.log( i );
}
*/
// for loop reverse
/*
for ( let i = 100; i > 0; i -= 2 ) {
    console.log( i );
}
*/
// even
/*
let x = 0;
while ( x <= 100 ) {
    console.log( x );
    x += 2;
}
*/
// while loop reverse 
/*
let i=99;
while (i>0) {
    console.log(i);
    i-=2;
}
*/
function AddThreeNumbers( a, b, c ) {
    let total = a + b + c;
    return total;
}
// Function
/*
let summetionThreeNumbers = AddThreeNumbers( 2, 52, 6 );
console.log( summetionThreeNumbers );
*/
// Object
/*
var computer = {
    color: 'black',
    price: 10000,
    proccore: 'cor i5'
}
var computerColor = computer.color;
console.log( computerColor );
computer.price = 150000;
console.log( computer.price );
let myProcessor = 'cor i7';
computer.proccore = myProcessor;
console.log( computer.proccore );
computer[ 'price' ] = 2000;
console.log( computer.price );
*/
// switch case
/*
let color = 'yellow';
switch ( color ) {
    case 'red':
        console.log( 'color is red' );
        break;
    case 'blue':
        console.log( 'color is blue' );
        break;
    case 'yellow':
        console.log( 'color is yellow' );
        break;
    default:
        console.log( 'color is default', color );
        break;
}
*/

// inches to feet
/*
function inchesToFeet( inches ) {
    let feet = inches / 12;
    return feet;

}
let givenInches = 12250;
let inchesToFeetIs = inchesToFeet( givenInches );
console.log( inchesToFeetIs );
*/
// check Even or odd
/*
function isEvenOrOdd( num ) {
    if ( num % 2 == 0 ) {
        console.log( num, 'is Even' );
    } else {
        console.log( num, 'is Odd' );
    }
}

let givenNumber = 26;
let checkNumber = isEvenOrOdd( givenNumber );
*/

// check is the year is leap year
/*
function isLeapYear( year ) {
    if ( year % 4 == 0 && year % 100 != 0 && year % 400 != 0 ) {
        return "it's a leap year";
    }
    return 'its not a leap year';

}

let checkLeapYear = 2100;
console.log( isLeapYear( checkLeapYear ) );
*/

// check factorial using simple function
/*
function getFactorial( num ) {
    let factorial = 1;
    for ( let i = 1; i <= num; i++ ) {
        factorial = factorial * i;
    }
    return factorial;
}

console.log( getFactorial( 7 ) );
*/
// check factorial using recursive function and while loop
/*
function getFactorial( num ) {
    let factorial = 1;
    i = 1;
    while ( i <= num ) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
console.log( getFactorial( 16 ) );
*/
// check factorial using recursive function
/*
function getFactorial( n ) {
    if ( n == 1 ) {
        return 1;
    }
    return n * getFactorial( n - 1 );
}
console.log( getFactorial( 7 ) );
*/

