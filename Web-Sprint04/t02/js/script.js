let heroes = [
    {name: `Thanos`, strength: 99, age: 1000},
    {name: `Iron Man`, strength: 88, age: 48},
    {name: `Thor`, strength: 95, age: 1000},
    {name: `Captain America`, strength: 79, age: 137},
    {name: `Spider-Man`, strength: 78, age: 16},
    {name: `Hulk`, strength: 80, age: 49},
    {name: `Black Panther`, strength: 66, age: 53},
    {name: `Yon-Rogg`, strength: 73, age: 52},
    {name: `Captain Marvel`, strength: 97, age: 26}
]
let tableHeader = ["Name", "Strength", "Age"];
let checkSort = {
    nameSort: false,
    strengthSort: false,
    ageSort: false
}
let notification = document.querySelector('#notification')
notification.innerHTML = "Sorting by __, order: __"

tableCreator(heroes);

function headerInsertion() {
    let row = document.createElement("tr");

    for (let i = 0; i < 3; i++) {
        let cell = document.createElement("th");

        cell.innerText = tableHeader[i];
        if (i === 0)
            cell.setAttribute("onclick", "sortByName()");
        else if (i === 1) {
            cell.setAttribute("onclick", "sortByStrength()");
        }
        else {
            cell.setAttribute("onclick", "sortByAge()");
        }
        row.appendChild(cell);
    }
    return row;
}

function cellInsertion(str, row) {
    let cell = document.createElement("td");

    cell.innerText = str;
    row.appendChild(cell);
}

function tableCreator(heroesArr) {
    let placeholder = document.getElementById("placeholder");
    let tbl = document.createElement("table");

    tbl.appendChild(headerInsertion());
    for (let i = 0; i < 9; i++) {
        let row = document.createElement("tr");
        cellInsertion(`${heroesArr[i].name}`, row);
        cellInsertion(`${heroesArr[i].strength}`, row);
        cellInsertion(`${heroesArr[i].age}`, row);
        tbl.appendChild(row);
    }
    placeholder.innerHTML="";
    placeholder.appendChild(tbl);
}

function sortByName() {
    if (checkSort.nameSort === false) {
        heroes.sort((a, b) => a.name > b.name ? 1 : -1);
        checkSort.nameSort = true;
        checkSort.strengthSort = false;
        checkSort.ageSort = false;
        notification.innerHTML = "Sorting by Name, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.name < b.name ? 1 : -1);
        checkSort.nameSort = false;
        checkSort.strengthSort = false;
        checkSort.ageSort = false;
        notification.innerHTML = "Sorting by Name, order: DESC"
    }
    tableCreator(heroes);
}

function sortByStrength() {
    if (checkSort.strengthSort === false) {
        heroes.sort((a, b) => a.strength > b.strength ? 1 : -1);
        checkSort.nameSort = false;
        checkSort.strengthSort = true;
        checkSort.ageSort = false;
        notification.innerHTML = "Sorting by Strength, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.strength < b.strength ? 1 : -1);
        checkSort.nameSort = false;
        checkSort.strengthSort = false;
        checkSort.ageSort = false;
        notification.innerHTML = "Sorting by Strength, order: DESC"
    }
    tableCreator(heroes)
}

function sortByAge() {
    if (checkSort.ageSort === false) {
        heroes.sort((a, b) => a.age > b.age ? 1 : -1);
        checkSort.nameSort = false;
        checkSort.strengthSort = false;
        checkSort.ageSort = true;
        notification.innerHTML = "Sorting by Age, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.age < b.age ? 1 : -1);
        checkSort.nameSort = false;
        checkSort.strengthSort = false;
        checkSort.ageSort = false;
        notification.innerHTML = "Sorting by Age, order: DESC"
    }
    tableCreator(heroes)
}