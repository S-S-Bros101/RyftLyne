SignedIn = true;
itemnum = 0;
ItemDetails = [];
ShopItems = [];
let bytez = 4000;
let button1 = document.getElementById("PersonalStats");
let button2 = document.getElementById("Signout");
// MY COOL new CURRENCY!!!
/*
Per hour you get>>> 48 bytez per hour
bytez
> Base unit

Bytz
> 128 bytez

Kilobytz
> 288 bytez
> 2.25 Bytz

Megabytz
> 608 bytez
> 4.22 Bytz
> 2.11 Kilobytz

Gigabytz
> 1248 bytez
> 9.75 Bytz
> 4.33 Kilobytz
> 2.05 Megabytz

Hackabytz
> 2528 bytez
> 19.75 Bytz
> 8.78 Kilobytz
> 4.16 Megabytz
> 2.03 Gigabytz

And so you must code for 2528 bytez or about 52 hours

the formula for getting the conversion is 
unit in bytez = (previous units value in bytez + 16) * 2

And you get the ticket to the physical location by buying the hackabyte
NOte the symbols look a little too similar to cryptocurrency :cryin:
*/

//need a 2d array >>> ShopItems [ Item details[Name,desc,cost,image] ]
// and itemsDetails is stored via itemnum++

//Function to make the items in the shop by pulling stats from backend and putting it into the code!

//note to self later on



//create a thingy to budget to find out how many hours you have to do to afford something in hc


function mybytez(){
    
}


window.onload = () => {
    showCurrency();
    button1 = document.getElementById("PersonalStats");
    button2 = document.getElementById("Signout");
};

//code imported from main.js to change the border of the buttons

let cookie = getCookie("Currency");
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
    
    button2.style.border = '2px solid rgb(' + inputColor + ', ' + inputColor + ', ' + inputColor + ')';
    button2.style.borderRadius = '5px';// the above code resets it so its over here!
    
}
setInterval( ButtonColorChnage, 20);

//Create all shop items manually, insert costs through backend, enter key manually
CreateProduct("Thingy","tets", "nope", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 10);
CreateProduct("Thingy", "did", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 202);
CreateProduct("Thingy", "yall", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 30);
CreateProduct("Thingy", "expect", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 5320);
CreateProduct("Thingy", "lol", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 60);

let ID1 = null;
let blink1 = false;
function showCurrency(){
    const Moolah = document.getElementById('currentValue');
    
    if(!SignedIn){
        Moolah.innerHTML = "Please Sign in!";
        return;
    }
    
    if(getCookie("Currency") === 0){
        setCookie("Currency", 6, 30);
    }
    cookie = getCookie("Currency");
    
    Moolah.addEventListener("mouseover", () => {
        clearInterval(ID1);
        Moolah.innerHTML = "> Change Byte Size? <";
        ID1 = setInterval(() => {
            if (blink1) {
                Moolah.innerHTML = ">Change Byte Size?<";
            } else {
                Moolah.innerHTML = "> Change Byte Size? <";
            }
            blink1 = !blink1;
        }, 400);
    });
    
    const CurrentMoolah = getbestcurrency(bytez, currencyDivisor(cookie),cookie);
    
    Moolah.innerHTML = CurrentMoolah;
    
    Moolah.addEventListener("mouseleave", () => {
        clearInterval(ID1);
        Moolah.innerHTML = CurrentMoolah;
    });
}

function CreateProduct(Name, Description, shortDescription, ImageSrc, Cost){
    let canBuyCount = Math.floor(bytez / Cost);
    itemnum++;//next item
    
    ItemDetails = [Name, Description, Cost, ImageSrc];//Save details of product
    ShopItems.push(ItemDetails);//append to end of ShopItems 2d array
    
    //create the bg of the card
    const card = document.createElement("div");
    card.className = "product";
    
    /* Create all html elements for the product  */
    
    const img = document.createElement("img");
    img.width = 150;
    img.height = 150;
    img.src = ImageSrc;
    img.alt = Name;
    
    const desc = document.createElement("p");
    if(Description.length > 100){
        desc.textContent = shortDescription;
        desc.className = "description";
    }else{
        desc.textContent = Description;
        desc.className = "description";
    }
    
    const costSection = document.createElement("div");
    costSection.className = "cost-section";
    
    const icon = document.createElement("img");
    icon.src = currencyAt(cookie) + ".png";//connect to icon recieved from backend, in uppercase!!!
    icon.alt = "bytezValue";
    icon.className = "icon";
    icon.width = 16;
    icon.height = 16;
    
    const cost = document.createElement("span");
    cost.className = "moolah";
    //convert to specified currency
    
    // console.log(JSON.parse(getbestcurrency(bytez, currencyDivisor(cookie), cookie).split(" ")[0]));
    if(cookie === 1){
        cost.textContent = Math.floor(23232322) + " bitz";
    }else{
        
        cost.textContent = getbestcurrency(Cost, currencyDivisor(6), 6);
        
    }
    
    
    const title = document.createElement("h2");
    
    // Append elements in costSection
    costSection.appendChild(icon);
    costSection.appendChild(cost);
    
    if (bytez >= Cost) {
        if (canBuyCount > 0) {
            const CanAfford = document.createElement("span");
            CanAfford.className = "canafford";
            CanAfford.textContent = "You can buy " + (Math.round(bytez/Cost));
            title.appendChild(CanAfford);
            title.className = "canafford";
        }
    } else {
        const InsufficientFunds = document.createElement("span");
        InsufficientFunds.className = "insufficient-funds";
        InsufficientFunds.textContent = "Not enough bytez";
        title.className = "insufficient-funds";
        title.appendChild(InsufficientFunds);
    }
    
    //attach to div section
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(costSection);
    
    document.getElementById("Shop").appendChild(card);
}

//What is the currency at the index (1 through 6)
function currencyAt(num){
    switch (num) {
        case 1:
        return "bytez"; 
        
        case 2:
        return "Bytz";
        
        case 3:
        return "Kilobytz";
        
        case 4:
        return "Megabytz";
        
        case 5:
        return "Gigabytz"; 
        
        case 6:
        return "Hackabytz"; 
        
        default:
        return "Error code";
    }
}

//What is the conversion of the specified currency to bytez
function currencyDivisor(num){
    switch (num) {
        case 1:
        return 1; 
        
        case 2:
        return 128;
        
        case 3:
        return 288;
        
        case 4:
        return 608;
        
        case 5:
        return 1248; 
        
        case 6:
        return 2528; 
        
        default:
        return bytez;
        
    }
}

//give the currency that doesnt have a fraction
function getbestcurrency(moolah, divisor, currency) {
    
    //base case, its pointless to divive, results in 0
    if (moolah === 0) {
        return "0 bytez";
    }
    
    //recursive case, if too big divisor (a fraction) go to smaller currency
    if (moolah / divisor < 1) {
        if (currency <= 1) {
            return Math.floor(moolah) + " bytez";
        }
        return getbestcurrency(moolah, currencyDivisor(currency - 1), currency - 1);
    }
    
    //if currency is not a fraction
    return (moolah / divisor).toFixed(2) + " " + currencyAt(currency);
}



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

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function buyItem(num){
    
}