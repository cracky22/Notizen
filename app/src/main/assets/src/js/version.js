let major = 3;
let minor = 1;
let subVS = 0;
let date = "Update vom 2024-05-18 23:49 Uhr";

vsText = "Version: " + major + "." + minor + "." + subVS;

document.getElementById('version').textContent = vsText;   
document.getElementById('date').textContent = date;
userIsOn('version.js:v' + major + "." + minor + "." + subVS);