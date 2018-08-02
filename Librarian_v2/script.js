var steps_4 = document.querySelectorAll(".step-4");
steps_4[0].classList.add('current-step');

var steps_3 = document.querySelectorAll(".step-3");
steps_3[0].classList.add('current-step');

function moveToStep2(){
    var contactSection = document.querySelector("#contact");
    var courseSection = document.querySelector("#course");
    var sessionSection = document.querySelector("#session");
    var nonCourse = document.querySelector("#nonCourse");
    var steps_4 = document.querySelectorAll(".step-4");
    var steps_3 = document.querySelectorAll(".step-3");

    contactSection.style.display = "none";
    if(nonCourse.checked){
        sessionSection.style.display="block";
    } else {
        courseSection.style.display = "block";
    }
    steps_4[0].classList.remove('current-step');
    steps_4[0].classList.add('complete-step');
    steps_4[1].classList.add('current-step');
    steps_3[0].classList.remove('current-step');
    steps_3[0].classList.add('complete-step');
    steps_3[1].classList.add('current-step');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function backToStep1(){
    var contactSection = document.querySelector("#contact");
    var courseSection = document.querySelector("#course");
    var sessionSection = document.querySelector("#session");
    var nonCourse = document.querySelector("#nonCourse");
    var steps_4 = document.querySelectorAll(".step-4");
    
    contactSection.style.display = "block";
    courseSection.style.display = "none";
 
    steps_4[0].classList.remove('complete-step');
    steps_4[0].classList.add('current-step');
    steps_4[1].classList.remove('current-step');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function moveToStep3(){
    var sessionSection = document.querySelector("#session");
    var courseSection = document.querySelector("#course");;
    var steps_4 = document.querySelectorAll(".step-4");

    courseSection.style.display = "none";
    sessionSection.style.display = "block";

    steps_4[1].classList.remove('current-step');
    steps_4[1].classList.add('complete-step');
    steps_4[2].classList.add('current-step');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function backToStep2(){
    var contactSection = document.querySelector("#contact");
    var sessionSection = document.querySelector("#session");
    var courseSection = document.querySelector("#course");
    var schedulingSection = document.querySelector("#scheduling");
    var nonCourse = document.querySelector("#nonCourse");
    var steps_4 = document.querySelectorAll(".step-4");
    var steps_3 = document.querySelectorAll(".step-3");

    if(nonCourse.checked){
        contactSection.style.display = "block";
        sessionSection.style.display = "none";
        courseSection.style.display = "none";
    } else {
        courseSection.style.display = "block";
        sessionSection.style.display = "none";
    }
    steps_4[1].classList.remove('complete-step');
    steps_4[1].classList.add('current-step');
    steps_4[2].classList.remove('current-step');
    steps_3[0].classList.remove('complete-step');
    steps_3[0].classList.add('current-step');
    steps_3[1].classList.remove('current-step');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function moveToStep4(){
    var sessionSection = document.querySelector("#session");
    var schedulingSection = document.querySelector("#scheduling");
    var steps_4 = document.querySelectorAll(".step-4");
    var steps_3 = document.querySelectorAll(".step-3");

    sessionSection.style.display = "none";
    schedulingSection.style.display = "block";
    steps_4[2].classList.remove('current-step');
    steps_4[2].classList.add('complete-step');
    steps_4[3].classList.add('current-step');
    steps_3[1].classList.remove('current-step');
    steps_3[1].classList.add('complete-step');
    steps_3[2].classList.add('current-step');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function backToStep3(){
    var sessionSection = document.querySelector("#session");
    var schedulingSection = document.querySelector("#scheduling");
    var steps_4 = document.querySelectorAll(".step-4");
    var steps_3 = document.querySelectorAll(".step-3");

    schedulingSection.style.display = "none";
    sessionSection.style.display = "block";
    steps_4[2].classList.remove('complete-step');
    steps_4[2].classList.add('current-step');
    steps_4[3].classList.remove('current-step');
    steps_3[1].classList.remove('complete-step');
    steps_3[1].classList.add('current-step');
    steps_3[2].classList.remove('current-step');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleCourseSection(){
    var nonCourse = document.querySelector("#nonCourse");
    var sessionTitle = document.querySelector("#sessionTitle");
    var locationInput = document.querySelector("#location-input");
    var steps_4 = document.querySelector("#steps-4");
    var steps_3 = document.querySelector("#steps-3");

    if (nonCourse.checked){
        steps_3.style.display="block";
        steps_4.style.display="none";
        sessionTitle.disabled = false;
        sessionTitle.style.opacity = 1;
        locationInput.style.display = "none";
    } else {
        steps_3.style.display="none";
        steps_4.style.display="block";
        sessionTitle.disabled = true;
        sessionTitle.style.opacity = 0.4;
        locationInput.style.display = "block";
    }
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
    // var locationDetailSpecific = document.querySelector("#location-detail-specific");
    // var haveRoom = document.querySelector("#haveRoom");
    var locationDetailPreferred = document.querySelector("#location-detail-preferred");
    var needHelp = document.querySelector("#needHelp");
    // if (haveRoom.checked){
    //     locationDetailSpecific.style.display = "block";
    //     locationDetailPreferred.style.display = "none";
    // } else if (needHelp.checked) {
    //     locationDetailSpecific.style.display = "none";
    //     locationDetailPreferred.style.display = "block";
    // } else {
    //     locationDetailSpecific.style.display = "none";
    //     locationDetailPreferred.style.display = "none";
    // }
    if(needHelp.checked){
        locationDetailPreferred.style.display = "block";
    } else {
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