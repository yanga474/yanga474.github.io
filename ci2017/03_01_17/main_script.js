var names = [
	"sam",
	"aditi",
	"someoneelse",
	"third person"
];

var numbers = [];

function make_array(howmany) {

	for(var i = 0; i < howmany; i ++) {
		numbers.push(random_round(0,100));
	}
	return(numbers);
}

function get_a_name(whichone) {
	var result = names[random_round(0,names.length)];
	return [result, Math.floor(Math.random()*100), "hello"];
	
	console.log("this result will never happen");

}



function random_round(max) {
	var range = max - min; 
	return Math.floor(math.random()*max);
}





function bogus(whichone) {
	var result = names[whichone];
}