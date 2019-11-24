// Map of medicine name to the medicine properties
currentMedicine = {}

defaultMedicine = {
	"Amoxicillin" : knowMedicines["Amoxicillin"],
	"Ibuprofen" : {
		"what": "What Ibuprofen is for",
		"treats": "what Ibuprofen treats",
		"how": "how Ibuprofen treats it",
		"usage": "how to take Ibuprofen",
		"notif": "off"
	},
	"Insulin" : {
		"what": "What Insulin is for",
		"treats": "what Insulin treats",
		"how": "how Insulin treats it",
		"usage": "how to take Insulin",
		"notif": "on"
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