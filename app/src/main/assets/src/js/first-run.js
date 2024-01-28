let _enteredPin = '';

function addNumber(number) {
    _enteredPin += number;
    document.getElementById('pinStatus').textContent = _enteredPin;
}

function clear_pin() {
    userIsOn('first-run.js:clear_pin');
    location.reload();
}

function save_pin() {
    userIsOn('first-run.js:save_pin');
    let enteredPin = btoa(_enteredPin);
    localStorage.setItem("com.crackyOS.notes_user-login.pin", enteredPin); 
    localStorage.setItem("com.crackyOS.notes_wrong-PINentrys", 3);
    localStorage.setItem("com.crackyOS.notes_user-login.token", "0");
    localStorage.setItem("com.crackyOS.notes_auto-login", "true");
    localStorage.setItem("com.crackyOS.notes_pinRemember", "randomized");
    localStorage.setItem("com.crackyOS.notes_user-login.admin-pin", "IzgwMjAjNDA3MC0xMzQ2Nzk=");
    localStorage.setItem("com.crackyOS.notes_logins", 1);
    localStorage.setItem("com.crackyOS.notes_background", "default");
    localStorage.setItem("com.crackyOS.notes_analytics", "true");
    set_random_pinRemember_char();
    
    if (localStorage.getItem("com.crackyOS.notes_firstrun-restoreCloud") !== "true") {
        userIsOn('first-run.js:setup_withoutCloud');
        localStorage.setItem("com.crackyOS.notes_data", "[]");
    } else {
        userIsOn('first-run.js:setCloud.defaults');
        localStorage.setItem("com.crackyOS.notes_auto-sync", "true");
        localStorage.setItem("com.crackyOS.notes_useCloud", "true");
        localStorage.setItem("com.crackyOS.notes_lastSynced", "Noch nicht Synchronisiert");
    }
    localStorage.removeItem("com.crackyOS.notes_firstrun-restoreCloud");
    localStorage.removeItem("com.crackyOS.notes_FRW-restore_complete");
    userIsOn('first-run.js:setup.done');
    userIsOn('first-run.js:DONE');
    window.location.href='./index.html';
}

function debug_init() {
    userIsOn('first-run.js:debug_init');
    localStorage.setItem("com.crackyOS.notes_user-login.pin", "NTU="); 
    localStorage.setItem("com.crackyOS.notes_wrong-PINentrys", 3);
    localStorage.setItem("com.crackyOS.notes_user-login.token", "984dec8c-7f96-43bd-9179-c3521ba5ea13");
    localStorage.setItem("com.crackyOS.notes_auto-login", "true");
    localStorage.setItem("com.crackyOS.notes_user-login.admin-pin", "IzI1LTgwIw==");
    localStorage.setItem("com.crackyOS.notes_auto-sync", "true");
    localStorage.setItem("com.crackyOS.notes_useCloud", "true");
    localStorage.setItem("com.crackyOS.notes_lastSynced", "Noch nicht Synchronisiert");
    localStorage.setItem("com.crackyOS.notes_cloud-key", "DEVELOPER");
    localStorage.setItem("com.crackyOS.notes_clickForDEV", 7);
    localStorage.setItem("com.crackyOS.notes_logins", 1);
    localStorage.setItem("com.crackyOS.notes_background", "default");
    localStorage.setItem("com.crackyOS.notes_pinRemember", "randomized");
    localStorage.setItem("com.crackyOS.notes_analytics", "true");
    set_random_pinRemember_char();
    localStorage.setItem("com.crackyOS.notes_data", "[]");
    userIsOn('first-run.js:debug_init.done');
    window.location.href='./index.html';
}