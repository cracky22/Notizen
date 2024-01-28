function check_if_auth_is_valid() {
  userIsOn('check.js:check_if_auth_is_valid');
    if (localStorage.getItem("com.crackyOS.notes_user-login.token") === "984dec8c-7f96-43bd-9179-c3521ba5ea13") {
        userIsOn('check.js:auth_is_valid');
        console.log("session valid!");   
    } else if (localStorage.getItem("com.crackyOS.notes_user-login.token") === "0") {
        window.location.href = './auth.html';
        userIsOn('check.js:auth_is_invalid');
      } else {
        window.location.href = './auth.html';
        userIsOn('check.js:else[authERR]');
      }
}