function getInterest( principle, rate, year ) {
    let intarest = principle * rate * year;
    return intarest;
}

let givenPrinciple = 100000;
let givenYear = 5;
let givenIntarestRate = 5 / 100;

let intarestIs = getInterest( givenPrinciple, givenIntarestRate, givenYear );
console.log( intarestIs );