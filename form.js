// Question 4

let submit = document.getElementById('submit');
let password = document.getElementById('pass');
let username = document.getElementById('user');
submit.addEventListener('click', trunk);
function trunk() {
	console.log(username)
	if (password.value == '12345678' && username.value.length < 14) {
		document.getElementById('in').innerHTML = 'Great job on knowing your username and password!'
	}else {
		alert('Incorrect username or password')
	}
}