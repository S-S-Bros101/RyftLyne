window.onload = () => {
    button1 = document.getElementById("Signout");
};


//copied from the about.js script!
let increase = false;
let inputColor = 48;

function ButtonColorChnage() {
    
    if (inputColor === (40+0)) {
        increase = true;
    }
    
    else if (inputColor === 110) {
        increase = false;
    }
    
    if (increase) {
        inputColor++;
    }
    
    else {
        inputColor--;
    }
    
    button1.style.border = '3px solid rgb(' + inputColor + ', ' + inputColor + ', ' + inputColor + ')';
    button1.style.borderRadius = '5px';// the above code resets it so its over here! THis was imported from somewhere lol
    
}
setInterval( ButtonColorChnage, 20);

const currencye = document.getElementById('currencythingy' + getCookie('Currency'));
currencye.style.display = "block";

function changeCurrency (currency){
    //check for if its null and also to get the value
    const currencyNum = Number(currency);
    
    if(currencyNum){
        console.log("Selected currency value:", currencyNum);
        
        for(let i = 1; i <= 6; i++){
            const currencye = document.getElementById('currencythingy' + i);
            if (currencye) { //check if not null
                if(i === currencyNum){
                    currencye.style.display = "block";
                } else {
                    currencye.style.display = "none";
                }
            }
        }
        
        setCookie("", 6, 30);
        setCookie("Currency", currencyNum , 29);
    } 
    //incase it gets 0, which is physically impossible :(
    else {
        setCookie("Currency", currencyNum , 29);
        console.log("Currency cleared or invalid:", currencyNum);
    }
}

//Some old code from my custom cookie clicker thingy for the site cookies

//get cookie, not the "name" var needs to be a string
function getCookie(name) {
    let cname = name + "=";
    let decoded = decodeURIComponent(document.cookie);
    let ca = decoded.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(cname) === 0) return parseInt(c.substring(cname.length)) || 0;
    }
    return 0;
}

//set cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function defaultSettings(){
    //maybe add a popup (not alert()), something like a overlay of sorts
    // setCookie(xyxz) adn so onwith a for loop
    //There should be several things being reset and stored via cookies!
    //reset to default settings here!
}