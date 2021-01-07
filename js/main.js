
/*--- Function to check username and password ---*/
function signinForm(){
	//console.log("i signinForm");
	let username = document.getElementById("uname").value;
	let password = document.getElementById("psw").value;
	
	//console.log("i signinForm" + username + password);

	if(username == "Johanna" && password == "password"){
		
		//console.log("inuti if");
		setCookie("username", username, 7);

		window.location.href = "feed.html";//sätter location till feed.html
	} else {
		//console.log("inuti else");
		let signinErrorMsg = document.getElementById("signin-error-msg");

		signinErrorMsg.style.opacity = 1; //gör felmeddelandet synligt
	}
} 

/*--- Function to set cookie ---*/
function setCookie(cname,cvalue,exdays) {
	let d = new Date(); //hämtar aktuell tid
  	d.setTime(d.getTime() + (exdays*24*60*60*1000)); //sätter giltighetstid i d, 7 dagar framåt
  	let expires = "expires=" + d.toGMTString(); //skapar en sträng som innehåller expires=<tid i GMT>

	//console.log("set cookie" + cvalue);

  	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Strict;"; //sätter cookie till en sträng 

	//console.log(document.cookie);
}

/*--- Function to set cookie with username ---*/
function setUsername() {
  let user=getCookie("username");//hämtar värdet på username cookie

  if (user != "") {
    document.getElementById("myName").innerHTML = user;//sätter myName att innehålla värdet i user
  } else {
     window.location.href = "index.html";//redirect till index.html om user saknar värde
  }
}

/*--- Function to get value from cookie ---*/
function getCookie(cookieName){

	let name = cookieName + "=";
	//console.log("Användarnamn " + name);

	let ca = document.cookie.split(';');//delar upp alla cookies på sidan efter ;
	
	for(let i = 0; i < ca.length; i++) { //loopar igenom alla element i ca
		let c = ca[i];
		while (c.charAt(0) == ' ') { //tar bort mellanslag från början av strängen c
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) { //kollar om name finns först i strängen c
			return c.substring(name.length, c.length);//delar upp strängen c på längden av name och c för att returnera värdet
		}
	}
	return "";
}

/*--- Function to remove cookie when logout ---*/
function logout(){
	//console.log("i logout ");
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Strict;";
	//window.location.href = "index.html";
	//console.log(document.cookie);
	return true;
}


/*--- Filter in feed ---*/
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");

  if (c == "all"){
	c = "";
  }
  
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



