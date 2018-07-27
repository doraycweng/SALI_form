function toggleCourseSection(){
    var nonCourse = document.querySelector("#nonCourse");
    var courseSection = document.querySelector("#course");
    var sessionTitle = document.querySelector("#sessionTitle");
    var locationInput = document.querySelector("#location-input");
    if (nonCourse.checked){
        courseSection.style.display = "none";
        sessionTitle.disabled = false;
        sessionTitle.style.opacity = 1;
        locationInput.style.display = "none";
    } else {
        courseSection.style.display = "block";
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