
function init() {
	document.getElementById("btn-start").onclick = function() {
		hideScreen("screen-1");
		showScreen("screen-2");
	};

	initButtons();
}

function initButtons() {
	// attempt to call dynamic function name did not work...
	document.querySelectorAll("#screen-2 button").forEach((element) => {
		element.onclick = function(){
			hideScreen("screen-2");
			screen2Answer(this.value);
		}
	});

	document.querySelectorAll("#screen-3 button").forEach((element) => {
		element.onclick = function(){
			hideScreen("screen-3");
			screen3Answer(this.value);
		}
	});
	
	document.querySelectorAll("#screen-4 button").forEach((element) => {
		element.onclick = function(){
			hideScreen("screen-4");
			screen4Answer(this.value);
		}
	});

	document.querySelector("#btn-screen-5").onclick = function(){
		hideScreen("screen-5");
		showScreen("screen-6");
	};

	document.querySelector("#btn-screen-6").onclick = function(){
		hideScreen("screen-6");
		showScreen("screen-7");
	};

	document.querySelector("#btn-screen-7").onclick = function(){
		hideScreen("screen-7");
		showScreen("screen-8");
	};

}

function clearScreen(screenId){
	document.getElementById(screenId).innerHTML = '';
}

function hideScreen(screenId){
	document.getElementById(screenId).hidden = true;
}

function showScreen(screenId){
	document.getElementById(screenId).hidden = false;
}


function screen2Answer(choice){
	let textList = [];
	switch (choice) {
		case "pigeon":
			textList.push("🐦 Un Pigeon!? WOW, ok, je ne m'attendais pas à ça.");
			textList.push("J'imagine que c'est pour ta capacité à faire des départs rapides en plus ta démarche stylée et non ton envie insatiable de grignoter sans arrêt.");
			textList.push("Je me demande ce que l'IA🤖  va penser de tout ca...");
			break;
		case "lion":
			textList.push("🦁 Un Lion, vraiment?");
			textList.push("tu te considère le roi de ton entourage? Probablement avec raison!");
			textList.push("oh oh, un instant, les premiers résultats de l'IA🤖  m'indique que ce serait plutôt ta crinière qui serait l'élément principal de ce choix. GrrrRRr!");
			break;
		case "ours":
			text = "";
			textList.push("🐻 Un Ours!");
			textList.push("Majestueux! Sauvage! grognon! poilue!");
			textList.push("l'IA🤖 approuve à 100% ici, nous avons une concordance parfaite!");
			break;
		case "cochon":
			textList.push("🐷 Oh.. Un cochon? ça doit être une erreur...");
			textList.push("Attention, l'I.A🤖 semble voir une concordance: allure sympatique, humeur joviale, grognements spontannés. J'imagine que ca doit être vrai.🤷‍♂️");
			textList.push("Il semble y avoir plus.. voyons voir.. oh! un faible pourcentage de ressemblance physique semble avoir été détecté! Je vais devoir revoir mon algorithme...🤔");
			break;
	}
	

	addAnswer("screen-2-answer", textList);
	addNextButton("screen-2-answer", "screen-3");
}

function screen3Answer(choice){
	let textList = [];
	switch (choice) {
		case "dragon":
			textList.push("🐉 🐲 Un Dragon! Je vois que nous avons à faire à un Alpha!");
			textList.push("Rugissant, chaud et épineux! Tout un spécimen.");
			textList.push("laisson l'IA🤖 déterminer ce que cela peut bien dire...");
			break;
		case "licorne":
			textList.push("🦄 Une Licorne! Délicat et puissant, une combinaison magique.");
			textList.push("Bon choix, mais MON Rudolph est encore meilleure qu'une licorne!");
			textList.push("l'IA🤖 ne risque pas d'apprécier ce différent...");
			break;
		case "rudolphe":
			textList.push("🦌 Rudolphe! Excellent choix!");
			textList.push("Je vois que tu connais bien tes créatures mythiques!");
			textList.push("L'IA🤖  risque de bien récompenser cette réponse.");
			break;
	}

	addAnswer("screen-3-answer", textList);
	addNextButton("screen-3-answer", "screen-4");
}

function screen4Answer(choice){
	let textList = [];
	switch (choice) {
		case "oreo":
			textList.push("Oreo! Pas mal, cela en dit beacoup sur toi.");
			textList.push("Un être qui passe du blanc au noir, gentil au vilain 🫢.");
			textList.push("Attention de ne pas te faire \"Cancel\" en choissisant blanc ou noir, les TikTokers ont la \"cancel culture\" facile!");
			break;
		case "pepites":
			textList.push("Pépites! Un grand classique.");
			textList.push("Tremper dans un bon verre de lait froid(ou chaud, en Jo 😉) un délice!");
			break;
		case "celebration":
			textList.push("Célébration! ah, quel délice!");
			textList.push("Le seul et unique biscuit surnommer le biscuit \"frustration\" par certain. Tellement il est bon, il peut balayer le sentiment de frustration.");
			textList.push("La légende dit que des parents en mangeait devant leurs enfants en leur disant qu'ils n'avaient pas le droit car ils n'étaient pas assez frustré...");
			textList.push("Histoire de fou 🤯 ca ne peut pas être vrai...");
			break;
	}

	addAnswer("screen-4-answer", textList);
	addNextButton("screen-4-answer", "screen-5");
}

function addAnswer(targetId, textList) {
	if(! Array.isArray(textList)){
		textList = [textList];
	}

	textList.forEach(text => {
		let element = document.createElement('p');
		element.textContent = text;
		document.getElementById(targetId).appendChild(element);
	});
}

function addNextButton(fromElId, toElId, label = "Suivant") {
	let nextButton = document.createElement('button');
	nextButton.setAttribute('class', 'button-green ');
	nextButton.textContent = label;
	nextButton.onclick = function(){
		hideScreen(fromElId);
		showScreen(toElId);
	}

	document.getElementById(fromElId).appendChild(nextButton);
}

init();


