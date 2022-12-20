
function clearScreen(screenId){
	document.getElementById(screenId).innerHTML = '';
}

function hideScreen(screenId){
	document.getElementById(screenId).hidden = true;
}

function showScreen(screenId){
	document.getElementById(screenId).hidden = false;
}

document.getElementById("btn-start").onclick = function() {
	hideScreen("screen-1");
	showScreen("screen-2");
};

document.querySelectorAll("#screen-2 > button").forEach((element) => {
	element.onclick = function(){
		screen2Answer(this.value)
	}
});

function screen2Answer(choice){
	switch (choice) {
		case "pigeon":
			
			break;
	
		default:
			break;
	}
}
