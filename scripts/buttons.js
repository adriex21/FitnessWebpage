function getStarted() {
    window.open("../html/pricing.html");
}

function readMore() {
    var paragraph = document.getElementById("infoText");
    if(readMore.fired) return;
    paragraph.textContent += "At SuperGym, we are committed to creating a safe and supportive environment for all of our members. We have implemented a number of measures to ensure that our facility is clean and hygienic, including frequent sanitization of equipment and surfaces, and the availability of hand sanitizer throughout the gym. We also have social distancing protocols in place to help keep our members and staff safe.";
    readMore.fired=true;
}

function openInstagram() {
    window.open("https://www.instagram.com/18gym.bucuresti/?hl=en")
}

function openFacebook(){
    window.open("https://www.facebook.com/18GymMihaiBravu/")
}

function openTwitter(){
    window.open("https://mobile.twitter.com/Gym_Motivation")
}




