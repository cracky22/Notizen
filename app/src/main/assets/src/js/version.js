let major = 3;
let minor = 0;
let subVS = 1;
let date = "Update vom 2024-02-15 12:47 Uhr";

vsText = "Version: " + major + "." + minor + "." + subVS;

document.getElementById('version').textContent = vsText;   
document.getElementById('date').textContent = date;
userIsOn('version.js:v' + major + "." + minor + "." + subVS);