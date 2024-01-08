const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;

    let calseconds = Math.floor(timeDifference / 1000) % 60;
    let calminutes = Math.floor(timeDifference / 1000 / 60) % 60;
    let calhours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    let caldays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

    days.textContent = formatTime(caldays);
    minutes.textContent = formatTime(calminutes);
    hours.textContent = formatTime(calhours);
    seconds.textContent = formatTime(calseconds);
};

const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);
};

const targetDate = new Date("January 22, 2024 00:00:00");
countDown(targetDate);
