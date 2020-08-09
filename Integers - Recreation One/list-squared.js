// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. 
// The sum of the squared divisors is 2500 which is 50 * 50, a square!
// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.
// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, 
// each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.
// #Examples:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

function listSquared(m, n) {
    let res=[]; // array to collect results
    for (i=m; i<=n; i++) {
        let divisors=findDivisors(i);
        let sumSquared = divisors.reduce(function(sum,cur){
            return sum+=cur*cur;
        },0);
        // find if square:
        if (isSquare(sumSquared)) {
            // add to results
            res.push([i,sumSquared]);
        }
    }
    return res;
}

/**
 * Check if a number is a square (has a divider that by multiply itself gives the number)
 * example: 49 is a square (cause 7*7 === 49)
 * @param {*} x integer to check if it is a square number
 */
function isSquare(x) {
    return x > 0 && Math.sqrt(x) % 1 === 0;
}

/**
 * Function to find all divisors of an integer number
 * example: dividers of 42 should be: 1, 2, 3, 6, 7, 14, 21, 42
 * @param {*} x // Integer input to find divisors for
 * returns: Array containing all the divisors (not sorted!)
 */
function findDivisors(x) {
    let divisors=[];
    for (var i=1; i<=Math.sqrt(x); i++) {
        if (x%i === 0) {
            // add first divisor:
            divisors.push(i);
            let div2=x/i;
            if (i != div2) {
                // add other divisor, if it's not the same as the first (square root)
                divisors.push(div2);
            }
            
        }
    }
    return divisors;
}

module.exports = { listSquared,isSquare,findDivisors};

// check findDivisors():
let x=25
let divs=findDivisors(x).sort((a,b)=>a-b);
console.log(`Divisors of ${x}: ${divs}`);
x=64;
divs=findDivisors(x).sort((a,b)=>a-b);
console.log(`Divisors of ${x}: ${divs}`);

// check isSquare():
x=49;
console.log(`is ${x} square? ${isSquare(x)}`);
x=24;
console.log(`is ${x} square? ${isSquare(x)}`);

// check listSquared()
console.log(listSquared(1,250));
console.log(listSquared(42,250));