const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
popupTitle = popupBox.querySelector("header p"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli",
              "August", "September", "Oktober", "November", "Dezember"];
const notes = JSON.parse(localStorage.getItem("com.crackyOS.notes_data") || "[]");
userIsOn('notes.js:getNoteArray');
let isUpdate = false, updateId;

addBox.addEventListener("click", () => {
    popupTitle.innerText = "Erstelle eine Notiz";
    addBtn.innerText = "Notiz hinzufügen";
    popupBox.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
    if(window.innerWidth > 660) titleTag.focus();
});

function add() {
    popupTitle.innerText = "Erstelle eine Notiz";
    addBtn.innerText = "Notiz hinzufügen";
    popupBox.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
    if(window.innerWidth > 660) titleTag.focus();
    userIsOn('notes.js:add');
};

closeIcon.addEventListener("click", () => {
    isUpdate = false;
    titleTag.value = descTag.value = "";
    popupBox.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
    userIsOn('notes.js:close');
});

function showNotes() {
    userIsOn('notes.js:showNotes');
    if(!notes) return;
    document.querySelectorAll(".note").forEach(li => li.remove());
    notes.forEach((note, id) => {
        let filterDesc = note.description.replaceAll("\n", '<br/>');
        let liTag = `<li class="note">
                        <div class="details">
                            <p>${note.title}</p>
                            <span>${filterDesc}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                    <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}')"><i class="uil uil-pen"></i>Bearbeiten</li>
                                    <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Löschen</li>
                                </ul>
                            </div>
                        </div>
                    </li>`;
        addBox.insertAdjacentHTML("afterend", liTag);
        userIsOn('notes.js:loadNote(' + id + ')');
    });
}
showNotes();

function showMenu(elem) {
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != elem) {
            elem.parentElement.classList.remove("show");
        }
    });
}

function deleteNote(noteId) {
    userIsOn('notes.js:deleteNote(' + noteId + ')');
    notes.splice(noteId, 1);
    localStorage.setItem("com.crackyOS.notes_data", JSON.stringify(notes));
    showNotes();
    setTimeout(function() {
        if (localStorage.getItem("com.crackyOS.notes_auto-sync") === "true") {
            userIsOn('notes.js:noteDeleted(' + noteId + ')');
            syncNow();
        }
    }, 150);
}

function updateNote(noteId, title, filterDesc) {
    userIsOn('notes.js:updateNote(' + noteId + ')');
    let description = filterDesc.replaceAll('<br/>', '\r\n');
    updateId = noteId;
    isUpdate = true;
    addBox.click();
    titleTag.value = title;
    descTag.value = description;
    popupTitle.innerText = "Notiz aktualisieren";
    addBtn.innerText = "Notiz aktualisieren";
}

addBtn.addEventListener("click", e => {
    e.preventDefault();
    let title = titleTag.value.trim(),
    description = descTag.value.trim();

    if(title || description) {
        let currentDate = new Date(),
        month = months[currentDate.getMonth()],
        day = currentDate.getDate(),
        year = currentDate.getFullYear();

        let noteInfo = {title, description, date: `${day}. ${month} ${year}`}
        if(!isUpdate) {
            notes.push(noteInfo);
        } else {
            isUpdate = false;
            notes[updateId] = noteInfo;
        }
        localStorage.setItem("com.crackyOS.notes_data", JSON.stringify(notes));
        showNotes();
        closeIcon.click();
        userIsOn('notes.js:update');
    }
    setTimeout(function() {
        if (localStorage.getItem("com.crackyOS.notes_auto-sync") === "true") {
            syncNow();
        }
    }, 150);
});