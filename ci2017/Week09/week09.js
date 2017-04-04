// var wrapper = document.querySelector(".saranwrap");

// for (i = 0; i < 23; i++) {
// 	console.log(i);
// 	var divtoinsert = document.createElement("div");
// 	divtoinsert.classList.add("box", "divnumber" + i);
	

// 	// if (i % 2 === 0) {
// 	// 	divtoinsert.classList.add("hovered");
// 	// } 

// 	wrapper.appendChild(divtoinsert);
// }

// var allthedivs = document.querySelectorAll(".box");

// allthedivs.forEach(addlisteners);

// function addlisteners(thething, itsindex) {

// 	// console.log(thething);

// 	thething.addEventListener("click", toggle_state);
// 	thething.addEventListener("mouseenter", addhover);
// 	thething.addEventListener("mouseleave", removehover);

// } 


// function toggle_state(theevent) {
// 	if (this.classList.contains("active")) {
// 		this.classList.remove("active");
// 	}
// 	else this.classList.add("active");
// }

// function addhover(e) {
// 	this.classList.add("hovered");
// }

// function removehover(e) {
// 	this.classList.remove("hovered");
// }

console.clear();
const boms = document.getElementsByClassName("bom");
const booms = document.getElementsByClassName("booms");

setTimeout(() => {
    for (let i = 0; i < boms.length; i++) {
        boms[i].className += " hide";
    }
}, 2000);

setTimeout(() => {
    booms[0].className += " visible";
}, 2500);







