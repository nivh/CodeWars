/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 * Examples
 *
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 * @param {String} str input string
 */
function pigIt(str) {
    return str.split(/\s+/g).map(word => {
        return word.replace(/[^\w\s]/g,'').length===0 ? word : word.slice(1)+word.slice(0,1)+"ay";
    }).join(' ');
}

module.exports = pigIt;