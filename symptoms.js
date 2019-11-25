defaultSymptoms = {
  	"Heart Burn" : {},
  	"Nausea" : {},
    "Hair Loss" : {}
}

currentSymptoms = {}

function loadMySymptoms() {
	// read from localstorage, if there is nothing there, load the defaults
	currentSymptomData = JSON.parse(window.localStorage.getItem('symptoms'));
	if(currentSymptomData == null) {
		currentSymptoms = defaultSymptoms
	} else {
		currentSymptoms = currentSymptomData
	}
	console.log(currentSymptoms);
}

function getSymptoms() {
	return currentSymptoms
}

function addSymptom(symptom){
	currentSymptoms[symptom] = {}
	save("symptoms", currentSymptoms)
}

function deleteSymptom(symptom){
	delete currentSymptoms[symptom]
	save("symptoms", currentSymptoms)
}

// Saves the passed data to a localStorage key as JSON.
function save(name, state) {
	window["localStorage"].setItem(name, JSON.stringify(state));
}
