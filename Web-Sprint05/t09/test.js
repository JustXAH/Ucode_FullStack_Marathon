/*
  Task 09 (test1.public)
  Task name: Mixins
*/

const MarkII = require('./markii');
const Printable = require('./printable');

class WarMachine extends MarkII {}
Object.assign(WarMachine.prototype, Printable);

const wm = new WarMachine;
wm.print();