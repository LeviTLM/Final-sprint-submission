function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function startTimer() {
    globalStartTime = Date.now();
    globalIntervalId = setInterval(updateTime, 80);
}

function updateTime() {
    let now = Date.now();
    let diff = now - globalStartTime;
    let secondsPast = diff / 1000;
    let elTimerSpan = document.querySelector(".timer span");
    elTimerSpan.innerText = secondsPast.toFixed(3);
}

function resetTimer() {
    let elTimer = document.querySelector(".timer span");
    elTimer.innerText = "";
    if (globalIntervalId) clearInterval(globalIntervalId);
    globalStartTime = 0;
    globalIntervalId = 0;
}

function updateLives() {
    let elLive = document.querySelector(".live span");
    switch (globalGame.lives) {
        case 2:
            elLive.innerText = '❤️❤️'
            break;
        case 1:  
            elLive.innerText = '❤️'
            break;
        case 0:
            elLive.innerText = '💔'
        }
        
}

function getClassName(location) {
    let cellClass = "cell-" + location.i + "-" + location.j;
    return cellClass;
}

function chooseDifficulty(level) {
    globalLevel.size = level;
    switch (level) {
        case 4:
            globalLevel.mines = 2;
            break;
        case 8:
            globalLevel.mines = 12;
            break;
        case 12:
            globalLevel.mines = 30;
            break;
    }
    initGame();
}
