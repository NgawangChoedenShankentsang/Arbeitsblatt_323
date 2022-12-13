//const apiKey = "fe2eeff79749edcd2b3b137e1f5b94ff";

//API Key
let key = "fe2eeff79749edcd2b3b137e1f5b94ff";
//Get user input
let input = document.querySelector("#input");
// Create add button
let addButton = document.querySelector("#addButton");
// Create table
let table = document.querySelector("#tableBody");
//Create delete button
let deleteButton = document.querySelector("#deleteButton");
//Array to store locations
let locations = [];

//Function to add location
let addLocation = () => {
    // Get the user input
    let location = input.value;
    // Check if the input is empty
    if(location.trim() == "") {
        alert("Please enter a valid location!");
        return;
    }
    //Fetch the data from OpenWeatherMap
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //Push the data in the array
        locations.push(data);
        //Update the table
        updateTable();
    })
    .catch(err => {
        alert("Please enter a valid location!");
    })
}
//Function to update the table
let updateTable = () => {
    //Clear the table
    table.innerHTML = "";
    //Loop through the array and create table rows
    locations.forEach(location => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        td1.innerHTML = location.name;
        td2.innerHTML = Math.round(location.main.temp - 273.15) + "°C";
        td3.innerHTML = Math.round(location.main.temp_min - 273.15) + "°C";
        td4.innerHTML = Math.round(location.main.temp_max - 273.15) + "°C";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        table.appendChild(tr);
    });
}

//Function to delete the locations
let deleteLocations = () => {
    locations = [];
    updateTable();
}

//Add event listeners
addButton.addEventListener("click", addLocation);
deleteButton.addEventListener("click", deleteLocations);
