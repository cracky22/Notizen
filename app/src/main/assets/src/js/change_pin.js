var _enteredPin = '';

function addNumber(number) {
    _enteredPin += number;
    document.getElementById('pinStatus').textContent = _enteredPin;
}

function clear_pin() {
    userIsOn('change_pin.js:clear_pin');
    location.reload();
}

function save_pin() {
    userIsOn('change_pin.js:save_pin');
    let enteredPin = btoa(_enteredPin);
    localStorage.removeItem("com.crackyOS.notes_user-login.pin");
    localStorage.setItem("com.crackyOS.notes_user-login.pin", enteredPin); 
    localStorage.setItem("com.crackyOS.notes_user-login.token", "0");
    localStorage.removeItem("com.crackyOS.notes_function-new-pin");
    userIsOn('change_pin.js:saved_new_pin');
    window.location.href='./index.html';
}