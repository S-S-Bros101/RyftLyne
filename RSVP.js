let currentRSVPCount = 832;//do with the back end later smh
let increment = 0;
let waitTime = 10;//safety incase the if statements fail
let fullrsvpCount = 1000;//max rsvp count

let percent = 0;

//individual speeds so the user doesnt have to wait!
if(currentRSVPCount > 200){
    waitTime = 12;
}if(currentRSVPCount > 400){
    waitTime = 7;
}if(currentRSVPCount > 600){
    waitTime = 3;
}if (currentRSVPCount > 800){
    waitTime = 1;
}
setTimeout(function() {
    intervalID = setInterval(updateRSVPBar, waitTime);
}, 300);

function updateRSVPBar() {
    increment++;
    if (increment >= currentRSVPCount) {
        //once completed going to the current rsvp count
        increment = currentRSVPCount;
        clearInterval(intervalID);
    }
    percent = increment / fullrsvpCount;//current rsvp count over max rsvp count

    document.getElementById("RSVPbar").style.width = (percent * 100) + "%";//set the bar

    document.getElementById("RSVPbar").innerHTML = 
    "<span style='width:100%;text-align:center;display:block;'>" + increment +"/"+
    fullrsvpCount + "</span>";

    document.getElementById("titleCard").innerText = increment + " RSVPs!";
}
