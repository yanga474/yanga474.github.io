var alphabet = "abcdefghijklmnopqrstuvwxyz"; // a string full of letters
var letter_array = []; // make an empty array to store the letters

for(i = 0; i < alphabet.length; i++) {
		// for every letter in the string...

	letter_array.push(alphabet[i]); // ...add that letter to the array
}


// once that array's set up, you can use the cleaner "forEach" syntax to iterate through the array, calling a function with each element as an argument:
letter_array.forEach(make_a_div);

// then you have to define that "make_a_div" function:
function make_a_div(element, index) {
	// element = the individual list item (gets passed in automatically by forEach)
	// index = numerical index of this element in the array (ditto ^)


	var newdiv = document.createElement("div"); // make an empty div tag
	newdiv.classList.add("letter", "dim"); // add the class "letter" to it 

	var image = document.createElement("img") // make an empty img tag
	image.src = "images/asl_" + element + ".gif"; // set the source dynamically


	newdiv.id = element; // set the id of this div to match the letter


	newdiv.appendChild(image); // stick the image in the div
	document.querySelector(".saranwrap").appendChild(newdiv); // add the div to the wrapper on the page


}


// ok, now we need some interaction...
// this is the event listener from last class:
var textfield = document.querySelector("#enteredText");
var submitbutton = document.querySelector("#textSubmit");
submitbutton.addEventListener("click", do_stuff);


textfield.addEventListener("keydown", keyboard);

var lettersdiv = document.querySelectorAll(".letter");




 lettersdiv.forEach(
	function(element, index) {''

	element.addEventListener("mouseover", undim);
	element.addEventListener("mouseleave", redim);
	element.addEventListener("click", identify_letter);
 	});

 function identify_letter(event) {
 	var source = event.target.src;
 	var search = source.match(/asl_(.)/); 
 	letter_i_want = search[1];

 	event.target.parentElement.classList.add(letter_i_want);

 	document.querySelector(".output p.clickedletters").textContent += letter_i_want; 

 	console.log(letter_i_want);
 }



 function undim(event) {
 	var whichone = event.target.parentElement; 
 	whichone.classList.remove("dim");
 }

 function redim(event) {
 	var whichone = event.target; 
 	whichone.classList.add("dim");
 }

 




// function log_x_and_y(event){
// 	var	x = event.offsetX;
// 	var y = event.offsetY;

// 	document.querySelector(".output p.x").textContent = x;
// 	document.querySelector(".output p.y").textContent = y;
// 	document.querySelector(".output p.y").setAttribute("style","top:" + y + "px");

// 	}


var the_four_letters = [];

function keyboard(the_event){

	var input_string = textfield.value;

	for (var i = 0; i ,input_string.length; i++) {
		var found = document.querySelector("#" + input_string[i]);
		found.classList.remove("dim");
		// document.querySelector("")
	}

	// console.log(the_event.key);

	// var image_array=(document.querySelectorAll(".letter img"));

	// the_four_letters.push(the_event.key);

	// for (var i = 0; i < 4; i++) {
	// 	var the_file_i_want = "asl_" + the_four_letters[i] + ".gif";

	// 	if (typeof the_four_letters[i]=="undefined"){
	// 		image_array[i].classList.add("hidden");

	// 	}

		// console.log(image_array[i].classList.add);
		// image_array[i].src = "images/" + the_file_i_want;

		// console.log(the_file_i_want);
	}


function do_stuff() {
	var input_string = textfield.value;

	var the_four_letters = [];

	for (var counter = 0; counter < 4; counter++) {
		// console.log("this is loop #" + counter);
		the_four_letters.push(input_string.charAt(counter));
		// console.log(the_four_letters);
		// console.log("--- loop over! ---");
	}

	var image_array=(document.querySelectorAll(".letter img"));

	for (var i = 0; i < 4; i++) {
		var the_file_i_want = "asl_" + the_four_letters[i] + ".gif";

		image_array[i].src = "images/" + the_file_i_want;

		// console.log(the_file_i_want);
	}


	// console.log(the_four_letters);
	// console.log("-----------------");
	// console.log(input_string);	
	// console.log(input_string.charAt(0));

	
}