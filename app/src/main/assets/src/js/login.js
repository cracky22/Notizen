let _enteredPin = '';
let correctPin = localStorage.getItem("com.crackyOS.notes_user-login.pin"); 

function addNumber(number) {
  _enteredPin += number;
  document.getElementById('pinStatus').textContent = _enteredPin;
}

function clearPin() {
  userIsOn('login.js:clearPin');
  location.reload();
}

if (localStorage.getItem("com.crackyOS.notes_wrong-logins") === localStorage.getItem("com.crackyOS.notes_wrong-PINentrys")) {
  userIsOn('login.js:./blocked_pin.html');
  window.location.href = './blocked_pin.html';
}

function submitPin() {
  let enteredPin = btoa(_enteredPin);
  if (enteredPin === correctPin) {
    document.getElementById('pinStatus').textContent = 'Willkommen';
    localStorage.removeItem("com.crackyOS.notes_wrong-logins");
    setTimeout(function() {
      localStorage.setItem("com.crackyOS.notes_user-login.token", "984dec8c-7f96-43bd-9179-c3521ba5ea13");
      if (localStorage.getItem("com.crackyOS.notes_pinRemember") === "randomized") {
        let logins = parseInt(localStorage.getItem('com.crackyOS.notes_logins'));
        logins += 1;
        localStorage.setItem('com.crackyOS.notes_logins', logins);
      }
      window.location.href='./notes.html';
    }, 300);
  } else if (localStorage.getItem("com.crackyOS.notes_wrong-logins") === localStorage.getItem("com.crackyOS.notes_wrong-PINentrys")){
    document.getElementById('pinStatus').textContent = localStorage.getItem("com.crackyOS.notes_wrong-PINentrys") + ' Falsche Versuche, App gesperrt!!';
    userIsOn('login.js:app_blocked');
    setTimeout(function() {
      localStorage.removeItem("com.crackyOS.notes_user-login.pin");
      window.location.href='./blocked_pin.html';
    }, 1200);
  } else {
    document.getElementById('pinStatus').textContent = 'Falscher PIN. Zugriff verweigert.';
    userIsOn('login.js:wrong_pin');
    if (localStorage.getItem('com.crackyOS.notes_wrong-logins')) {
      let value = parseInt(localStorage.getItem('com.crackyOS.notes_wrong-logins'));
      value += 1;
      localStorage.setItem('com.crackyOS.notes_wrong-logins', value);
    } else {
      localStorage.setItem('com.crackyOS.notes_wrong-logins', 1);
    }
    setTimeout(function() {
      clearPin();
    }, 750);
  }
}