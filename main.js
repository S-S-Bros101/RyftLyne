let bleaching = true;
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