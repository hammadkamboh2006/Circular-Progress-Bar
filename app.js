const circularProgress = document.querySelector(".circular-progress");
const progressValue = document.querySelector(".progress-value");
const text = document.querySelector(".text");

let progressStartValue = 0;
let progressEndValue = 100;
let speed = 100;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = progressStartValue + "%";
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
    text.textContent = "Loading...";

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
        text.innerHTML = `Successfully Load <i class="fa-solid fa-check-double"></i>`;
        text.classList.add("fade-in")
    }
}, speed);