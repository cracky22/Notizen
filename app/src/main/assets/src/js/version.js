let major = 2;
let minor = 9;
let subVS = 8;
let date = "Update vom 2024-01-23 21:58  Uhr";

vsText = "Version: " + major + "." + minor + "." + subVS;

document.getElementById('version').textContent = vsText;   
document.getElementById('date').textContent = date;
userIsOn('version.js:v' + major + "." + minor + "." + subVS);