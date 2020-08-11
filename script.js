

var score = 0;
var category;

var current_image = "";


var solved = false;

document.addEventListener('DOMContentLoaded', function() {
	
    newImage();
	
}, false);

//secret :)
$("#secret").on('click', function(){
	
	document.getElementById("secret").innerHTML = "DER ARMINATOR";
	
})

//choose new image
function newImage(){
	
	var new_image = current_image;
	
	while(new_image == current_image){
	
		if(Math.random() >= 0.5){
			//Stefan Raab
			
			new_image = "images/sraab/sraab" + randomInteger(1, 8) + ".jpg";
			category = "raab";
			
			
		} else {
			//Mario Barth
			
			new_image = "images/mbarth/mbarth" + randomInteger(1, 8) + ".jpg";
			category = "barth";
			
		}
	
	}
	
	console.log(new_image);
	
	current_image = new_image;
	
	document.getElementById("big-image").src = new_image;
		
}

//pressed the raab button
function pressRaab(){
	
	if(category == "raab") {
		
		document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + 1;
		document.getElementById("big-image").style.boxShadow = " 0 0 60px rgb(20, 255, 50)";
	
	} else {
		
		document.getElementById("big-image").style.boxShadow = " 0 0 60px rgb(255, 20, 50)";
		
	}
	
	setTimeout(clearGlow, 500);
	
	newImage();
	
}

//pressed the barth button
function pressBarth(){
	
	if(category == "barth") {
		
		document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + 1;
		document.getElementById("big-image").style.boxShadow = " 0 0 60px rgb(20, 255, 50)";
	
	} else {
		
		document.getElementById("big-image").style.boxShadow = " 0 0 60px rgb(255, 20, 50)";
		
	}
	
	setTimeout(clearGlow, 500);
	
	newImage();
	
}

function clearGlow(){
	
	document.getElementById("big-image").style.boxShadow = "";
	
	console.log("epic");
	
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}