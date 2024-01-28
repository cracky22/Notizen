function getAction() {
    var url = window.location.href;
    var command = /[\?&]action=([^&]+)/;
    var match = url.match(command);
    return match ? match[1] : null;
}

var action = getAction();
console.log(action);
setTimeout(function() {
    userIsOn(currentPage + '?action=' + action);
}, 500);