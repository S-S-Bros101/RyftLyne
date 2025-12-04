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

const rsvpBar = document.getElementById("RSVPbar");
const button = document.getElementById('Coolify');
button.style.fontSize = "0px";

function updateRSVPBar() {
    increment++;
    if (increment >= currentRSVPCount) {
        //once completed going to the current rsvp count
        increment = currentRSVPCount;
        clearInterval(intervalID);
        RSVPbutton();
    }
    percent = increment / fullrsvpCount;//current rsvp count over max rsvp count

   rsvpBar.style.width = (percent * 100) + "%";//set the bar

   rsvpBar.innerHTML = 
    "<span style='width:100%;text-align:center;display:block;'>" + increment +"/"+
    fullrsvpCount + "</span>";

    document.getElementById("titleCard").innerText = increment + " RSVPs!";
}

/* <div class="rsvpContainer">
<h1 style="font-size: 10em;" id="titleCard"></h1>
<!--Replace the RSVP Here! with "XYZ RSVPS!"-->
<a href="https://forms.gle/XYZ123" id="Coolify" target="_blank" data-text="Click here to RSVP" class="glitch">Click here to RSVP</a>
</div> for refference purposes*/

function RSVPbutton(){
    button.style.fontSize = "4rem";
    button.className = "glitch";
    button.textContent = "Click here to RSVP";
    button.setAttribute('data-text','Click here to RSVP');
}