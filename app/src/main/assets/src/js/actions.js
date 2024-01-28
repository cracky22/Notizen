function change_pin() {
    userIsOn('actions.js:change_pin');
    window.location.href='./change_pin.html';
}

function cloud() {
    userIsOn('actions.js:cloud');
    window.location.href='./cloudKit.html';
}

function settings() {
    userIsOn('actions.js:settings');
    window.location.href='./settings.html';
}

function app_reset() {
    localStorage.clear();
    setTimeout(function() {
        window.location.href='./first-run-wizard.html';
    }, 0.850);
}

function logout() {
    userIsOn('actions.js:logout');
    localStorage.setItem("com.crackyOS.notes_user-login.token", "0");
    window.location.href='./index.html';
}