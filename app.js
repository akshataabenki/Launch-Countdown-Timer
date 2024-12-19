const textDays = document.getElementById('days');
const textHours = document.getElementById('hours');
const textMinutes = document.getElementById('minutes');
const textSeconds = document.getElementById('seconds');

const timeToDate = setInterval(function () {
    let date= new Date("January 01, 2025 00:00:00").getTime();
    let today = new Date().getTime();
    let leftTime = date - today;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;


    let leftDays = Math.floor(leftTime / days);
    let leftHours = Math.floor((leftTime % days) / hours);
    let leftMinutes = Math.floor((leftTime % hours) / minutes);
    let leftSeconds = Math.floor((leftTime % minutes) / seconds);

    leftHours = leftHours < 10 ? "0" + leftHours : leftHours;
    leftMinutes = leftMinutes < 10 ? "0" + leftMinutes : leftMinutes;
    leftSeconds = leftSeconds < 10 ? "0" + leftSeconds : leftSeconds;
    

    textDays.innerHTML = `${leftDays}`;
    textHours.innerHTML = `${leftHours}`;
    textMinutes.innerHTML = `${leftMinutes}`;
    textSeconds.innerHTML = `${leftSeconds}`;
}, 1000);