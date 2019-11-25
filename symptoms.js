defaultSymptoms = {
  	"Heart Burn" : {"what": "Burning pain or discomfort in the upper chest and midchest, possibly involving the neck and throat, that may worsen when lying down.",
  									"causes": "Amoxicillin, Ibuprofen, Metformin"},
  	"Nausea" : {"what": "A queasy sensation including an urge to vomit.",
  							"causes": "Bethanechol, Bystolic"},
    "Hair Loss" : {"what": "Hair loss from the scalp or elsewhere on the body." ,
  								"causes": "Akineton, Metformin"}
}


knownSymptoms = {
		"Heart Burn" : {"what": "Burning pain or discomfort in the upper chest and midchest, possibly involving the neck and throat, that may worsen when lying down.",
  									"causes": "Amoxicillin, Ibuprofen, Metformin"},
  	"Nausea" : {"what": "A queasy sensation including an urge to vomit.",
  							"causes": "Bethanechol, Bystolic"},
    "Hair Loss" : {"what": "Hair loss from the scalp or elsewhere on the body." ,
  								"causes": "Akineton, Metformin"}, 
  	"Drowsiness" : {"what" : "Strong desire for sleep and feeling of drowsiness.", 
  									"causes" : "Abilify, Bystolic, Cloderm"},
 		"Fever" : {"what" : "A temporary increase in average body temperature of 98.6°F (37°C).", 
 								"causes" : "Ibuprofen, Metformin"},
  	"Headaches" : {"what" : "A painful sensation in any part of the head, ranging from sharp to dull, that may occur with other symptoms.", 
 								"causes" : "Amoxicillin, Bethanechol, Clarinex, Insulin"},
  	"Constipation" : {"what" : "Infrequent bowel movements, and small, hard-to-pass, stool.", 
 								"causes" : "Akineton, Bethanechol"},
  	"Skin Rash" : {"what" : "Temporary outbreak of red, bumpy, scaly, or itchy patches of skin, possibly with blisters or welts.", 
 								"causes" : "Cloderm, Insulin"},
  	"Diarrhea" : {"what" : "Loose, watery bowel movements that may occur frequently and with a sense of urgency.", 
 								"causes" : "Bethanechol, Bystolic, Metformin"},
  	"Dry Mouth" : {"what" : "An unusually dry mouth, often caused by medication.", 
 								"causes" : "Clarinex"},
  	"Insomnia" : {"what" : "Persistent problems falling and staying asleep.", 
 								"causes" : "Akineton, Bethanechol, Bystolic"}
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
