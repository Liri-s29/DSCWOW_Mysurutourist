function getFormValues() {
    let ageGroup = document.querySelector('input[name="ageGroup"]:checked').value;
    let noOfTravelers = document.querySelector('input[name="noOfTravelers"]:checked').value;
    let schoolTrip = document.querySelector('input[name="schoolTrip"]:checked').value;
    let noOfDays = document.querySelector('input[name="days"]:checked').value;
    let religious = document.querySelector('input[name="religious"]:checked').value;
    console.log('age', ageGroup, noOfTravelers, schoolTrip, noOfDays, religious);
    document.getElementById("questions").style.display = "none";
    document.getElementById("results").style.display = "block";
    let places = getPlaces(noOfDays);
    for(let i = 0; i < places.length; i++) {
        document.getElementById(places[i]).style.display = "block";
    }
   
}

function getPlaces(noOfDays){
    let placeArray = [];
    if(noOfDays == "1"){
        placeArray.push('garden');
        placeArray.push('palace');
        placeArray.push('museum');
    }else if( noOfDays == "2"){
        placeArray.push('zoo');
        placeArray.push('garden');
        placeArray.push('palace');
        placeArray.push('museum');
    }
    else if( noOfDays == "3"){
        placeArray.push('lake');
        placeArray.push('zoo');
        placeArray.push('bird');
        placeArray.push('garden');
        placeArray.push('palace');
        placeArray.push('museum');
    }
    else if( noOfDays == "4"){
        placeArray.push('bylakuppe');
        placeArray.push('park');
        placeArray.push('bird');
        placeArray.push('lake');
        placeArray.push('coorg');
        placeArray.push('garden');
        placeArray.push('palace');
        placeArray.push('museum');
        placeArray.push('zoo');
    }
    return placeArray;
}
