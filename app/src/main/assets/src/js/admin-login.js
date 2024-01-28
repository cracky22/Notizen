let enteredPin = '';
let _correctPin = localStorage.getItem("com.crackyOS.notes_user-login.admin-pin"); 
let correctPin = atob(_correctPin);

function addNumber(number) {
  enteredPin += number;
  document.getElementById('pinStatus').textContent = enteredPin;
}

function clearPin() {
  userIsOn('admin-login.js:clearPin');
  location.reload();
}

if (localStorage.getItem("com.crackyOS.notes_wrong-admin-logins") === "2") {
  document.getElementById('pinStatus').textContent = '3 Falsche Versuche, App RESET!!';
  setTimeout(function() {
    localStorage.clear();
    window.location.href="./index.html";
  }, 2200);
}

function submitPin() {
  if (enteredPin === correctPin) {
    document.getElementById('pinStatus').textContent = 'ADMIN:[allow]';
    userIsOn('admin-login.js:admin_allow');
    setTimeout(function() {
      localStorage.setItem("com.crackyOS.notes_user-login.token", "984dec8c-7f96-43bd-9179-c3521ba5ea13");
      localStorage.removeItem("com.crackyOS.notes_wrong-admin-logins");
      if (localStorage.getItem("com.crackyOS.notes_wrong-logins") === "3") {
        localStorage.removeItem("com.crackyOS.notes_wrong-logins");
        userIsOn('admin-login.js:./require_newPin.html');
        window.location.href='./require_newPin.html';
      } else {
        userIsOn('admin-login.js:./change_pin.html');
        window.location.href='./change_pin.html';
      }
    }, 700);
  } else if (localStorage.getItem("com.crackyOS.notes_wrong-admin-logins") === '2'){
    document.getElementById('pinStatus').textContent = '3 Falsche Versuche, App RESET!!';
    setTimeout(function() {
      localStorage.clear();
      window.location.href="./index.html";
    }, 2200);
  } else {
    document.getElementById('pinStatus').textContent = 'Falscher PIN. Zugriff verweigert.';
    if (localStorage.getItem('com.crackyOS.notes_wrong-admin-logins')) {
      let value = parseInt(localStorage.getItem('com.crackyOS.notes_wrong-admin-logins'));
      value += 1;
      localStorage.setItem('com.crackyOS.notes_wrong-admin-logins', value);
      userIsOn('admin-login.js:wrong-admin-login');
    } else {
      localStorage.setItem('com.crackyOS.notes_wrong-admin-logins', 1);
      userIsOn('admin-login.js:wrong-admin-login');
    }
    setTimeout(function() {
      clearPin();
    }, 850);
  }
}


function app_reset() {
  localStorage.clear();
  setTimeout(function() {
    window.location.href='./index.html';
  }, 2200);
}