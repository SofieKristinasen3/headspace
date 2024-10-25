let volunteerRoles = ["Chatten", "Dialogpilot", "Events", "Formidler", "Grupperådgiver", "Headspace Family", "SoMe", "Ungerådgiver"];

let modal = document.getElementById("myModal");
let openModalBtn = document.getElementById("openModalBtn");
let closeBtn = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
    modal.style.display = "block";
    populateDropdown(); // Sørg for at drop-down bliver fyldt
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function populateDropdown() {
    const dropdown = document.getElementById("volunteer");

    dropdown.innerHTML = "";

    volunteerRoles.forEach(function(role) {
        let option = document.createElement("option");
        option.value = role.toLowerCase(); // Brug små bogstaver som værdien
        option.text = role; // Sæt teksten som vises
        dropdown.appendChild(option);
    });
}

function submitForm() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let volunteerRole = document.getElementById("volunteer").value;

    console.log("Fornavn:", firstName);
    console.log("Efternavn:", lastName);
    console.log("Email:", email);
    console.log("Frivillig rolle:", volunteerRole);

    modal.style.display = "none";

    alert("Tilmelding modtaget! Tak fordi du tilmeldte dig.");
}