// Global variables
const time_el = document.querySelector(".watch .time");
const start_btn = document.querySelector("#start");
const stop_btn = document.querySelector("#stop");
const reset_btn = document.querySelector("#reset");

let seconds = 0;
let interval = null;

// Event listeners

start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

// Update the timer
function timer() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    // for 3 seconds or 6 minutes it becomes 03 seconds and 06 minutes respectively
    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    time_el.innerHTML = `${hrs}:${mins}:${secs}`; // from this place we are binding data to the UI
}

// Function for Start Button
function start() {
    if (interval) {
        return;
    }
    interval = setInterval(timer, 1000); // making the interval b\w 2 consecutive seconds 1000 mili second. 
}

// Function for Stop Button
function stop() {
    clearInterval(interval);
    interval = null;
}

// Function for Reset Button
function reset() {
    stop(); // reset button default feature to stop the timer first then change the innerHTML
    seconds = 0;
    time_el.innerHTML = "00:00:00";
}