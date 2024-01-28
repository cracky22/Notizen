function backup() {
    if (typeof localStorage !== 'undefined') {
    const savedNotes = localStorage.getItem('com.crackyOS.notes_data');

        if (savedNotes) {
            const notesContainer = document.createElement('p');
            notesContainer.textContent = savedNotes;
            const container = document.getElementById('notes-container');
            container.appendChild(notesContainer);
        }
    }
}

function copy() {
    const notesContainer = document.getElementById('notes-container');
    const text = notesContainer.textContent;
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    document.getElementById('notes-container').addEventListener('click', copyToClipboard);
    userIsOn('backup_restore.js:copy');
}


function restore() {
    const inputElement = document.getElementById('notes-input');
    const notes = inputElement.value;
    localStorage.setItem('com.crackyOS.notes_data', notes);
    userIsOn('backup_restore.js:restore');
    window.location.href='./index.html';
}

document.getElementById('notes-form').addEventListener('submit'), function(event) {
    event.preventDefault(); 
    restore();
}