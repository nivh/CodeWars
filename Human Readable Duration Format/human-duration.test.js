const {formatDuration}=require('./human-duration');

// 1 year = 365 * 24 * 60 * 60 seconds = 31,536,000
// 1 day = 24 * 60 * 60 seconds = 86,400
// 1 hour = 60 * 60 seconds = 3,600
// 1 minute = 60 second


// Format Duration Tests
test ('zero seconds should return "now"', ()=>{
    expect(formatDuration(0)).toBe('now');
})
test ('only seconds',()=>{
    expect(formatDuration(32)).toBe('32 seconds');
    expect(formatDuration(1)).toBe('1 second');
});
test ('only mitutes', ()=>{
    expect(formatDuration(60)).toBe('1 minute');
    expect(formatDuration(360)).toBe('6 minutes');
})
test ('minutes and seconds', ()=>{
    expect(formatDuration(61)).toBe('1 minute and 1 second');
    expect(formatDuration(150)).toBe('2 minutes and 30 seconds');
})
test ('complex mix',()=>{
    expect(formatDuration(132030240)).toBe('4 years, 68 days, 3 hours and 4 minutes');
})