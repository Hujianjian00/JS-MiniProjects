const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const mins1 = document.getElementById("mins");
const secs1 = document.getElementById("secs");

const MyBirthday = "27 March 2022";
function countdown() {
    const MyBirthdayDate = new Date(MyBirthday);
    const currentDate = new Date()

    const totalSecs = (MyBirthdayDate - currentDate) / 1000;

    console.log(totalSecs);

    const days = Math.floor(totalSecs / 3600 / 24);
    const hours = Math.floor(totalSecs / 3600) % 24;
    const mins = Math.floor(totalSecs / 60) % 60;
    const secs = Math.floor(totalSecs) % 60;

    days1.innerHTML = days;
    hours1.innerHTML = formatDate(hours);
    mins1.innerHTML = formatDate(mins);
    secs1.innerHTML = formatDate(secs);

}

function formatDate(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000)