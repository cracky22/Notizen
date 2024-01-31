function logIdle() {
    var now = new Date();
    var seconds = now.getSeconds();
    if (seconds === 5 || seconds === 10 || seconds === 15 || seconds === 20 || seconds === 25 || seconds === 30 || seconds === 35 || seconds === 40 || seconds === 45 || seconds === 50 || seconds === 55 || seconds === 60) {
        userIsOn("cron.js:[" + seconds + "]");
    }
}

var timer = setInterval(logIdle, 1000);