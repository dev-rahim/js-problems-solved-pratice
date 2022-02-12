function getResult( number ) {
    if ( number > 100 ) {
        console.log( 'Please Enter a valid Number' );
    }
    else if ( number >= 80 && number <= 100 ) {
        console.log( 'Your gread is A+' );
    }
    else if ( number >= 70 ) {
        console.log( 'Your gread is A' );
    }
    else if ( number >= 60 ) {
        console.log( 'Your gread is A-' );
    }
    else if ( number >= 50 ) {
        console.log( 'Your gread is B' );
    }
    else if ( number >= 40 ) {
        console.log( 'Your gread is C' );
    }
    else if ( number >= 33 ) {
        console.log( 'Your gread is D' );
    }
    else if ( number >= 33 ) {
        console.log( 'Your gread is D' );
    }
    else {
        console.log( 'You are Fail' );
    }

}

let givenNumber = 32;
let result = getResult( givenNumber );
console.log( result );