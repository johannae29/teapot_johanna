
/*--- Function to check username and password ---*/
function signinForm(){
	//console.log("i signinForm");
	let username = document.getElementById("uname").value;
	let password = document.getElementById("psw").value;
	
	//console.log("i signinForm" + username + password);

	if(username == "Johanna" && password == "password"){
		
		//console.log("inuti if");
		setCookie("username", username, 7);

		window.location.href = "feed.html";
		return false; //vill inte att formuläret ska submitta efter som jag använder location.href

	} else {
		//console.log("inuti else");
		let signinErrorMsg = document.getElementById("signin-error-msg");

		signinErrorMsg.style.opacity = 1;
		return false;
	}
	return false;
} 

/*--- Function to set cookie ---*/
function setCookie(cname,cvalue,exdays) {
	var d = new Date();
  	d.setTime(d.getTime() + (exdays*24*60*60*1000));
  	var expires = "expires=" + d.toGMTString();

	//console.log("set cookie" + cvalue);

  	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Strict;";

	//console.log(document.cookie);
}

/*--- Function to set cookie with username ---*/
function setUsername() {
  var user=getCookie("username");

  if (user != "") {
    document.getElementById("myName").innerHTML = user;
  } else {
     window.location.href = "index.html";
  }
}

/*--- Function to get username from cookie ---*/
function getCookie(username){

	let name = username + "=";
	//console.log("Användarnamn " + name);

	var ca = document.cookie.split(';');
	
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

/*--- Function to remove cookie when logout ---*/
function logout(){
	console.log("i logout ");
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Strict;";

	//console.log(document.cookie);
	return false;
}


/*--- send email ---*/
function sendForm(){



}


