var morning = document.querySelector("#morning");
// console.log(morning)
var afternoon = document.querySelector("#afternoon");
// console.log(afternoon)
var night = document.querySelector("#night");

var home = document.getElementById("home");

var h1 = document.querySelector("h1");

var myplayer= document.getElementById("myplayer");

var container = document.getElementById("container");

container.style.display = "none";
myplayer.style.display = "none";




afternoon.addEventListener("click", goWhite);
morning.addEventListener("click", goWhite);
night.addEventListener ("click", goWhite);

home.addEventListener("click", function(e){
	document.body.style.backgroundColor = "black";
	h1.style.color = "white";
	myplayer.style.display = "none";
	container.style.display = "none";
	holder.style.display = "none";


})



function goWhite(e){
	var timeofday = (e.currentTarget.getAttribute("id"));
	console.log(timeofday);

	var title = document.getElementById("title");
	title.innerHTML = timeofday.charAt(0).toUpperCase() + timeofday.slice(1);


	var filtered = _.filter(audiodata, function(a) {
		return a.timeofday == timeofday
	});

	console.log(filtered);

	makeHTML(filtered);
	
	// document.body.style.backgroundColor = "#456789";
	// if timeofday 
	// h1.style.color = "black";

	if (timeofday == "morning") {
		document.body.style.backgroundColor = "#456789"; 
	} 
	if  (timeofday == "afternoon") {
		document.body.style.backgroundColor = "#234567";
	} 
	if  (timeofday == "night") {
		document.body.style.backgroundColor = "#012345";
	}


	myplayer.style.display = "inline-block";
	container.style.display = "block";
	holder.style.display ="inline-block";



}

function makeHTML (stufftoget){

	var holder = document.getElementById("audioHolder");
	holder.innerHTML = "";

	for (var i = 0; i < stufftoget.length; i++) {
		var audio = stufftoget[i];
		console.log(audio);

		var diffAudio = document.createElement("div");

		var audiotag = document.createElement("div");

		audiotag.innerHTML = audio.date + " " + audio.time; 

		

		audiotag.setAttribute("draggable", "true");

		bindDragStartListener(audiotag, audio.audioSrc);
		// audiotag.id = i; 

		// audiotag.src = audio.audioSrc + ".mp3";
		// audiotag.controls = "controls";
		// audiotag.loop = true;
		diffAudio.appendChild(audiotag);

		// diffAudio.innerText = audio.audioSrc;
		holder.appendChild(diffAudio);

	}

}

function bindDragStartListener(tag, src) {
	tag.addEventListener("dragstart", function(ev) {
		ev.dataTransfer.setData("text/plain", src + ".mp3");
	});
}

function dragover_handler(ev) {
 ev.preventDefault();
 // Set the dropEffect to move
 ev.dataTransfer.dropEffect = "move"
}

function drop_handler(ev) {
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 var data = ev.dataTransfer.getData("text");
 console.log(data);

document.getElementById("myplayer").setAttribute("src", data);



 // set the source attribute of the audiotag with the data from the drag event "set attribute js"
}



	





