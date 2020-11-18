function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

function getDistance(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
}

function getDistanceHint(distance) {
    if (distance < 20)
        return "Boiling hot! (Attempts left: " + remainingClicks + ")";
    else if (distance < 40)
        return "Really hot! (Attempts left: " + remainingClicks + ")";
    else if (distance < 80)
        return "Hot! (Attempts left: " + remainingClicks + ")";
    else if (distance < 160)
        return "Warm! (Attempts left: " + remainingClicks + ")";
    else if (distance < 320)
        return "Cold! (Attempts left: " + remainingClicks + ")";
    else if (distance < 640)
        return "Really Cold! (Attempts left: " + remainingClicks + ")";
    else
        return "Freezing! (Attempts left: " + remainingClicks + ")";
}

let height = 700;
let wigth = 700;
let remainingClicks = 30;
let clicks = 0;
let target = {
    x: getRandomNumber(wigth),
    y: getRandomNumber(height)
}

let imgClick = document.getElementById("map");
imgClick.onclick = function(event) {
    remainingClicks--;
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);

    let distanceSearch = document.getElementById("distance");
    distanceSearch.innerText = distanceHint;
    if (distance < 16) {
        alert("Found the treasure in " + clicks + " clicks!");
        location.reload();                
    }
    if (remainingClicks === 0) {
        alert("Try again!");
        location.reload();
    }
}
