'use strict'

function checkDivision(startRange, endRange) {
    if (!startRange && !endRange) {
        startRange = 1;
        endRange = 60;
    }
    else if (!endRange) {
        endRange = 60;
    }
    for (let i = startRange; i <= endRange; i++) {
    let description = '-';
        if (i % 2 === 0) {
            description = 'is divisible by 2';
        }
        if (i % 3 === 0 && i % 2 !== 0) {
            description = 'is divisible by 3';
        } else if (i % 3 === 0) {
            description = description.concat(', is divisible by 3');
        }
        if (i % 10 === 0) {
            description = description.concat(', is divisible by 10');
        }
        console.log(`The number ${i} ${description}`);
    }
}

module.exports.checkDivision = checkDivision;