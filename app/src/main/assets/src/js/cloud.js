function start_cloudKit() {
  userIsOn('cloud.js:start_cloudKit');
  stop_lanim();
  if (localStorage.getItem("com.crackyOS.notes_useCloud") == "false") {
    disableCloud();
  } else if (localStorage.getItem("com.crackyOS.notes_cloud-key") === null) {
    userIsOn('cloud.js:setup_cloud');
    generate_cloudKey();
    show("popup");
  } 
  cloudKey = localStorage.getItem("com.crackyOS.notes_cloud-key");
  document.getElementById("settKey").textContent = "Cloud-Key: " + cloudKey;
  lastSyncd = localStorage.getItem("com.crackyOS.notes_lastSynced");
  document.getElementById("syncStatus").textContent = lastSyncd;
}

function reset_cloud() {
  userIsOn('cloud.js:reset_cloud');
  document.body.style.backgroundImage = "";
  document.body.style.backgroundColor = '#db3e2a';
  cloudKey = localStorage.getItem("com.crackyOS.notes_cloud-key");
  localStorage.removeItem("com.crackyOS.notes_cloud-key");
  start_lanim();
  document.getElementById("settKey").textContent = "resetting cloudconfig...";
  setTimeout(function () {
    localStorage.removeItem("com.crackyOS.notes_useCloud");
    var url = 'https://cracky.ddns.net/services/apps/crackyOS/application/com.crackyOS.notes/cloudKit/backup.php?cloudKey=' + cloudKey + '&enc_notes=' + "W10="; 
    window.location.href = url;
  }, 1500);
}

function disableCloud() {
  userIsOn('cloud.js:disableCloud');
  document.body.style.backgroundImage = "";
  localStorage.removeItem("com.crackyOS.notes_cloud-key");
  localStorage.removeItem("com.crackyOS.notes_lastSynced");
  document.getElementById("settKey").textContent = "Cloud nicht eingerichtet";
  document.getElementById("syncStatus").textContent = "Cloud nicht eingerichtet";
  localStorage.setItem("com.crackyOS.notes_lastSynced", "Cloud nicht eingerichtet");
  localStorage.setItem("com.crackyOS.notes_auto-sync", "false");
  localStorage.setItem("com.crackyOS.notes_useCloud", "false");
  var autoSync = document.getElementById('auto-sync');
  autoSync.disabled = true
  var backupButton = document.getElementById('backupButton');
  backupButton.disabled = true
  var keyInput = document.getElementById('cloudKeyInput');
  keyInput.disabled = true
  var restoreButton = document.getElementById('restoreButton');
  restoreButton.disabled = true
  var animation = document.getElementById('animation');
  animation.classList.remove("animation");
  let autosync_checkbox = document.getElementById('auto-sync');
  autosync_checkbox.disabled = true
  let autosync_button = document.getElementById('autosync-button');
  autosync_button.disabled = true
  animation.classList.add("disabled");
  document.body.style.backgroundColor = '#e86a5a';
  hide("popup");
}

