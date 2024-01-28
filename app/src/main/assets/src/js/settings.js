function design() {
  window.location.href="./design.html";
}

function cloud() {
  window.location.href = "./cloudKit.html";
}

function backup_restore() {
  window.location.href = "./backup_restore.html";
}

function change_pin() {
  window.location.href = "./change_pin.html";
}

function app_reset() {
  localStorage.clear();
  setTimeout(function () {
    window.location.href = "./first-run-wizard.html";
  }, 1.25);
}

function logout() {
    localStorage.setItem("com.crackyOS.notes_user-login.token", "0");
    window.location.href='./index.html';
}
