"use strict";

let LLData = require("./LLData");

class LList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(value) {
        let newNode = new LLData(value);
        if (this.length === 0) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new LLData(value);
        }
        this.length++;
    }
    *[Symbol.iterator] () {
        let current = this.head;
        while (current) {
            yield current.data;
            current = current.next;
        }
    };
    getFirst() {
        if (this.head) {
            return this.head;
        } else {
            console.log("List is empty");
        }
    }
    getLast() {
        if (this.head) {
            while (this.head) {
                if (!this.head.next) {
                    return this.head;
                }
                this.head = this.head.next;
            }

        } else {
            console.log("List is empty");
        }
    }
    addArr(array) {
        array.forEach((element) => {
            this.add(element);
        });
    }
    remove(value) {
        if (this.head) {
            if (this.head.value === value) {
                this.head = this.head.next
                this.length--;
                return;
            }
            let currentNode = this.head

            if (currentNode !== null) {
                while (currentNode.next) {
                    if (currentNode.next.value === value) {
                        currentNode.next = currentNode.next.next
                        this.length--;
                        return;
                    } else {
                        currentNode = currentNode.next
                    }
                }
            }
        } else {
            console.log("List is empty");
        }
    }
    removeAll(value) {
        if (this.head) {
            if (this.head.value === value) {
                this.head = this.head.next
                this.length--;
            }
            let currentNode = this.head (Node)

            if (currentNode !== null) {
                while (currentNode.next) {
                    if (currentNode.next.value === value) {
                        currentNode.next = currentNode.next.next
                        this.length--;
                    } else {
                        currentNode = currentNode.next
                    }
                }
            }
        } else {
            console.log("List is empty");
        }
    }
    contains(value) {
        if (this.head) {
            if ([...this].includes(value)) {
                return true;
            } else {
                return false;
            }
        } else {
            console.log("List is empty");
        }
    }

    clear() {
        this.head = null;
        this.length = 0;
    }
    count() {
        if (!this.head) {
            return this.length;
        } else {
            console.log("List is empty");
        }
    }
    toString() {
        if (this.head) {
            return [...this].join(", ");
        } else {
            console.log("List is empty");
        }
    }
    filter(callback) {
        if (this.head) {
            return [...this].filter(callback);
        } else {
            console.log("List is empty");
        }
    }
}

module.exports = {LList};