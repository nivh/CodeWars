const { findDivisors, isSquare, listSquared } = require('../list-squared');
describe("Basic tests", () => {
    it("finsDivisors() Should pass all basic tests", () => {
        let x = 25;
        let divs = findDivisors(x).sort((a, b) => a - b);
        expect(divs).toEqual([1, 5, 25]);
        x = 64;
        divs = findDivisors(x).sort((a, b) => a - b);
        expect(divs).toEqual([1, 2, 4, 8, 16, 32, 64]);
    })
    it("isSquare() should pass all basic tests", () => {
        expect(isSquare(25)).toBe(true);
        expect(isSquare(49)).toBe(true);
        expect(isSquare(10)).toBe(false);
    });
    it("listSquared() should pass all basic tests", ()=>{
        expect(listSquared(1,250)).toEqual([[1, 1], [42, 2500], [246, 84100]]);
        expect(listSquared(42, 250)).toEqual([[42, 2500], [246, 84100]]);
    });
});
