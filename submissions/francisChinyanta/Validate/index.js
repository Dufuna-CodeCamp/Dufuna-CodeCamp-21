let submitForm = document.getElementById("validateForm"),
email = document.getElementById("email"),
password = document.getElementById("password"),
fullName = document.getElementById("fullName"),
phoneNumber = document.getElementById("phoneNumber"),
year = document.getElementById("year"),
gender = document.getElementById("gender"),
bio = document.getElementById("bio");

function required(field, event){
	if(field.value == ''){
		field.nextElementSibling.innerHTML = "This field is required";
		event.preventDefault();
		return false;
	} else {
		field.nextElementSibling.innerHTML = "";
		return true;
	}
}

function emailFieldValidation(event){
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(!email.value.match(emailRegex)){
		email.nextElementSibling.innerHTML = "Please enter a valid email";
		event.preventDefault();
		return false;
	} else {
		email.nextElementSibling.innerHTML = "";
		return true;
	}
	
}

function passwordValidation(event){
	let pwdRegex = /^[a-z0-9]+$/i;
	if(!password.value.match(pwdRegex)){
		password.nextElementSibling.innerHTML = "Please password must contain letters or numbers only";
		event.preventDefault();
		return false;
	} else if (!(password.value.length >= 8)){
		password.nextElementSibling.innerHTML = "Please password length must be equal to or greater than 8";
		event.preventDefault();
		return false;
	} else {
		password.nextElementSibling.innerHTML = "";
		return true;
	}
}

function yearValidation(event){
	let yearRegex = /^[0-9]{4}$/i;
	if(!year.value.match(yearRegex)){
		year.nextElementSibling.innerHTML = "Please enter a valid year";
		event.preventDefault();
		return false;
	} else{
		year.nextElementSibling.innerHTML = "";
		return true;
	}
}

function validateForm(e){
	required(email, e);
	required(password, e);
	required(fullName, e);
	required(phoneNumber, e);
	required(year, e);
	required(gender, e);
	required(bio, e);
	emailFieldValidation(e);
	passwordValidation(e);
	yearValidation(e);
	return true;
}
submitForm.addEventListener("submit", validateForm);
