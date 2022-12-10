const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const second = document.querySelector(".second");

setInterval(() => {
	let timer = new Date();
	clockHour = String(timer.getHours()).padStart(2, 0);
	clockMin = String(timer.getMinutes()).padStart(2, 0);
	clockSec = String(timer.getSeconds()).padStart(2, 0);

	hour.innerText = clockHour;
	minutes.innerText = clockMin;
	second.innerText = clockSec;
}, 1000);
