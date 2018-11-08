var password = "зараза"

function password_verification() {
	var user_password = prompt("Введите пароль");

	if (user_password.toLowerCase() == password) {
		document.location.href ="Triss/Triss.html"		
	} else {
		alert("Не верный пароль.")
	}
}



