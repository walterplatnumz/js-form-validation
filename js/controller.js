implemeID = "";

var decl = [

	login_register = {
		username: document.getElementById("login-input-username"),
		passcode: document.getElementById("login-input-password"),

		firstname: document.getElementById("reg-input-firstname"),
		middlename: document.getElementById("reg-input-middlename"),
		lastname: document.getElementById("reg-input-lastname"),
		email: document.getElementById("reg-input-email"),
		password: document.getElementById("reg-input-password"),

		username_status: document.getElementById("login-status-username"),
		passcode_status: document.getElementById("login-status-password"),
		passcode_meter: document.getElementById("passcode-meter-bar"),
		login_status_bar: document.getElementById("login-status-bar")
	},

	mood = {
	    mood1: "Poor ☹",
	    mood2: "Fair ☹",
	    mood3: "Good ☺",
	    mood4: "Strong ☻",
	    mood5: "Please Insert a number ☹"
	},

	cainam = {
		primus: 1,
		secundus: 2,
		tertius: 3,
		quartus: 4
	},

	melan = {
		lower: /[a-z]/g,
		upper: /[A-Z]/g,
		symbol: /\W+/,
		num: /[0-9]/g
	}

];


// Calling functions to perform validation
decl[0].username.onfocus = function(){
	impleme[0].firstLetterToCapsLogin();
};

decl[0].passcode.onfocus = function(){
	impleme[1].validatePasswordLogin();
};


var impleme = [
	{
		firstLetterToCapsLogin: function(){
			
			decl[0].username.addEventListener("keyup", changeFirstLetterToUpper);

			function changeFirstLetterToUpper(){
				if (decl[0].username.value.length < 1) {
					decl[0].username.style.border = "1px solid #ccc"
				}else {
					decl[0].username.value = decl[0].username.value.charAt(0).toUpperCase() + decl[0].username.value.slice(1).toLowerCase();
					decl[0].username.style.border = "2px solid green"
				}
			}

		} 
	},

	{
		validatePasswordLogin: function(){

		decl[0].passcode.addEventListener("keyup", validateWrongPassword);
			function validateWrongPassword(){
				if (decl[0].passcode.value.length < 1) {
					decl[0].passcode.style.border = "1px solid #ccc";
					decl[0].passcode_meter.style.display = "none";
					decl[0].login_status_bar.style.display = "none";
					decl[0].passcode_status.innerHTML = "";
					decl[0].passcode_meter.value = 0;
				}else{
					if (decl[0].passcode.value.match(decl[3].lower) || decl[0].passcode.value.match(decl[3].upper)
					|| decl[0].passcode.value.match(decl[3].symbol) || decl[0].passcode.value.match(decl[3].num))
					{
						decl[0].passcode_status.style.display = "block";
						decl[0].passcode_meter.style.display = "block";
						decl[0].passcode.style.border = "2px solid #5d8ffc"
						decl[0].login_status_bar.style.display = "none";
						decl[0].passcode_meter.value = decl[2].primus;
						decl[0].passcode_status.innerHTML = "Strength " + decl[1].mood1;
					}

					if ((decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].lower)) 
							|| (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].symbol)) 
 							|| (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].num)) 
 							|| (decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].symbol)) 
 							|| (decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].num)) 
							|| (decl[0].passcode.value.match(decl[3].num) && decl[0].passcode.value.match(decl[3].symbol))) 
					{
						decl[0].passcode_meter.value = decl[2].secundus;
						decl[0].passcode_status.style.display = "block";
						decl[0].passcode.style.border = "2px solid #5d8ffc"
 						decl[0].passcode_status.innerHTML = "Strength: "+ decl[1].mood2;
 						decl[0].login_status_bar.style.display = "block";
 						decl[0].login_status_bar.innerHTML = "Password must contains letters, number and special symbols eg: mama@HOME101";
					}

					if ((decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].symbol)) 
 							|| (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].num))
 							|| (decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].symbol) && decl[0].passcode.value.match(decl[3].num))
 							|| (decl[0].passcode.value.match(decl[3].num) && decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].symbol))) 
					{
						decl[0].passcode_meter.value = decl[2].tertius;
						decl[0].passcode_status.style.display = "block";
						decl[0].passcode.style.border = "2px solid #5d8ffc"
						decl[0].passcode_status.innerHTML = "Strength: "+ decl[1].mood3;
					}

					if (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].symbol) && decl[0].passcode.value.match(decl[3].num)) 
					{
						decl[0].passcode_meter.value = decl[2].quartus;
 						decl[0].passcode_status.innerHTML = "Strength: "+ decl[1].mood4;
 						decl[0].passcode.style.border = "2px solid green"

 						if (decl[0].passcode.value.length < 8) {
 							decl[0].passcode_status.style.display = "block";
 							decl[0].login_status_bar.style.display = "block";
 							decl[0].passcode_status.style.color = "green";
 							decl[0].login_status_bar.innerHTML = "Password Length must be atleast 8 characters"
 						}else{
 							decl[0].login_status_bar.style.display = "none";
 						}
					}
				}
			}
		}
	}
];