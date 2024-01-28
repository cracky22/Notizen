if (localStorage.getItem("com.crackyOS.notes_data") === "ée") {
    userIsOn('cloudWatchDog.js:createErrorNote');
    createErrorNote();
} else if (localStorage.getItem("com.crackyOS.notes_data") === "ée") {
    userIsOn('cloudWatchDog.js:createErrorNote');
    createErrorNote();
} else if (localStorage.getItem("com.crackyOS.notes_data") === null) {
    localStorage.removeItem("com.crackyOS.notes_data");
    localStorage.setItem("com.crackyOS.notes_data", "[]");
    userIsOn('cloudWatchDog.js:createEmptyArrey');
} else if (localStorage.getItem("com.crackyOS.notes_data") === "null") {
    localStorage.removeItem("com.crackyOS.notes_data");
    localStorage.setItem("com.crackyOS.notes_data", "[]");
    userIsOn('cloudWatchDog.js:createEmptyArrey');
} else if (localStorage.getItem("com.crackyOS.notes_data") === "") {
    localStorage.removeItem("com.crackyOS.notes_data");
    localStorage.setItem("com.crackyOS.notes_data", "[]");
    userIsOn('cloudWatchDog.js:createEmptyArrey');
} else {
    doNothing();
}

function doNothing() {
    //chill!
    setTimeout(function() {
        userIsOn('cloudWatchDog.js:doNothing');
    }, 500);
}

function createErrorNote() {
    localStorage.removeItem("com.crackyOS.notes_data");
    let noteContent = "[{\"title\":\"Interner Fehler\",\"description\":\"Lieber Nutzer, leider kam es zu einem internen Fehler der App. Bitte trete mit mir in Kontakt [cracky.ddns.net/feedback] und setze die App zurück (Einstellungen > App-Reset)\",\"date\":\"WTD CloudKit restore\"}]";
    localStorage.setItem("com.crackyOS.notes_data", noteContent);
    location.reload();
}