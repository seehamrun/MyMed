// Map of medicine name to the medicine properties
currentMedicine = {}

defaultMedicine = {
	"Amoxicillin" : Object.assign({}, knownMedicines["Amoxicillin"], {
		"notif": "on",
		"frequency": "3:day",
		"notifTimes": ['06:00', '14:00', '22:00']
	}),
	"Ibuprofen" : Object.assign({}, knownMedicines["Ibuprofen"], {
		"notif": "on",
		"frequency": "2:day",
		"notifTimes": ['8:00', '20:00']
	}),
	"Insulin" : Object.assign({}, knownMedicines["Insulin"], {
		"notif": "off",
		"frequency": "4:hour",
	}),
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

function deleteMedicine(medName) {
	// delete from local storage
	delete currentMedicine[medName]
	savestate("medicine", currentMedicine)
}


// Saves the passed data to a localStorage key as JSON.
function savestate(name, state) {
	window["localStorage"].setItem(name, JSON.stringify(state));
}