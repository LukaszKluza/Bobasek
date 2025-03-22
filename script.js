function checkDate() {
    const correctDate = "23-03-2003";
    const userInput = document.getElementById("dateInput").value;
    const countdownElement = document.getElementById("countdown");
    const errorText = document.getElementById("error");
    
    if (userInput === correctDate && countdownElement.innerHTML === "00:00:00") {
        window.location.href = "task_1.html";
    } else {
        errorText.style.display = "block";
    }
}

function checkAnswer(correctAnswer, nextTask) {
    const userAnswer = document.getElementById("answerInput").value;
    const errorText = document.getElementById("error");

    if (userAnswer === correctAnswer) {
        window.location.href = nextTask;
    } else {
        errorText.style.display = "block";
    }
}


function updateCountdown(targetDateString, timer) {
    const countdownElement = document.getElementById(timer);
    const targetDate = new Date(targetDateString).getTime();

    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    
    countdownElement.innerHTML = formattedTime;

    if (timeLeft <= 3600000) { 
        countdownElement.classList.add('warning');
    } else {
        countdownElement.classList.remove('warning');
    }

    if (timeLeft < 0) {
        countdownElement.innerHTML = "00:00:00";
    }
}

function updateCountdown_2(targetDateString, timer) {
    const countdownElement = document.getElementById(timer);
    const targetDate = new Date(targetDateString).getTime();

    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    
    countdownElement.innerHTML = "Czas do końca misji: " + formattedTime;

    if (timeLeft <= 3600000) { 
        countdownElement.classList.add('warning');
    } else {
        countdownElement.classList.remove('warning');
    }

    if (timeLeft < 0) {
        countdownElement.innerHTML = "00:00:00";
    }
}

function padZero(time) {
    return time < 10 ? '0' + time : time;
}

setInterval(function() {
    updateCountdown("March 23, 2025 00:00:00", "countdown");
}, 1000);

setInterval(function() {
    updateCountdown_2("March 24, 2025 00:00:00", "countdown_2");
}, 1000);
