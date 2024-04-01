let calc = document.getElementById("add");
calc.onclick = ageCalc ;
function ageCalc() {
    let dateTyped = new Date(document.getElementById("input").value);
    // Date NOOOOW
    let dateNow = new Date();
    
    // Function that calc the value typed
    document.getElementById("input").value = "";
    document.getElementById("day").textContent = "";
    document.getElementById("month").textContent = "";
    document.getElementById("year").textContent = "";
    // adding the info to the page
    // in days
    let ageInDays = Math.floor((dateNow - dateTyped)/1000/60/60/24);
    let day = document.getElementById("day");
    let days = document.createTextNode(ageInDays);
    day.appendChild(days);
    
    // in months
    let ageInMonths = Math.floor((dateNow - dateTyped)/1000/60/60/24/30);
    let month = document.getElementById("month");
    let months = document.createTextNode(ageInMonths);
    month.appendChild(months);
    
    // in years
    let ageInYears = Math.floor((dateNow - dateTyped)/1000/60/60/24/365);
    let year = document.getElementById("year");
    let years = document.createTextNode(ageInYears);
    year.appendChild(years);

};





