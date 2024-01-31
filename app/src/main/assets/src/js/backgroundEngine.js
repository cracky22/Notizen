document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("com.crackyOS.notes_background") === "default") {
        userIsOn('backgroundEngine.js:default');
        document.body.style.backgroundImage = "linear-gradient(130deg, rgb(63, 81, 181), rgb(132, 168, 250), rgba(219, 238, 176, 0.699), rgba(179, 255, 0, 0.712))";


    } else if (localStorage.getItem("com.crackyOS.notes_background") === "white") {
        userIsOn('backgroundEngine.js:white');
        document.body.style.backgroundColor = "white";


    } else if (localStorage.getItem("com.crackyOS.notes_background") === "blue") {
        userIsOn('backgroundEngine.js:blue');
        document.body.style.backgroundColor = "#313f8e";
        document.body.style.color = "white";


    } else if (localStorage.getItem("com.crackyOS.notes_background") === "gray") {
        userIsOn('backgroundEngine.js:gray');
        document.body.style.backgroundColor = "#373737";
        document.body.style.color = "white";
        

    } else if (localStorage.getItem("com.crackyOS.notes_darkmode") === "true") {
        userIsOn('backgroundEngine.js:darkmode');
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
});


function set_background_default() {
    localStorage.setItem("com.crackyOS.notes_background", "default");
    localStorage.setItem("com.crackyOS.notes_darkmode", "false");
    userIsOn('design.html:default');
    setTimeout(function() {
        location.reload();
    }, 180);
}

function set_background_white() {
    localStorage.setItem("com.crackyOS.notes_background", "white");
    localStorage.setItem("com.crackyOS.notes_darkmode", "false");
    userIsOn('design.html:white');
    setTimeout(function() {
        location.reload();
    }, 180);
}

function set_background_blue() {
    localStorage.setItem("com.crackyOS.notes_background", "blue");
    localStorage.setItem("com.crackyOS.notes_darkmode", "false");
    userIsOn('design.html:blue');
    setTimeout(function() {
        location.reload();
    }, 180);
}

function set_background_gray() {
    localStorage.setItem("com.crackyOS.notes_background", "gray");
    localStorage.setItem("com.crackyOS.notes_darkmode", "false");
    userIsOn('design.html:gray');
    setTimeout(function() {
        location.reload();
    }, 180);
}


var cron = document.createElement('script');
cron.src = './src/js/cron.js';
document.head.appendChild(cron);