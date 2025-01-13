let enterName = document.querySelector("#myName")
let enterClock = document.querySelector("#myClock")

// Get the user's name and display it.
function getName() {
    let name = prompt("Lütfen isminizi giriniz!")
    if (name !== "") {
        enterName.textContent = name;
    } else {
        getName();
    }
}
getName()

// Function to display the time and day in enterClock
function showTime() {
    let currentTime = new Date();
    // For day
    let day = currentTime.getDay();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    let dayName = days[day];
    // For time
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    enterClock.textContent = `${hours}.${minutes}.${seconds} ${dayName}`;
}
showTime();

setInterval(showTime, 1000);