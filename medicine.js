// Map of medicine name to the medicine properties
currentMedicine = {}

defaultMedicine = {
	"Amoxicillin" : knownMedicines["Amoxicillin"],
	"Ibuprofen" : knownMedicines["Ibuprofen"],
	"Insulin" : knownMedicines["Insulin"]
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