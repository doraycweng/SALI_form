var steps = document.querySelectorAll(".step-3");
steps[0].classList.add('current-step');

function moveToStep2(){
    var contactSection = document.querySelector("#contact");
    var courseSection = document.querySelector("#course");
    var steps = document.querySelectorAll(".step-3");

    contactSection.style.display = "none";
    courseSection.style.display = "block";
    steps[0].classList.remove('current-step');
    steps[0].classList.add('complete-step');
    steps[1].classList.add('current-step');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function backToStep1(){
    var contactSection = document.querySelector("#contact");
    var courseSection = document.querySelector("#course");
    var steps = document.querySelectorAll(".step-3");
    contactSection.style.display = "block";
    courseSection.style.display = "none";
    steps[0].classList.remove('complete-step');
    steps[0].classList.add('current-step');
    steps[1].classList.remove('current-step');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function moveToStep3(){
    var sessionSection = document.querySelector("#session");
    var courseSection = document.querySelector("#course");
    var steps = document.querySelectorAll(".step-3");

    courseSection.style.display = "none";
    sessionSection.style.display = "block";
    steps[1].classList.remove('current-step');
    steps[1].classList.add('complete-step');
    steps[2].classList.add('current-step');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function backToStep2(){
    var sessionSection = document.querySelector("#session");
    var courseSection = document.querySelector("#course");
    var steps = document.querySelectorAll(".step-3");

    courseSection.style.display = "block";
    sessionSection.style.display = "none";
    steps[1].classList.remove('complete-step');
    steps[1].classList.add('current-step');
    steps[2].classList.remove('current-step');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function displayCourse(){
    var uniqname = document.querySelector("#uniqname");
    var term = document.querySelector("#term");
    var courseSelection = document.querySelector("#course-selection");
    var courseNotFoundError = document.querySelector("#course-not-found-error");
    var manual = document.querySelector("#manual");
    var courseInput = document.querySelector("#course-input");
    if (uniqname.value === "sallyoli" && term.value === "2018 Fall"){
        courseSelection.style.display = "block";
        courseNotFoundError.style.display = "none";
    } else if(uniqname.value !== "" && term.value !== ""){
        courseSelection.style.display = "none";
        courseNotFoundError.innerHTML = `Cannot find any course taught by ${uniqname.value} in ${term.value},  please manually enter couse information below. `; 
        courseNotFoundError.style.display = "block";
        manual.checked = true;
        courseInput.style.display = "block"
    }
}

function hideCourseInput(){
    var manual = document.querySelector("#manual");
    var courseInput = document.querySelector("#course-input");
    var sessionTitle = document.querySelector("#sessionTitle");
    if (manual.checked){
        courseInput.style.display = "block";
        sessionTitle.value = "";
    } else {
        courseInput.style.display = "none";
        sessionTitle.value = this.value;
    }
}

var courseRadios = document.getElementsByName('course');
Array.from(courseRadios).forEach(function(radio){
    radio.addEventListener('click', hideCourseInput);
})

function displayLocationDetail(){
    var locationDetailSpecific = document.querySelector("#location-detail-specific");
    var haveRoom = document.querySelector("#haveRoom");
    var locationDetailPreferred = document.querySelector("#location-detail-preferred");
    var needHelp = document.querySelector("#needHelp");
    if (haveRoom.checked){
        locationDetailSpecific.style.display = "block";
        locationDetailPreferred.style.display = "none";
    } else if (needHelp.checked) {
        locationDetailSpecific.style.display = "none";
        locationDetailPreferred.style.display = "block";
    } else {
        locationDetailSpecific.style.display = "none";
        locationDetailPreferred.style.display = "none";
    }
}

var locationRadios = document.getElementsByName('location');
Array.from(locationRadios).forEach(function(radio){
    radio.addEventListener('click', displayLocationDetail);
})

function displayTTCinput(){
    var ttcRequired = document.querySelector("#TTC-required");
    var ttcInfo = document.querySelector("#ttc-info");

    if(ttcRequired.checked){
        ttcInfo.style.display = "block";
    } else {
        ttcInfo.style.display = "none";
    }
}

function displaySubmitDialog(){
    var modal = document.querySelector(".modal");
    modal.style.display = "block";
}

function closeSubmitDialog(){
    var closeButton = document.querySelector(".close");
    var copyButton = document.querySelector(".copy");
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
}