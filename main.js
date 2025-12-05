let bleaching = true;
let opacity = 0;
let ColorChange = [241, 211, 2];
//im using an array of rgb values bc HEX values idk how to increment/decrement them lol
const title = document.getElementById('title');

function rgbToHex([r, g, b]) {//converts rgb array thingy to hex string (vibe coded bc im lazy)
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

function changeColorLooped() { //My idea but with a lil help from chatgpt
    if (ColorChange[0] === 255 && ColorChange[1] === 255 && ColorChange[2] === 255) {
        bleaching = false;
        
    } else if (ColorChange[0] === 241 && ColorChange[1] === 211 && ColorChange[2] === 2) {
        bleaching = true;
    }
    //turning it white from golden
    if (bleaching) {
        if (ColorChange[0] < 255){
            ColorChange[0]++;
        }if (ColorChange[1] < 255) {
            ColorChange[1]++;
        }if (ColorChange[2]) {
            ColorChange[2]++;
        }
    } else {
        //turning it golden to white
        if (ColorChange[0] > 241){
            ColorChange[0]--;
        }if (ColorChange[1] > 211) {
            ColorChange[1]--;
        }if (ColorChange[2] > 2) {
            ColorChange[2]--;
        }
    }
    title.style.color = rgbToHex(ColorChange);// change rbg to hex
}
//VERY ANNOYING but the thing turns red for a bit when it reaches white
//also i somehow omitted the blue channel T-T and then realized something was off

setInterval(changeColorLooped, 10);
//set to 10 ms for testing and 100 for acc use



//Make the TitleScreen Fade in, deets below

setTimeout(() => {
    let ID = setInterval(function() {
        opacity += 0.01;
        document.getElementById("title").style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(ID);
        }
        //Delay of 0.5s after init, then cycle for about 6 seconds
    }, 60);
}, 500);


//button 1 for the user dropdown
const button1 = document.getElementById("PersonalStats");
button1.addEventListener("click", onclick);

//button 2 for the user after hovering over the pfp to expand dropdown menu
const button2 = document.getElementById("Signout");
button2.addEventListener("SignOut", onclick);

//image effects
const image = document.getElementById('pfp');


//copied from about.js!!!
let increase = false;
let inputColor = 48;
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
    //infinity increases and decreases the brightness of the border
    
    //set border color to rgb value (black to gray to white, so only 1 value needed)
    button1.style.border = '2px solid rgb(' + inputColor + ', ' + inputColor + ', ' + inputColor + ')';
    button1.style.borderRadius = '5px';// the above code resets it so its over here!
    
    button2.style.border = '2px solid rgb(' + inputColor + ', ' + inputColor + ', ' + inputColor + ')';
    button2.style.borderRadius = '5px';// the above code resets it so its over here!
    
}
setInterval( ButtonColorChnage, 20);

//set the opacity of the pfp
ID = null;
image.addEventListener("mouseover", () => {
    //hovering
    ID = setInterval(() => {
        image.style.opacity = inputColor / 110;
    }, 50);
});
image.addEventListener("mouseout", () => {
    //not hovering
    clearInterval(ID);
    image.style.opacity = 1;
    // adding more time to you
});