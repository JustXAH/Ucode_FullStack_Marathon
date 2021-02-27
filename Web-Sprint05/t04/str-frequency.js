'use strict'

module.exports = class StrFrequency {
    constructor(str) {
        this.str = str;
    }

    letterFrequencies() {
        let data = {};
        let allowed = /[a-z]/i;
        let letter;

        for (let i = 0; i < this.str.length; i++) {
            if (allowed.test(this.str.charAt(i))) {
                letter = this.str.charAt(i).toUpperCase();
                if (data[letter] === undefined) {
                    data[letter] = 0;
                }
                data[letter] += 1;
            }
        }
        return data;
    }

    wordFrequencies() {
        let wordsArr = this.str.toUpperCase().split(/[^a-z]/i);
        let data = {};
        let allowed = /[a-z]/i;

        if (this.str) {
            for (let i in wordsArr) {
                if (allowed.test(wordsArr[i])) {
                    if (data[wordsArr[i]] === undefined) {
                        data[wordsArr[i]] = 0;
                    }
                    data[wordsArr[i]] += 1;
                }
            }
        }
        else {
            data[''] = 1;
        }
        return data;
    }
    reverseString() {
        return this.str.split('').reverse().join('');
    }
}