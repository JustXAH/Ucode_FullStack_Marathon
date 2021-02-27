function checkBrackets(str) {
    let leftBracket = 0;
    let rightBracket = 0;
    let result = 0;

    if (!str) {
        return String(-1);
    }
    for (let i = 0 ; i < str.length; i++) {
        if (str[i] === '(') {
            leftBracket++;
        }
        else if (str[i] === ')') {
            rightBracket++;
            if (rightBracket > leftBracket) {
                result++;
                rightBracket = 0;
                leftBracket = 0;
            }
        }
    }
    if (leftBracket === 0 && rightBracket === 0 && result === 0) {
        result = -1;
    }
    else if (leftBracket > rightBracket) {
        result += leftBracket - rightBracket;
    }
    return String(result);
}