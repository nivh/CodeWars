// @ts-check

// I will assume the intention of this is to calculate your own "string" add function to support Big Integers
// (since in this time (August 2020) Javascript already supports BigInt)

// intention: solve the addition using vertical paper&paper way.
  // you place both numbers so their least significant digit is aligned (IE: flowting to the right)
  // loop: 
  // 1) add the right most digit
  // 2) save the results right part (last digit) and add it to the final result by glueing it to the left
  // 3) transfer the results left digit to the next loop
  // 4) repeat
  function sumStrings(a,b) { 
    // remove leading zeroes:
    a=a.replace(/^0+/, '');
    b=b.replace(/^0+/, '');
    // convert strings to array of digits
    let aa=a.split('');
    let bb=b.split('');
    let result='';
    let remainder=0;
    while (aa.length>0 || bb.length>0 || remainder>0) {
      let aLast=parseInt(aa.pop()) || 0;
      let bLast=parseInt(bb.pop()) || 0;
      let sumDigits=aLast+bLast+remainder;
      remainder=0;
      if (sumDigits > 9) {
        // 2 digits- need to glue the right char to the result's left side
        // and tranfer the left char to the loop (always 1)
        sumDigits=sumDigits % 10;
        remainder=1;
      }
      result=sumDigits+result;
    }
    return result;
  }

  let res=sumStrings('123','456');
  console.log(`Final result: ${res}`);