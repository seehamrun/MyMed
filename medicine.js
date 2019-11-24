// Map of medicine name to the medicine properties
// https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
currentMedicine = {}

defaultMedicine = {
	"Amoxicillin" : {
		"what": "This medication is a penicillin type antibiotic",
		"treats": "bacterial infections",
		"how": "stops the growth of bacteria",
		"usage": "Take this medication by mouth with or without food as " +
				 "directed by your doctor, usually every 8 hours.",
	}, 
	"Ibuprofen" : {
		"what": "What Ibuprofen is for",
		"treats": "what Ibuprofen treats",
		"how": "how Ibuprofen treats it",
		"usage": "how to take Ibuprofen"
	},
	"Insulin" : {
		"what": "What Insulin is for",
		"treats": "what Insulin treats",
		"how": "how Insulin treats it",
		"usage": "how to take Insulin"
	}
}

function loadMedicine() {
	// read from localstorage, if there is nothing there, load the defaults
	currentMedicineData = JSON.parse(window.localStorage.getItem('medicine'));
	if(currentMedicineData == null) {
		currentMedicine = defaultMedicine
	} else {
		currentMedicine = currentMedicineData
	}

	console.log(currentMedicine);
}

function getMedicine() {
	return currentMedicine;
}

function getMedicineInfo(medicine) {
	return currentMedicine[medicine];
}

function getMedicineCount() {
	return Object.keys(currentMedicine).length
}

function addNewMedicine(medName, medProperties) {
	currentMedicine[medName] = medProperties
	savestate("medicine", currentMedicine)
}

function deleteMedicine() {
	// delete from local storage
}


// Saves the passed data to a localStorage key as JSON.
function savestate(name, state) {
	window["localStorage"].setItem(name, JSON.stringify(state));
}