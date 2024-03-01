let major = 3;
let minor = 0;
let subVS = 2;
let date = "Update vom 2024-03-01 19:49 Uhr";

vsText = "Version: " + major + "." + minor + "." + subVS;

document.getElementById('version').textContent = vsText;   
document.getElementById('date').textContent = date;
userIsOn('version.js:v' + major + "." + minor + "." + subVS);