var video;

window.addEventListener("load", function () {
	video = document.querySelector("#player1");
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("Autoplay is set to false")
	video.loop = false;
	console.log("Looping is set to false")
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerText = Math.round(video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9;
	console.log("Speed up video");
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
		console.log("Restarting video");
	} else {
		video.currentTime += 10;
		console.log("Skip ahead");
	}
	console.log("Current video time is ", video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		this.innerText = "Mute";
		console.log("Unmute");
	} else {
		video.muted = true;
		this.innerText = "Unmute";
		console.log("Mute");
	}
});

document.querySelector("#slider").addEventListener("input", function () {
	let newVolume = this.value / 100;
	video.volume = newVolume;
	console.log("The current value is ", newVolume);
	document.querySelector("#volume").innerText = Math.round(newVolume * 100) + "%";
	console.log(document.querySelector("#volume"));
});


document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log("Oldschool");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
	console.log("Remove oldschool");
});
