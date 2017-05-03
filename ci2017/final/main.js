var morning = document.querySelector("#morning");
// console.log(morning)
var afternoon = document.querySelector("#afternoon");
// console.log(afternoon)
var night = document.querySelector("#night");

var home = document.getElementById("home");

var h1 = document.querySelector("h1");



afternoon.addEventListener("click", goWhite);
morning.addEventListener("click", goWhite);
night.addEventListener ("click", goWhite);

home.addEventListener("click", function(e){
	document.body.style.backgroundColor = "black";
	h1.style.color = "white";
})



function goWhite(e){
	var timeofday = (e.currentTarget.getAttribute("id"));

	var filtered = _.filter(audio, function(a) {
		return a.timeofday == timeofday
	});

	console.log(filtered);

	makeHTML(filtered);
	
	document.body.style.backgroundColor = "white";
	h1.style.color = "black";

}

function makeHTML (stufftoget){

	var holder = document.getElementById("holder");
	holder.innerHTML = "";

	for (var i = 0; i < stufftoget.length; i++) {
		var audio = stufftoget[i];

		var diffAudio = document.createElement("div");

		var audiotag = document.createElement("audio");
		audiotag.src = audio.audioSrc + ".mp3";
		audiotag.controls = "controls";
		audiotag.loop = true;
		diffAudio.appendChild(audiotag);

		// diffAudio.innerText = audio.audioSrc;
		holder.appendChild(diffAudio);

	}

}


	