function generateRandomString(length) {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

function generate_cloudKey() {
  userIsOn('cloud.js:generate_cloudKey');
  const cloudKey = generateRandomString(6);
  localStorage.setItem("com.crackyOS.notes_cloud-key", cloudKey);
  document.getElementById("cloudKey").textContent = cloudKey;
  show("popup");
}

function close_and_copy() {
  userIsOn('cloud.js:close_and_copy');
  let cloudKeyElement = document.getElementById("cloudKey");
  let cloudKeyText = cloudKeyElement.textContent;
  let textarea = document.createElement("textarea");
  textarea.value = cloudKeyText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  hide("popup");
  localStorage.setItem("com.crackyOS.notes_auto-sync", "true");
  localStorage.setItem("com.crackyOS.notes_useCloud", "true");
  localStorage.setItem("com.crackyOS.notes_lastSynced", "Noch nicht Synchronisiert");
  syncNow();

  setTimeout(function() {
    location.reload();
  }, 150);
}

function start_lanim() {
  userIsOn('cloud.js:start_lanim');
  loadingBar.style.display = "block";
  spinningCircle.style.display = "block";
}

function stop_lanim() {
  userIsOn('cloud.js:stop_lanim');
  loadingBar.style.display = "none";
  spinningCircle.style.display = "none";
}

function syncNow() {
  userIsOn('cloud.js:syncNow');
  start_lanim();
  let cloudKey = localStorage.getItem("com.crackyOS.notes_cloud-key");
  let notes = localStorage.getItem("com.crackyOS.notes_data");
  var analyticsDataValue = notes
  var notesData_inBytes = new TextEncoder().encode(analyticsDataValue).length;
  var notesData_kb = notesData_inBytes / 1024;
  userIsOn('cloud.js:getData[' + notesData_kb.toFixed(2) + 'KB]');
  var enc_notes = btoa(notes);
  var enc_notesData = enc_notes
  var enc_notesData_inBytes = new TextEncoder().encode(enc_notesData).length;
  var enc_notesData_kb = enc_notesData_inBytes / 1024;
  userIsOn('cloud.js:enc_notes[' + enc_notesData_kb.toFixed(2) + 'KB]');
  

  document.body.style.backgroundImage = "";
  document.body.style.backgroundColor = '#4aed75';
  
  setTimeout(function () {
    stop_lanim();

    const aktuellesDatumZeit = new Date();
    const aktuellesDatum = aktuellesDatumZeit.toLocaleDateString();
    const aktuelleZeit = aktuellesDatumZeit.toLocaleTimeString();
    lastSyncd = "Zuletzt: " + aktuellesDatum + " " + aktuelleZeit;
    localStorage.setItem("com.crackyOS.notes_lastSynced", lastSyncd);
    document.getElementById("syncStatus").textContent = lastSyncd;
    var url = 'https://cracky.ddns.net/services/apps/crackyOS/application/com.crackyOS.notes/cloudKit/backup.php?cloudKey=' + cloudKey + '&enc_notes=' + enc_notes;
    document.body.style.backgroundColor = 'white'; 
    userIsOn('cloud.js:syncing...');
    window.location.href = url;
  }, 800);
}

function restore_from_cloud() {
  userIsOn('cloud.js:restore_from_cloud');
  start_lanim();
  document.body.style.backgroundImage = "";
  document.body.style.backgroundColor = '#6983e0';
  const inputField = document.getElementById('cloudKeyInput');
  const userCloudKey = inputField.value;

  if (localStorage.getItem("com.crackyOS.notes_cloud-key") !== userCloudKey) {
    userIsOn('cloud.js:input-key_!=_key');
    localStorage.setItem("com.crackyOS.notes_cloud-key", userCloudKey);
  }
  
  
  let script = document.getElementById('restoreScript');
  script.src = 'https://cracky.ddns.net/services/apps/crackyOS/application/com.crackyOS.notes/cloudKit/restore.php?cloudKey=' + encodeURIComponent(userCloudKey);
  let enc_notes = localStorage.getItem("enc_notes");
  let dec_notes = atob(enc_notes);
  localStorage.setItem("com.crackyOS.notes_data", dec_notes);

  if (localStorage.getItem('com.crackyOS.notes_restore-runtime')) {
    let value = parseInt(localStorage.getItem('com.crackyOS.notes_restore-runtime'));
    value += 1;
    localStorage.setItem('com.crackyOS.notes_restore-runtime', value);
  } else {
    localStorage.setItem('com.crackyOS.notes_restore-runtime', 1);
  }

  setTimeout(function () {
    let restore_runtime = localStorage.getItem("com.crackyOS.notes_restore-runtime");
    if (restore_runtime == 2) {
      document.body.style.backgroundColor = 'white';
      localStorage.removeItem("com.crackyOS.notes_restore-runtime");
      localStorage.removeItem("enc_notes");
      userIsOn('cloud.js:successfully_restored');
      stop_lanim();
      location.reload();
    } else {
      restore_from_cloud();
    }
  }, 1200);
}