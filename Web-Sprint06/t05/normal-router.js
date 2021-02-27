'use strict'

module.exports.calculateTime = function calculateTime() {
    return new Date(1939, 0, 1);
}

let today = new Date();

Date.prototype.years = function() {
    return (today.getFullYear() - this.getFullYear());
}

Date.prototype.months = function() {
    return (today.getMonth() - this.getMonth());
}

Date.prototype.days = function() {
    return (today.getDate() - this.getDate());
}