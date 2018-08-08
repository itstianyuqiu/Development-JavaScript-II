"use strict";

function addParagraph() {

    // Get the div where we'll be adding the paragraphs.
    var div = document.getElementsByClassName("paragraphContainer")[0];

    // Create a paragraph
    var p = document.createElement("p");

    // How many paragraphs are there already?
    var count = div.childNodes.length;

    // Set its properties
    p.innerHTML = "This is paragraph number " + (count + 1);

    // Add it to the div
    div.appendChild(p);

}

function removeParagraph() {

    // Get the div with the paragraphs
    var div = document.getElementsByClassName("paragraphContainer")[0];

    // Get the last paragraph in there
    var p = div.childNodes[div.childNodes.length - 1];

    // Remove it
    div.removeChild(p);
}

function createTable() {

    // Check if table already exists. If it does, display an error and quit the function.
    var table = document.getElementById("theTable");
    if (table != null) {
        alert("Table already exists!")
        return;
    }

    // Get div where we'll be adding the table
    var div = document.getElementsByClassName("tableContainer")[0];

    // Create table
    table = document.createElement("table");

    // Set its properties
    table.id = "theTable";
    table.classList.add("table");
    table.classList.add("table-striped");

    // Create a header
    var thead = document.createElement("thead");
    var row = document.createElement("tr");
    var cell1 = document.createElement("th");
    cell1.innerHTML = "Column #1";
    var cell2 = document.createElement("th");
    cell2.innerHTML = "Column #2";

    // Add cells to row
    row.appendChild(cell1);
    row.appendChild(cell2);

    // Add row to thead
    thead.appendChild(row);

    // Create a table body
    var tbody = document.createElement("tbody");
    tbody.id = "theTableBody";

    // Add thead and tbody to table
    table.appendChild(thead);
    table.appendChild(tbody);

    // Add table to div
    div.appendChild(table);

}

function addRow() {

    // Get the table body
    var tbody = document.getElementById("theTableBody");

    // if it doesn't exist, get outta here.
    if (tbody == null) {
        alert("Table doesn't exist. Create it first.");
        return;
    }

    // How many rows are there already?
    var count = tbody.childNodes.length;

    // Create some HTML. This is another way we can add elements to the page.
    var rowHTML = "<tr><td>Row " + count + ", column 1</td><td>Row " + count + ", column 2</td></tr>";
    tbody.innerHTML += rowHTML;

}

function removeRow() {

    // Get the table body
    var tbody = document.getElementById("theTableBody");

    // if it doesn't exist, get outta here.
    if (tbody == null) {
        alert("Table doesn't exist. Create it first.");
        return;
    }

    // Delete the last child node
    tbody.removeChild(tbody.childNodes[tbody.childNodes.length - 1]);
}