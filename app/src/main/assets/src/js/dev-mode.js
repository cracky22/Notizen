function get_dev_status() {
  if (localStorage.getItem("com.crackyOS.notes_clickForDEV") == 7) {  
    window.location.href="./developer-mode.html"
  } else if (localStorage.getItem("com.crackyOS.notes_clickForDEV")) {
    let value = parseInt(
      localStorage.getItem("com.crackyOS.notes_clickForDEV")
    );
    value += 1;
    localStorage.setItem("com.crackyOS.notes_clickForDEV", value);
  } else {
    localStorage.setItem("com.crackyOS.notes_clickForDEV", 1);
    setTimeout(function() {
      window.location.href="./changelog.html";
    }, 80);
  }
}


if (localStorage.getItem("com.crackyOS.notes_clickForDEV") > 7) {
  localStorage.removeItem("com.crackyOS.notes_clickForDEV");
}


document.getElementById('current_pin').textContent = "current PIN: " + atob(localStorage.getItem("com.crackyOS.notes_user-login.pin")); 
document.getElementById('current_cloudKey').textContent = "current Cloud-Key: " + localStorage.getItem("com.crackyOS.notes_cloud-key"); 

if (localStorage.getItem("com.crackyOS.notes_user-login.admin-pin") === "IzgwMjAjNDA3MC0xMzQ2Nzk=") {
  document.getElementById('current_puk').textContent = "current PUK: default";
} else {
  document.getElementById('current_puk').textContent = "current PUK: " + atob(localStorage.getItem("com.crackyOS.notes_user-login.admin-pin"));
}



function set_cloudKey() {
  userIsOn('dev.mode.js:set_cloudKey');
  localStorage.setItem("com.crackyOS.notes_cloud-key", "DEVELOPER");
  location.reload();
}

function rem_auth() {
  userIsOn('dev.mode.js:rem_auth');
  localStorage.setItem("com.crackyOS.notes_user-login.token", "0");
}

function set_an_dt() {
  userIsOn('dev.mode.js:set_an_dt');
  localStorage.setItem("com.crackyOS.notes_analytics-data", "[]");
}

function set_nul() {
  userIsOn('dev.mode.js:set_nul');
  localStorage.setItem("com.crackyOS.notes_data", "[]");
  location.reload();
}

function set_err() {
  userIsOn('dev.mode.js:set_err');
  localStorage.setItem("com.crackyOS.notes_data", "ée");
  location.reload();
}

function set_pin() {
  userIsOn('dev.mode.js:set_pin');
  localStorage.removeItem("com.crackyOS.notes_user-login.pin");
  localStorage.setItem("com.crackyOS.notes_user-login.pin", "NTU=");
  location.reload();
}

function set_puk() {
  userIsOn('dev.mode.js:set_puk');
  localStorage.removeItem("com.crackyOS.notes_user-login.admin-pin");
  localStorage.setItem("com.crackyOS.notes_user-login.admin-pin", "IzI1LTgwIw==");
  location.reload();  
}

function unset_cloud() {
  userIsOn('dev.mode.js:unset_cloud');
  localStorage.removeItem("com.crackyOS.notes_cloud-key");
  localStorage.removeItem("com.crackyOS.notes_lastSynced");
}

function unset_dev() {
  userIsOn('dev.mode.js:unset_dev');
  localStorage.removeItem("com.crackyOS.notes_clickForDEV");
  localStorage.setItem("com.crackyOS.notes_user-login.token", "0");
  localStorage.setItem("com.crackyOS.notes_auto-login", "false");
  localStorage.setItem("com.crackyOS.notes_user-login.admin-pin", "IzgwMjAjNDA3MC0xMzQ2Nzk=");
  localStorage.setItem("com.crackyOS.notes_background", "default");
  window.location.href='./index.html';
}

function set_darkmode() {
  userIsOn('dev.mode.js:set_darkmode');
  localStorage.setItem("com.crackyOS.notes_darkmode", "true");
  localStorage.removeItem("com.crackyOS.notes_background");
  location.reload(); 
}
function unset_darkmode() {
  userIsOn('dev.mode.js:unset_darkmode');
  localStorage.setItem("com.crackyOS.notes_background", "default");
  localStorage.removeItem("com.crackyOS.notes_darkmode");
  location.reload(); 
}

function set_fivePINentrys() {
  userIsOn('dev.mode.js:set_fivePINentrys');
  localStorage.setItem("com.crackyOS.notes_wrong-PINentrys", 5);
  location.reload(); 
}
function set_tenPINentrys() {
  userIsOn('dev.mode.js:set_tenPINentrys');
  localStorage.setItem("com.crackyOS.notes_wrong-PINentrys", 10);
  location.reload(); 
}

function set_rememberPIN() {
  userIsOn('dev.mode.js:set_rememberPIN');
  localStorage.setItem("com.crackyOS.notes_pinRemember", "randomized");
  location.reload(); 
}

function reset_logins() {
  userIsOn('dev.mode.js:reset_logins');
  localStorage.setItem("com.crackyOS.notes_logins", 1);
  location.reload();
}

function renew_reloginCount() {
  userIsOn('dev.mode.js:renew_reloginCount');
  set_random_pinRemember_char();
  location.reload();
}


document.getElementById('currentLogins').textContent = "current Logins " + localStorage.getItem("com.crackyOS.notes_logins");  
document.getElementById('reloginAfter').textContent = "relogin after " + localStorage.getItem("com.crackyOS.notes_remember-after");  

var analyticsDataValue = localStorage.getItem('com.crackyOS.notes_data');
var notesDataValue = localStorage.getItem('com.crackyOS.notes_analytics-data');

var sizeInBytes1 = new TextEncoder().encode(analyticsDataValue).length;
var sizeInBytes2 = new TextEncoder().encode(notesDataValue).length;
var sizeInKilobytes1 = sizeInBytes1 / 1024;
var sizeInKilobytes2 = sizeInBytes2 / 1024;

document.getElementById('notesKB').textContent = 'Notiz-Daten: ' + sizeInKilobytes1.toFixed(2) + ' KB';
document.getElementById('analyticsKB').textContent = 'Analysedaten: ' + sizeInKilobytes2.toFixed(2) + ' KB';
userIsOn(currentPage + ":getStorage[notes_data_in_kb(" + sizeInKilobytes1.toFixed(2) + ") || analytics_data_in_kb(" + sizeInKilobytes2.toFixed(2) + ")]");