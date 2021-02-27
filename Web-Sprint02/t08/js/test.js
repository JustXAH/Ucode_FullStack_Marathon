describe("checkBrackets", () => {
    it("if_Undefined",function() {
        assert.equal(checkBrackets(undefined), '-1')
    })
    it("if_Nan", () => assert.equal(checkBrackets(NaN), '-1'))
    it("if_string",function() {
        assert.equal(checkBrackets('abc'), '0')
    })
    it("if_number",function() {
        assert.equal(checkBrackets(1), '0')
    })
    it("if_null",function() {
        assert.equal(checkBrackets(null), '0')
    })
    it("()", function() {
        assert.equal(checkBrackets('()'), '0');
    });
    it("() )(", function() {
        assert.equal(checkBrackets('() )('), '0');
    });
    it("()()()()()()()", function() {
        assert.equal(checkBrackets('()()()()()()()'), '0');
    });
    it("()()buyb(buyff))", function() {
        assert.equal(checkBrackets('()()buyb(buyff))'), '0');
    });
    it("()()()()()", function() {
        assert.equal(checkBrackets('()()()()()'), '0');
    });
    it("([", function() {
        assert.equal(checkBrackets('()()()()()()'), '0');
    });
    it("((((((((((1))))))))))", function() {
        assert.equal(checkBrackets('((((((((((1))))))))))'), '0');
    });
    it("( ( ( ( ( ( (", function() {
        assert.equal(checkBrackets('( ( ( ( ( ( ('), '7');
    });
    it("(1) (2) (3) (4)", function() {
        assert.equal(checkBrackets('(1) (2) (3) (4)'), '0');
    });
    it(")1( )2(", function() {
        assert.equal(checkBrackets(')1( )2('), '2');
    });
});

// let correctResult1 = checkBrackets('(((((((((())))))))))') //0
// let correctResult2 = checkBrackets('(1s(1s(1s(1s(1s)1s)1s)1s)1s)')// 0
// let correctResult3 = checkBrackets('(( )( ) ( ) ( ) ( ))') // 0
// let correctResult4 = checkBrackets('(sss(s)s(sss(ss))-1-2-3+3())') // 0
// let correctResult5 = checkBrackets('()') // 0
//
//
//
// let incorrectResult1 = checkBrackets(NaN) // -1
// let incorrectResult2 = checkBrackets(null) // -1
// let incorrectResult3 = checkBrackets(undefined) // -1
// let incorrectResult4 = checkBrackets('') // -1
// let incorrectResult5 = checkBrackets('(((((') // 5
// let incorrectResult6 = checkBrackets(')))))') // 5
// let incorrectResult7 = checkBrackets(')))))(((((') // 10
// let incorrectResult8 = checkBrackets('1)()(())2(()') // 2
//
//
//
// console.log(
//     `correctResult1 is |${correctResult1}|\n
//     correctResult2 is |${correctResult2}|\n
//     correctResult3 is |${correctResult3}|\n
//     correctResult4 is |${correctResult4}|\n
//     correctResult5 is |${correctResult5}|\n
//     incorrectResult1 is |${incorrectResult1}|\n
//     incorrectResult2 is |${incorrectResult2}|\n
//     incorrectResult3 is |${incorrectResult3}|\n
//     incorrectResult4 is |${incorrectResult4}|\n
//     incorrectResult5 is |${incorrectResult5}|\n
//     incorrectResult6 is |${incorrectResult6}|\n
//     incorrectResult7 is |${incorrectResult7}|\n
//     incorrectResult8 is |${incorrectResult8}|\n`);