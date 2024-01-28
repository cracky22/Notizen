let timeout = 1500;

function debug_help() {
    console.log("command: debug_function\nfunctions:\n- setup\n- set_parameter\n- reset\nparameters:\n- set_background_[default|white|blue|gray]\n- set_darkmode\n- unset_darkmode")
}

function debug_setup() {
    console.log("setting up application as debug user...");
    setTimeout(function() {
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
        set_random_pinRemember_char();
        localStorage.setItem("com.crackyOS.notes_data", "[]");
        window.location.href='./index.html';
    }, timeout)
}

function debug_reset() {
    console.log("resetting application...")
    localStorage.clear();

    setTimeout(function() {
        window.location.href="./index.html";
    }, timeout);
}


function debug_set_background_default() {
    console.log("setting background default...");
    localStorage.setItem("com.crackyOS.notes_background", "default");
    localStorage.removeItem("com.crackyOS.notes_darkmode");
    
    setTimeout(function() {
        location.reload();
    }, timeout);
}

function debug_set_background_white() {
    console.log("setting background white...");
    localStorage.setItem("com.crackyOS.notes_background", "white");
    localStorage.removeItem("com.crackyOS.notes_darkmode");
    
    setTimeout(function() {
        location.reload();
    }, timeout);
}

function debug_set_background_blue() {
    console.log("setting background blue...");
    localStorage.setItem("com.crackyOS.notes_background", "blue");
    localStorage.removeItem("com.crackyOS.notes_darkmode");
    
    setTimeout(function() {
        location.reload();
    }, timeout);
}

function debug_set_background_gray() {
    console.log("setting background gray...");
    localStorage.setItem("com.crackyOS.notes_background", "gray");
    localStorage.removeItem("com.crackyOS.notes_darkmode");
    
    setTimeout(function() {
        location.reload();
    }, timeout);
}

function debug_set_darkmode() {
    console.log("set darkmode...");
    localStorage.setItem("com.crackyOS.notes_darkmode", "true");
    localStorage.removeItem("com.crackyOS.notes_background");
    
    setTimeout(function() {
        location.reload();
    }, timeout);
}

function debug_unset_darkmode() {
    console.log("unset background...");
    localStorage.removeItem("com.crackyOS.notes_darkmode");
    localStorage.setItem("com.crackyOS.notes_background", "default");
    
    setTimeout(function() {
        location.reload();
    }, timeout);
}