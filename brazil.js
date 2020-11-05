function displayHome() {
    displayElement("home");
    hideElement("about");
    hideElement("cities");
}

function displayAbout() {
    displayElement("about");
    hideElement("home");
    hideElement("cities");
}

function displayCities() {
    displayElement("cities");
    hideElement("home");
    hideElement("about");
}

var cities = ["rio", "sp", "salvador"];

function hideCitiesExcept(cityId) {
       for (i = 0; i < cities.length; i++) {
        var city = cities[i];
        if (city != cityId) {
            hideElement(city);
        }
    }
}

function displayRio() {
    displayElement("rio");
    hideCitiesExcept("rio");
    displayCities();
}

function displaySP() {
    displayElement("sp");
    hideCitiesExcept("sp");
    displayCities();
}

function displaySalvador() {
    displayElement("salvador");
    hideCitiesExcept("salvador");
    displayCities();
}

function displayElement(id) {
    var show_element = document.getElementById(id);
    show_element.style.display = "block";
}

function hideElement(id) {
    var hide_element = document.getElementById(id);
    hide_element.style.display = "none";
}


