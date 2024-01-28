function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function set_random_pinRemember_char() {
    let randomInt = getRandomInt(3, 9);
    localStorage.setItem("com.crackyOS.notes_remember-after", randomInt);
}


if (localStorage.getItem("com.crackyOS.notes_pinRemember") === "randomized") {
    if (localStorage.getItem("com.crackyOS.notes_logins") == localStorage.getItem("com.crackyOS.notes_remeber-after")) {
        localStorage.setItem("com.crackyOS.notes_user-login.token", 0);
        localStorage.setItem("com.crackyOS.notes_logins", 1);
        set_random_pinRemember_char();
        window.location.href = './auth.html';
    }
}