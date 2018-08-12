var customers = [
    {"name": "Peter Jackson", "gender": "male", "year_born": 1961, "joined": "1997", "num_hires": 17000},

    {"name": "Jane Campion", "gender": "female", "year_born": 1954, "joined": "1980", "num_hires": 30000},

    {"name": "Roger Donaldson", "gender": "male", "year_born": 1945, "joined": "1980", "num_hires": 12000},

    {"name": "Temuera Morrison", "gender": "male", "year_born": 1960, "joined": "1995", "num_hires": 15500},

    {"name": "Russell Crowe", "gender": "male", "year_born": 1964, "joined": "1990", "num_hires": 10000},

    {"name": "Lucy Lawless", "gender": "female", "year_born": 1968, "joined": "1995", "num_hires": 5000},

    {"name": "Michael Hurst", "gender": "male", "year_born": 1957, "joined": "2000", "num_hires": 15000},

    {"name": "Andrew Niccol", "gender": "male", "year_born": 1964, "joined": "1997", "num_hires": 3500},

    {"name": "Kiri Te Kanawa", "gender": "female", "year_born": 1944, "joined": "1997", "num_hires": 500},

    {"name": "Lorde", "gender": "female", "year_born": 1996, "joined": "2010", "num_hires": 1000},

    {"name": "Scribe", "gender": "male", "year_born": 1979, "joined": "2000", "num_hires": 5000},

    {"name": "Kimbra", "gender": "female", "year_born": 1990, "joined": "2005", "num_hires": 7000},

    {"name": "Neil Finn", "gender": "male", "year_born": 1958, "joined": "1985", "num_hires": 6000},

    {"name": "Anika Moa", "gender": "female", "year_born": 1980, "joined": "2000", "num_hires": 700},

    {"name": "Bic Runga", "gender": "female", "year_born": 1976, "joined": "1995", "num_hires": 5000},

    {"name": "Ernest Rutherford", "gender": "male", "year_born": 1871, "joined": "1930", "num_hires": 4200},

    {"name": "Kate Sheppard", "gender": "female", "year_born": 1847, "joined": "1930", "num_hires": 1000},

    {"name": "Apirana Turupa Ngata", "gender": "male", "year_born": 1874, "joined": "1920", "num_hires": 3500},

    {"name": "Edmund Hillary", "gender": "male", "year_born": 1919, "joined": "1955", "num_hires": 10000},

    {"name": "Katherine Mansfield", "gender": "female", "year_born": 1888, "joined": "1920", "num_hires": 2000},

    {"name": "Margaret Mahy", "gender": "female", "year_born": 1936, "joined": "1985", "num_hires": 5000},

    {"name": "John Key", "gender": "male", "year_born": 1961, "joined": "1990", "num_hires": 20000},

    {"name": "Sonny Bill Williams", "gender": "male", "year_born": 1985, "joined": "1995", "num_hires": 15000},

    {"name": "Dan Carter", "gender": "male", "year_born": 1982, "joined": "1990", "num_hires": 20000},

    {"name": "Bernice Mene", "gender": "female", "year_born": 1975, "joined": "1990", "num_hires": 30000}
];

var date = new Date;
var currentYear = date.getFullYear();

function loadData(){
    makeTable();
    displayGender();
    displayAge();
}

function makeTable() {

    window.console.log("makeTable executed");

    var tableDiv = document.getElementById("tableContainer");
    table = document.createElement("table");
    table.style.borderStyle = "solid";
    table.id = "theTable";

    var tbody = document.createElement("tbody");
    tbody.id = "theTableBody";

    var cell1 = document.createElement("th");
    cell1.innerHTML = "name";
    var cell2 = document.createElement("th");
    cell2.innerHTML = "gender";
    var cell3 = document.createElement("th");
    cell3.innerHTML = "year born";
    var cell4 = document.createElement("th");
    cell4.innerHTML = "joined";
    var cell5 = document.createElement("th");
    cell5.innerHTML = "num hires";
    var cell6 = document.createElement("th");
    cell6.innerHTML = "membership";


    var row = document.createElement("tr");
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);

    var thead = document.createElement("thead");
    thead.appendChild(row);

    table.appendChild(thead);
    table.appendChild(tbody);
    tableDiv.appendChild(table);

    appendRows();
}

function appendRows() {
    for (var i = 0; i < customers.length; i++) {
        var row_1 = document.createElement("tr");
        var cell1_1 = document.createElement("td");
        cell1_1.innerHTML = customers[i].name;

        var cell1_2 = document.createElement("td");
        cell1_2.innerHTML = customers[i].gender;

        var cell1_3 = document.createElement("td");
        cell1_3.innerHTML = customers[i].year_born;

        var cell1_4 = document.createElement("td");
        cell1_4.innerHTML = customers[i].joined;

        var cell1_5 = document.createElement("td");
        cell1_5.innerHTML = customers[i].num_hires;

        var cell1_6 = document.createElement("td");
        cell1_6.innerHTML = calculateMembership(customers[i].joined, customers[i].num_hires);

        row_1.appendChild(cell1_1);
        row_1.appendChild(cell1_2);
        row_1.appendChild(cell1_3);
        row_1.appendChild(cell1_4);
        row_1.appendChild(cell1_5);
        row_1.appendChild(cell1_6);
        table.appendChild(row_1);
    }
}

function calculateMembership(yearJoined, videosRented) {
    var mGold = "GOLD";
    var mSilver = "SILVER";

    var weeksInYear = 52;

    var avg = (currentYear - yearJoined) * weeksInYear / videosRented;

    if(avg > 1)
        return mGold;
    else
        return mSilver;
}


function countGender() {
    var genderStats = {"females": 0, "males": 0};

    for (var i = 0; i < customers.length; i++) {
        if (customers[i].gender == "male") {
            genderStats.males++;
        }
        else {
            genderStats.females++;
        }
    }
    return genderStats;
}


function displayGender() {
    var genders = countGender();
    var div = document.getElementById("genderStats");
    div.textContent = "Males: " + genders.males + ", females: " + genders.females;

}

function countAges() {
    var ages = {"age030": 0, "age3164": 0, "age65": 0};

    for (var i = 0; i < customers.length; i++) {
        if (customers[i].year_born > currentYear - 30) {
            ages.age030++;
        }
        else if (customers[i].year_born > currentYear - 64) {
            ages.age3164++;
        }
        else {
            ages.age65++;
        }
    }
    return ages;

}

function displayAge() {
    var div = document.getElementById("yearStats");
    var years = countAges();
    div.textContent = "Age 0-30: " + years.age030 + " customers; " + "age 31-64: " + years.age3164 + " customers; " + "age 65+: " + years.age65 + " customers."

}

function printStatus() {
    var div = document.getElementById("weeklyStats");
    var yearJoined = customers.joined;
    var yearUsingService = currentYear - yearJoined;

    for (var i = 0; i < customers.length; i++) {
        var status = null;
        if ((customers[i].num_hires / (yearUsingService * 52)) > 4) {
            div.textContent = customers.name + "'s user status is gold";
        }
        else if ((customers[i].num_hires / (yearUsingService * 52) < 4) && (customers[i].num_hires / (yearUsingService * 52) > 1)) {
            div.textContent = customers.name + "'s user status is silver";
        }
        else {
            div.textContent = customers.name + "'s user status is bronze";
        }
    }
}



