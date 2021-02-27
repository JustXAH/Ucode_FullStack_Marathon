/*
  Task 02 (test1.public)
  Task name: Range
*/

const i = require('./index');

console.log('*** Range is 3 - 7 checkDivision(3, 7) ***');
i.checkDivision(3, 7);

console.log('\n*** Range is 58 - ... checkDivision(58) ***');
i.checkDivision(58);

console.log('\n*** Range is ... - ... checkDivision() ***');
i.checkDivision();

console.log('\n*** Range is 0 - ... checkDivision() ***');
i.checkDivision(0, 65);
