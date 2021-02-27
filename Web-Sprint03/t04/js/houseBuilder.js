// A prototype for a house called houseBlueprint
function houseBlueprint (address, description, owner, size) {
    this.address = address;
    this.date  = new Date();
    this.description = description;
    this.owner = owner;
    this.size = size;
    this._averageBuildSpeed = 0.5;
    this.getDaysToBuild = function () {
        return this.size / this._averageBuildSpeed;
    }
}

/*
 A constructor HouseBuilder,which builds houses based on the prototype
 (houseBlueprint)
 */
function HouseBuilder(address, description, owner, size, roomCount) {
    houseBlueprint.call(this, address, description, owner, size);
    this.roomCount = roomCount;
}