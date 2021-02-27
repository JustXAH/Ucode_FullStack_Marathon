/*
     Creating a method removeDuplicates and adding it to the prototype of the
     global object String.
     The method takes a string and removes all the duplicates and extra spaces
     between and around words.
 */

String.prototype.removeDuplicates = function removeDuplicates() {
    let str = this.replace(/\s+/g, ' ').trim();
    let arr = str.split(' ');

    str = arr.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
    }).join(' ');

    return str;
};