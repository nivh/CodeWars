const {makePlural}=require('./human-duration');
// Make Plural tests
test ('makePlural() basic tests', ()=>{
    expect(makePlural('second',21)).toBe('21 seconds');
    expect(makePlural('second',1)).toBe('1 second');
    expect(makePlural('second',0)).toBe('0 seconds');
})