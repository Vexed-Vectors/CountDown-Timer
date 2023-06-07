const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const contest = "10 Jun 2023"
function countdown(){
    const contestDate = new Date(contest);
    const currentDate = new Date();
    const seconds = (contestDate - currentDate)/1000;
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600)%24;
    const minutes = Math.floor(seconds/60)%60;
    const secs = Math.floor(seconds%60);
    //console.log(days, hours, minutes, secs);

    daysEl.innerHTML = formatter(days);
    hoursEl.innerHTML = formatter(hours);
    minutesEl.innerHTML = formatter(minutes);
    secondsEl.innerHTML = formatter(secs);
}
function formatter(time){
    return time<10 ? `0${time}`:time;
}
countdown();

setInterval(countdown,1000);