function logout() {
    localStorage.setItem("com.crackyOS.notes_user-login.token", "0");
    userIsOn('logout.js:logout');
    window.location.href='./index.html';
}