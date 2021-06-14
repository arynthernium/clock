function run() {
	var t = new Date();
	var hours = t.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}
	var minutes = t.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	var seconds = t.getSeconds();
	if (seconds < 10) {
		seconds = `0${seconds}`;
	};
	document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
	var day = t.getDate();
	if (day < 10) {
		day = `0${day}`;
	};
	var month = t.getMonth() + 1;
	if (month < 10) {
		month = `0${month}`;
	};
	document.getElementById('date').innerHTML = day + "/" + month + "/" + t.getFullYear();
};

window.onload = function () {
	setInterval(run, 100)
};