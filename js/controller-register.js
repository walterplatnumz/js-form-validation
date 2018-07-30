var decl = [
	register = {
		firstname: document.getElementById("firstname"),
		middlename: document.getElementById("middlename"),
		lastname: document.getElementById("lastname"),
		email: document.getElementById("email"),
		phonecall: document.getElementById("phonecall"),
		passcode: document.getElementById("password"),
		firstname_status: document.getElementById("firstname-status"),
		middlename_status: document.getElementById("middlename-status"),
		lastname_status: document.getElementById("lastname-status"),
		email_status: document.getElementById("email-status"),
		phonecall_status: document.getElementById("phonecall-status"),
		passcode_status: document.getElementById("password-status"),
		reg_status_bar: document.getElementById("reg-status-bar"),
		rg_meter: document.getElementById("rg-meter"),
	},

	mood = {
	    mood1: "poor ☹",
	    mood2: "fair ☹",
	    mood3: "good ☺",
	    mood4: "Strong ☻",
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
		firstLetterToCaps: function(implemeID, status, rmsg, state_msg){

			implementumID = implemeID;
			statusID = status;
			alert_messege = rmsg;
			notification_message = state_msg;
			
			implementumID.addEventListener("keyup", changeFirstLetterToUpper);

			function changeFirstLetterToUpper(){
				if (implementumID.value.length < 1) {
					implementumID.style.border = "1px solid #ccc"
					decl[0].reg_status_bar.style.display = "none";
					statusID.style.display = "none";
				}else {
					if (implementumID.value.match(decl[3].symbol)) {
						statusID.innerHTML = alert_messege +" "+ decl[1].special_mood;
						decl[0].reg_status_bar.style.display = "block";
						statusID.style.display = "block";
						decl[0].reg_status_bar.innerHTML = notification_message;

					}else{
						statusID.style.display = "none";
						implementumID.value = implementumID.value.charAt(0).toUpperCase() + implementumID.value.slice(1).toLowerCase();
						implementumID.style.border = "2px solid green"
						decl[0].reg_status_bar.style.display = "none";
					}
				}
			}
		} 
	},

	{
		validateEmailAddress: function(){
		decl[0].email.addEventListener("keyup", validateEmailFormat);

			function validateEmailFormat(){
				var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

				if (decl[0].email.value.length < 1) {
					decl[0].reg_status_bar.style.display = "none";
					decl[0].email_status.style.display = "none";
					decl[0].email.style.border = "1px solid #ccc"
				}else{
					if (decl[0].email.value.match(email_format)) {
						decl[0].email_status.style.display = "none";
						decl[0].reg_status_bar.style.display = "none";
						decl[0].email_status.innerHTML = "";
						decl[0].email.style.border = "2px solid green"
					}else{
						// decl[0].email.style.border = "2px solid red"
						decl[0].reg_status_bar.style.display = "block";
						decl[0].reg_status_bar.innerHTML = "Email must contains @ eg: cainam@gmail.com";
						decl[0].email_status.style.display = "block";
						decl[0].email_status.innerHTML = "Wrong email format " + decl[1].special_mood;
					}
				}
			}
		}
	},

	{
		validatePhoneNumber: function(){
		decl[0].phonecall.addEventListener("keyup", validatePhonenumberFormat);

			function validatePhonenumberFormat(){
				var phonenumber_format = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

				if (decl[0].phonecall.value.length < 1) {
					decl[0].reg_status_bar.style.display = "none";
					decl[0].phonecall_status.style.display = "none";
					decl[0].phonecall.style.border = "1px solid #ccc"
				}else{

					if (decl[0].phonecall.value.startsWith("+")) {

						if (decl[0].phonecall.value.slice(1).match(decl[3].num)) {
							var intenational_format = /^\d{12}$/;
							decl[0].reg_status_bar.style.display = "none";
							if (decl[0].phonecall.value.slice(1).match(intenational_format)) {
							decl[0].phonecall_status.style.display = "none";
							decl[0].phonecall_status.innerHTML = "";
							decl[0].phonecall.style.border = "2px solid green"

								if (decl[0].phonecall.value >= 1) {
									decl[0].phonecall.value = "+(" + decl[0].phonecall.value.slice(1).substr(0, 3) + ') ' + decl[0].phonecall.value.slice(1).substr(3, 3) + '-' + decl[0].phonecall.value.slice(1).substr(6,4);
								}
							}else{
								decl[0].phonecall_status.style.display = "block";
								decl[0].reg_status_bar.style.display = "block";
								decl[0].reg_status_bar.innerHTML = "Enter phone number in this format: +255757870022";
								decl[0].phonecall_status.innerHTML = "Wrong Phonenumber "+decl[1].special_mood;
							}
						}else {
							decl[0].reg_status_bar.style.display = "block";
							decl[0].reg_status_bar.innerHTML = "Please type the number not letters eg: 0757870022";
							decl[0].phonecall_status.style.display = "block";
							decl[0].phonecall_status.innerHTML = "Wrong Phonenumber "+decl[1].special_mood;
						}

					}else if (decl[0].phonecall.value.startsWith("0")) {

						if (decl[0].phonecall.value.match(decl[3].num)) {
							decl[0].reg_status_bar.style.display = "none";
							if (decl[0].phonecall.value.match(phonenumber_format)) {
							decl[0].phonecall_status.style.display = "none";
							decl[0].phonecall_status.innerHTML = "";
							decl[0].phonecall.style.border = "2px solid green"

								if (decl[0].phonecall.value >= 1) {
									decl[0].phonecall.value = "(" + decl[0].phonecall.value.substr(0, 3) + ') ' + decl[0].phonecall.value.substr(3, 3) + '-' + decl[0].phonecall.value.substr(6,4);
								
								}
							}else{
								decl[0].phonecall_status.style.display = "block";
								decl[0].reg_status_bar.style.display = "block";
								decl[0].reg_status_bar.innerHTML = "Enter phonumber in this format: 0757870022";
								decl[0].phonecall_status.innerHTML = "Wrong Phonenumber "+decl[1].special_mood;
							}
						}else {
							decl[0].reg_status_bar.style.display = "block";
							decl[0].reg_status_bar.innerHTML = "Please type the number not letters eg: 0757870022";
							decl[0].phonecall_status.style.display = "block";
							decl[0].phonecall_status.innerHTML = "Wrong Phonenumber "+decl[1].special_mood;
						}
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
					decl[0].rg_meter.style.display = "none";
					decl[0].reg_status_bar.style.display = "none";
					decl[0].passcode_status.innerHTML = "";
					decl[0].rg_meter.value = 0;
				}else{
					if (decl[0].passcode.value.match(decl[3].lower) || decl[0].passcode.value.match(decl[3].upper)
					|| decl[0].passcode.value.match(decl[3].symbol) || decl[0].passcode.value.match(decl[3].num))
					{
						decl[0].passcode_status.style.display = "block";
						decl[0].rg_meter.style.display = "block";
						decl[0].passcode.style.border = "2px solid #5d8ffc"
						decl[0].reg_status_bar.style.display = "none";
						decl[0].rg_meter.value = decl[2].primus;
						decl[0].passcode_status.innerHTML = "Password strength: " + decl[1].mood1;
					}

					if ((decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].lower)) 
							|| (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].symbol)) 
 							|| (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].num)) 
 							|| (decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].symbol)) 
 							|| (decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].num)) 
							|| (decl[0].passcode.value.match(decl[3].num) && decl[0].passcode.value.match(decl[3].symbol))) 
					{
						decl[0].rg_meter.value = decl[2].secundus;
						decl[0].passcode_status.style.display = "block";
						decl[0].passcode.style.border = "2px solid #5d8ffc"
 						decl[0].passcode_status.innerHTML = "Password strength: "+ decl[1].mood2;
 						decl[0].reg_status_bar.style.display = "block";
 						decl[0].reg_status_bar.innerHTML = "Password must contains letters, number and special symbols eg: mama@HOME101";
					}

					if ((decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].symbol)) 
 							|| (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].num))
 							|| (decl[0].passcode.value.match(decl[3].lower) && decl[0].passcode.value.match(decl[3].symbol) && decl[0].passcode.value.match(decl[3].num))
 							|| (decl[0].passcode.value.match(decl[3].num) && decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].symbol))) 
					{
						decl[0].rg_meter.value = decl[2].tertius;
						decl[0].passcode_status.style.display = "block";
						decl[0].passcode.style.border = "2px solid #5d8ffc"
						decl[0].passcode_status.innerHTML = "Password strength: "+ decl[1].mood3;
					}

					if (decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].upper) && decl[0].passcode.value.match(decl[3].symbol) && decl[0].passcode.value.match(decl[3].num)) 
					{
						decl[0].rg_meter.value = decl[2].quartus;
 						decl[0].passcode_status.innerHTML = "Password strength: "+ decl[1].mood4;
 						decl[0].passcode.style.border = "2px solid green"

 						if (decl[0].passcode.value.length < 8) {
 							decl[0].passcode_status.style.display = "block";
 							decl[0].reg_status_bar.style.display = "block";
 							decl[0].passcode_status.style.color = "green";
 							decl[0].reg_status_bar.innerHTML = "Password Length must be atleast 8 characters"
 						}else{
 							decl[0].reg_status_bar.style.display = "none";
 						}
					}
				}
			}
		}

	}
];

decl[0].firstname.onfocus = function(){
	var red_message = "Wrong firstname";
	var status_msg = "Firstname can contains letters and numbers and not specials symbols eg: Cainam01";
	implementum[0].firstLetterToCaps(decl[0].firstname, decl[0].firstname_status, red_message, status_msg);
};

decl[0].middlename.onfocus = function(){
	var red_message = "Wrong middlename";
	var status_msg = "Middlename can contains letters and numbers and not specials symbols eg: Cainam01";
	implementum[0].firstLetterToCaps(decl[0].middlename, decl[0].middlename_status, red_message, status_msg);
};

decl[0].lastname.onfocus = function(){
	var red_message = "Wrong lastname";
	var status_msg = "Lastname can contains letters and numbers and not specials symbols eg: Cainam01";
	implementum[0].firstLetterToCaps(decl[0].lastname, decl[0].lastname_status, red_message, status_msg);
};

decl[0].email.onfocus = function(){
	implementum[1].validateEmailAddress();
};

decl[0].phonecall.onfocus = function(){
	implementum[2].validatePhoneNumber();
};

decl[0].passcode.onfocus = function(){
	implementum[3].validatePassword();
};