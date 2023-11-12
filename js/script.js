// Initialization Function
function init()
{
    updateTimer()
    setInterval(updateTimer, 200)
}

// This year's Christmas
const christmas = new Date("Dec 25 2023").setFullYear(new Date().getFullYear());

// A single day, in milliseconds
const dayInMillis = 60 * 60 * 24 * 1000;

// Timer Update Function
function updateTimer()
{
    // The current time
    var currentDate = new Date(new Date().setFullYear(2023)).getTime();

    // False Idol Plays until Christmas
    var playsUntilChristmas = (christmas - currentDate) / 274758; // False Idol Length in millis

    if (playsUntilChristmas < 1000)
    {
        playsUntilChristmas = playsUntilChristmas.toFixed(2)
    }
    else if (playsUntilChristmas < 100)
    {
        playsUntilChristmas = playsUntilChristmas.toFixed(3)
    }
    else
    {
        playsUntilChristmas = playsUntilChristmas.toFixed(1)
    }

    // Is it Christmas?
    var isChristmas = (currentDate - christmas) >= 0 && (currentDate - christmas < dayInMillis);

    document.getElementById("timer-ticker").innerHTML = playsUntilChristmas;
}
