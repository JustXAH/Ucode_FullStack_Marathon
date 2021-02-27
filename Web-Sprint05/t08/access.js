'use strict'

module.exports = class Access {
    constructor(mark_LXXXV) {
        this.mark_LXXXV = mark_LXXXV;
    }

    get mark_LXXXV() {
        return this._mark_LXXXV;
    }
    set mark_LXXXV(value) {
        if (value === undefined) {
            this._mark_LXXXV = 'undefined';
        }
        else if (value === null) {
            this._mark_LXXXV = 'null';
        }
        else {
            this._mark_LXXXV = value;
        }
    }
}