// A single day, in milliseconds
const dayInMillis = 1000 * 60 * 60 * 24;
// False Idol's Length, in milliseconds
const falseIdolLen = 274758;

// New Year's day of next year
const newYears = new Date("Jan 1 2024").setFullYear(new Date().getFullYear() + 1);
// This or next year's Christmas
var christmas = new Date("Dec 25 2023").setFullYear(new Date().getFullYear());
// Finally, the current date
var currentDate = new Date();

// If it's between Christmas and New Years, set Christmas to next one
if (currentDate > (christmas + dayInMillis) && currentDate < newYears)
    christmas = new Date("Dec 25 2023").setFullYear(new Date().getFullYear() + 1);

// Initialization Function
function init()
{
    updateTimer(); // Call once on load
    setInterval(updateTimer, 100); // Then, repeatedly call every 100ms
    hideIntroAnim();
}

// Start the webpage load animation
function hideIntroAnim()
{
    var box = document.getElementById("load-animation");
    box.style.transform = "translateY(100%)";
    box.style.opacity = 0.75;
}

// Update the timer and page
function updateTimer()
{
    // The current time and date
    currentDate = new Date();

    // HTML elements
    const ticker = document.getElementById("timer-ticker");
    const christmasText = document.getElementById("christmas-text");

    // False Idol Plays until Christmas
    var playsLeft = (christmas - currentDate) / falseIdolLen;

    // Round to 3 digits if under 100, 2 digits if under 1000, otherwise just 1 digit
    // We need the ".xxx5" numbers to make the digits switch at the right time :)
    // (Otherwise, there's a special case where the digits are one higher than they should be)

    if (playsLeft <= 100 - .0005)
        playsLeft = playsLeft.toFixed(3);

    else if (playsLeft <= 1000 - .005)
        playsLeft = playsLeft.toFixed(2);

    else
        playsLeft = playsLeft.toFixed(1);

    // Not Christmas yet
    if (playsLeft > 0)
    {
        ticker.innerHTML = playsLeft;
        christmasText.style.opacity = 0;
    }

    // Is Christmas!
    else
    {
        ticker.innerHTML = "0";
        christmasText.style.opacity = 1;
    }
}
