function userIsOn(value) {
    const date = new Date();
    const dateTime = date.toLocaleString();
    const data = {
        datetime: dateTime,
        userAgent: value
    };
    let storedData = localStorage.getItem('com.crackyOS.notes_analytics-data');
    let dataArray = [];
    if (storedData) {
        dataArray = JSON.parse(storedData);
    }
    dataArray.push(data);
    localStorage.setItem('com.crackyOS.notes_analytics-data', JSON.stringify(dataArray));
}


if (localStorage.getItem("com.crackyOS.notes_analytics") === "true") {

}