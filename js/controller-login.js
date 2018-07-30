var decl = [

	login = {
		username: document.getElementById("username"),
		passcode: document.getElementById("password"),
		username_status: document.getElementById("username-status"),
		lg_meter: document.getElementById("lg-meter"),
		passcode_status: document.getElementById("password-status"),
		lg_status_bar: document.getElementById("lg-status-bar"),
	},

	mood = {
	    mood1: "poor ☹",
	    mood2: "fair ☹",
	    mood3: "good ☺",
	    mood4: "strong ☻",
	    mood5: "Please Insert a number ☹",
	    special_mood: "☹"
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


var implementum = [
	{
		firstLetterToCaps: function(){
			
			decl[0].username.addEventListener("keyup", changeFirstLetterToUpper);

			function changeFirstLetterToUpper(){
				if (decl[0].username.value.length < 1) {
					decl[0].username.style.border = "1px solid #ccc"
					decl[0].lg_status_bar.style.display = "none";
					decl[0].username_status.style.display = "none";
				}else {
					if (decl[0].username.value.match(decl[3].symbol)) {
						decl[0].username_status.innerHTML = "Wrong password " + decl[1].special_mood;
						decl[0].lg_status_bar.style.display = "block";
						decl[0].username_status.style.display = "block";
						decl[0].lg_status_bar.innerHTML = "Username can contains letters and numbers and not specials symbols eg: Cainam01";

					}else{
						decl[0].lg_status_bar.style.display = "none";
						decl[0].username_status.style.display = "none";
						decl[0].username.value = decl[0].username.value.charAt(0).toUpperCase() + decl[0].username.value.slice(1).toLowerCase();
						decl[0].username.style.border = "2px solid green"
					}
				}
			}
		} 
	},

	{
		validatePassword: function(){

		decl[0].passcode.addEventListener("keyup", validateWrongPassword);
			function validateWrongPassword(){
				if (decl[0].passcode.value.length < 1) {
					decl[0].passcode.style.border = "1px solid #ccc";
					decl[0].lg_meter.style.display = "none";
					decl[0].lg_status_bar.style.display = "none";
					decl[0].passcode_status.innerHTML = "";
					decl[0].lg_meter.value = 0;
				}else{
					if (decl[0].passcode.value.match(decl[3].lower) || decl[0].passcode.value.match(decl[3].upper)
					|| decl[0].passcode.value.match(decl[3].symbol) || decl[0].passcode.value.match(decl[3].num))
					{
						decl[0].passcode_status.style.display = "block";
						decl[0].lg_meter.style.display = "block";
						decl[0].passcode.style.border = "2px solid #5d8ffc"
						decl[0].lg_status_bar.style.display = "none";
						decl[0].lg_meter.value = decl[2].primus;
						decl[0].passcode_status.innerHTML = "Password strength " + decl[1].mood1;
					}

					if ((decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].lower)) 
							|| (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].symbol)) 
 							|| (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].num)) 
 							|| (decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].symbol)) 
 							|| (decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].num)) 
							|| (decl[0].passcode.value.match(decl[3].num) && decl[0].passcode.value.match(decl[3].symbol))) 
					{
						decl[0].lg_meter.value = decl[2].secundus;
						decl[0].passcode_status.style.display = "block";
						decl[0].passcode.style.border = "2px solid #5d8ffc"
 						decl[0].passcode_status.innerHTML = "Password strength: "+ decl[1].mood2;
 						decl[0].lg_status_bar.style.display = "block";
 						decl[0].lg_status_bar.innerHTML = "Password must contains letters, number and special symbols eg: mama@HOME101";
					}

					if ((decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].symbol)) 
 							|| (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].num))
 							|| (decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].symbol) && decl[0].passcode.value.match(decl[3].num))
 							|| (decl[0].passcode.value.match(decl[3].num) && decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].symbol))) 
					{
						decl[0].lg_meter.value = decl[2].tertius;
						decl[0].passcode_status.style.display = "block";
						decl[0].passcode.style.border = "2px solid #5d8ffc"
						decl[0].passcode_status.innerHTML = "Password strength: "+ decl[1].mood3;
					}

					if (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].symbol) && decl[0].passcode.value.match(decl[3].num)) 
					{
						decl[0].lg_meter.value = decl[2].quartus;
 						decl[0].passcode_status.innerHTML = "Password strength: "+ decl[1].mood4;
 						decl[0].passcode.style.border = "2px solid green"

 						if (decl[0].passcode.value.length < 8) {
 							decl[0].passcode_status.style.display = "block";
 							decl[0].lg_status_bar.style.display = "block";
 							decl[0].passcode_status.style.color = "green";
 							decl[0].lg_status_bar.innerHTML = "Password Length must be atleast 8 characters"
 						}else{
 							decl[0].lg_status_bar.style.display = "none";
 						}
					}
				}
			}
		}
	}
];

decl[0].username.onfocus = function(){
	implementum[0].firstLetterToCaps();
};

decl[0].passcode.onfocus = function(){
	implementum[1].validatePassword();
};