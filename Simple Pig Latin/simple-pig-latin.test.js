const pigIt = require("./simple-pig-latin");
test('Should pass all basic tests', ()=>{
    expect (pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
    expect (pigIt('This is my string')).toBe('hisTay siay ymay tringsay');
    expect (pigIt('Hello world !')).toBe('elloHay orldway !');
})
