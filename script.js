let normalPassword = "1234";

function unlockPhone(){

let pass=document.getElementById("password").value;

if(pass===normalPassword){

showScreen("homeScreen");

}

else{

alert("Wrong Password");

}

}


function fingerprintLogin(){

document.getElementById("lockScreen").classList.remove("active");

document.getElementById("homeScreen").classList.add("active");

alert("Fingerprint Authenticated");

}


function faceUnlock(){

showScreen("homeScreen");

alert("Face recognized");

}


function showScreen(id){

document.querySelectorAll(".screen").forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}