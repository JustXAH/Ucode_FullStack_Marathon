'use strict'

function firstUpper(str) {
    if (str) {
        str = str.trim().toLowerCase();
        str = str[0].toUpperCase() + str.slice(1);
        return str;
    }
    else {
        return '';
    }
}

module.exports.firstUpper = firstUpper;