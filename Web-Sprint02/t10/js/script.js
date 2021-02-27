function copyObj(obj) {
    let objCopy = {}; // objCopy будет хранить копию mainObj
    let key = 0;

    for(key in obj) {
        objCopy[key] = obj[key]; // копирует каждое свойство objCopy
    }
    return objCopy;
}
