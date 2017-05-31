//Question 1

let button = document.getElementById('bt1');
button.addEventListener("click", one);
function one () {
	document.getElementById('speak').innerHTML = "I'm right!";
};

let butt = document.getElementById('bt2');
butt.addEventListener("click", two);
function two () {
	document.getElementById('speak').innerHTML = "No, I'm right!!";
};

// document.getElementsByTagName('button').addEventListener ('click', no);
// function no () {
// 	document.getElementById('speak').innerHTML += "I'm right!"
// //	document.getElementById('speak').innerHTML += "No I'm right!"

// };
