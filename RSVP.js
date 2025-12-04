let currentRSVPCount = 470;//do with the back end later smh
let increment = 0;
let fullrsvpCount = 1000;//max rsvp count

let percent = 0;

setInterval(() => {

currentRSVPCount = document.getElementById("rsvpRange").value;//get the value from the slider

percent = currentRSVPCount / fullrsvpCount;//current rsvp count over max rsvp count

document.getElementById("RSVPbar").style.width = (percent * 100) + "%";//set the bar

document.getElementById("RSVPbar").innerHTML = 
"<span style='width:100%;text-align:center;display:block;'>" + currentRSVPCount +"/"+
 fullrsvpCount + "</span>";

document.getElementById("titleCard").innerText = currentRSVPCount + " RSVPs!";

}, 1000);