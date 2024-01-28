/*function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let minNumber = 45000;
let maxNumber = 85000;
let randomNumber = getRandomInt(minNumber, maxNumber);

if (localStorage.getItem("com.crackyOS.notes_auto-sync") === "true") {
  console.log("autosync true");
  setTimeout(function() {
    syncNow();
  }, randomNumber);
}
/**/


function syncNow() {
  userIsOn('autoSync.js:syncNow');
  let cloudKey = localStorage.getItem("com.crackyOS.notes_cloud-key");
  let notes = localStorage.getItem("com.crackyOS.notes_data");
  var enc_notes = btoa(notes);
  
  setTimeout(function () {
    const aktuellesDatumZeit = new Date();
    const aktuellesDatum = aktuellesDatumZeit.toLocaleDateString();
    const aktuelleZeit = aktuellesDatumZeit.toLocaleTimeString();
    lastSyncd = "Zuletzt: " + aktuellesDatum + " " + aktuelleZeit;
    localStorage.setItem("com.crackyOS.notes_lastSynced", lastSyncd);
    var url = 'https://cracky.ddns.net/services/apps/crackyOS/application/com.crackyOS.notes/cloudKit/backup.php?cloudKey=' + cloudKey + '&enc_notes=' + enc_notes;
    window.location.href = url;
  }, 800);
}