// meaningless comment #224
let increase = false;
let inputColor = 48;
const button1 = document.getElementById("PersonalStats");
const button2 = document.getElementById("Signout");

let currentRSVPCount = 1501;//do with the back end later smh
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
}, 290);

const rsvpBar = document.getElementById("RSVPbar");
const button = document.getElementById('Coolify');
button.style.fontSize = "0px";

function updateRSVPBar() {
    document.getElementById('rsvpCOUNT').style.opacity = 100;
    increment++;
    if (increment >= currentRSVPCount) {
        //once completed going to the current rsvp count
        increment = currentRSVPCount;
        clearInterval(intervalID);
        RSVPbutton();
        button.style.fontSize = "3em";
    }
    
    percent = increment / fullrsvpCount;//current rsvp count over max rsvp count
    
    //to make sure the bar doesnt exceed the limit and to color the bar based on color, also hides the ratio if under 30%
    if(percent <= 1){
        rsvpBar.style.width = (percent * 100) + "%";//set the bar
        rsvpBar.style.background = "linear-gradient(90deg,rgb(255,0,0)," + colorAtx(percent) + ")";
    }else{
        //increase font as the number gets bigger after the required number of RSVPS
        rsvpBar.style.background = "linear-gradient(90deg," + colorAtx((percent-1)*(percent**3)) + "," + colorAtx(percent) + ")";

        //set the increase rate (3 in this case) to less if the RSVPS goes over 
        document.getElementById("titleCard").style.fontSize = 6 + Math.fround(3*(percent-1)) + "em";
    }
    if(percent >= 0.3){
        rsvpBar.innerHTML = 
            "<span style='width:100%;text-align:center;display:block;'>" + increment +"/"+
            fullrsvpCount + "</span>";
    }

    document.getElementById("titleCard").innerText = increment + " RSVPs!";
}
/* <div class="rsvpContainer">
<h1 style="font-size: 10em;" id="titleCard"></h1>
<!--Replace the RSVP Here! with "XYZ RSVPS!"-->
<a href="https://forms.gle/XYZ123" id="Coolify" target="_blank" data-text="Click here to RSVP" class="glitch">Click here to RSVP</a>
</div> for refference purposes*/

function RSVPbutton(){
    button.style.cursor = "none";
    button.style.opacity = 100;
    button.style.fontSize = "4rem";
    button.className = "glitch";
    button.textContent = "Click here to RSVP";
    button.setAttribute('data-text','Click here to RSVP');
}

function colorAtx (x){
    let r = 0;
    let g = 0;
    if(x >= 0 && x <= 0.5){
        r = 255;
        g = 2*x*255;
    }else{
        g = 255;
        r = 255-((x-0.5)*255);
    }
    return "rgb(" + r + "," + g + ",0)";
}



function ButtonColorChnage() {
    if (inputColor === 40) {
        increase = true;
    }else if (inputColor === 110) {
        increase = false;
    }if (increase) {
        inputColor++;
        
    }   else {
        inputColor--;
        
    }
    button1.style.border = '3px solid rgb(' + inputColor + ', ' + inputColor + ', ' + inputColor + ')';
    button1.style.borderRadius = '5px';// the above code resets it so its over here!
    
    button2.style.border = '3px solid rgb(' + inputColor + ', ' + inputColor + ', ' + inputColor + ')';
    button2.style.borderRadius = '5px';// the above code resets it so its over here!
    
}
setInterval( ButtonColorChnage, 20);