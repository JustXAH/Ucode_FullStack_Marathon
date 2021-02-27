'use strict'

module.exports.calculateTime = function calculateTime() {
    let quantumDiffTime = [];
    let quantumFellDate = new Date(1939, 0, 1);
    let today = new Date();
    let difference = (Math.abs(Number(quantumFellDate)) + Number(today)) / 7;
    let quantumToday = new Date(Number(quantumFellDate) + Number(difference));

    quantumDiffTime.push(quantumToday.getFullYear() - quantumFellDate.getFullYear());
    quantumDiffTime.push(quantumToday.getMonth() - quantumFellDate.getMonth());
    quantumDiffTime.push(quantumToday.getDate() - quantumFellDate.getDate());
    return quantumDiffTime;
}