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
    
    button1.style.border = '2px solid rgb(' + inputColor + ', ' + inputColor + ', ' + inputColor + ')';
    button1.style.borderRadius = '5px';// the above code resets it so its over here! THis was imported from somewhere lol
    
}
setInterval( ButtonColorChnage, 20);

function changeCurrency (currency){
    setCookie("BetaCurrency", currency ,29);
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