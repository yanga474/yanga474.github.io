// function check(){

// var question1 = document.quiz.question1.value;
// var question2 = document.quiz.question2.value;
// var question3 = document.quiz.question3.value;
// var question4 = document.quiz.question4.value;

// var correct = 0; 

// if (question1 == "Canberra") {
// 	correct++;
// }

// if (question2 == "Finland") {
// 	correct++;
// }

// if (question3 == "Ottawa") {
// 	correct++;
// }

// if (question4 == "Hawaii") {
// 	correct++;
// }
	
// document.getElementById("after_submit").style.visibility = "visible";
// document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

// }


var myinputs = document.querySelectorAll("input");
console.log (myinputs)

for (var i = 0; i < myinputs.length; i++) {
	console.log(i);
	myinputs[i].addEventListener("click", onInputClick);

}

function onInputClick(e) {
	e.target.
}