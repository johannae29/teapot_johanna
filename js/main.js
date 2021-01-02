
/*--- Function to check username and password ---*/

function signinForm(){
	console.log("i signinForm");
	let username = document.getElementById("uname").value;
	let password = document.getElementById("psw").value;
	
console.log("i signinForm" + username + password);

	if(username == "Johanna" && password == "password"){
		
		setCookie(username);
		console.log("inuti if");
		window.location.href = "feed.html";
		
		return false; //vill inte att formuläret ska submitta efter som jag använder location.href

	} else {
		console.log("inuti else");
		let signinErrorMsg = document.getElementById("signin-error-msg");

		signinErrorMsg.style.opacity = 1;
		return false;
	}
} 


/*--- Function to set cookie with username ---*/
function setCookie(username){
	document.cookie = "username=username";
	console.log("set cookie" + username);
}









/*--- Function to get username from cookie ---*/
function getCookie(username){
	var name = username + "=";
	var c;

	if(c.indexOf(name) == 0){
		return c.substring(name.length, c.length);
	}

	return "";
}
