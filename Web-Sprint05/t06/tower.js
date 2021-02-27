'use strict'

const Building = require('./building')

module.exports = class Tower extends Building {
    get hasElevator() {
        return this._hasElevator;
    };

    set hasElevator(value) {
        if (value === true) {
            this._hasElevator = '+';
        } else {
            this._hasElevator = '-';
        }
    };

    getFloorHeight() {
        return this.height / this.floors;
    };

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Elevator: ${this.hasElevator}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Flor height: ${this.getFloorHeight()}`
        ].join('\n');
    };
}