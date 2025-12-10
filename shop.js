SignedIn = true;
itemnum = 0;
ItemDetails = [];
ShopItems = [];
let fadeVal = 0;
let bytez = mybytez();
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


//this is to reset the cookie values and to set myBytez val!    
function mybytez(){
    if(getCookie("myBytez") === 0){
        setCookie("myBytez", 1, 30);
        location.reload();
    }else{
    //     return getCookie("myBytez"); for testing only!
        let cookie = prompt("How many bitz do you have?");
        if(cookie){
            setCookie("myBytez", parseInt(Math.floor(cookie)), 30 );
            return parseInt(Math.floor(cookie));
        }
    }
}


window.onload = () => {
    showCurrency();
    button1 = document.getElementById("PersonalStats");
    button2 = document.getElementById("Signout");
};

// document.getElementById('myElementId').scrollIntoView({ behavior: 'smooth' });

//scroll to y location function for going to specific prods
function scroll (y){
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}   

//code imported from main.js to change the border of the buttons

//cookies for tesing the beta feature for currency conversion!
if(getCookie("BetaCurrency") === 0){
    setCookie("BetaCurrency", false, 30);
}

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
    
    button1.style.border = '3px solid rgb(' + inputColor + ', ' + inputColor + ', ' + inputColor + ')';
    button1.style.borderRadius = '5px';// the above code resets it so its over here! THis was imported from somewhere lol
    
    button2.style.border = '3px solid rgb(' + inputColor + ', ' + inputColor + ', ' + inputColor + ')';
    button2.style.borderRadius = '5px';// the above code resets it so its over here!
    
}
setInterval( ButtonColorChnage, 20);

//Create all shop items manually, insert costs through backend, enter key manually
CreateProduct("1","tets", "nope", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 100);
CreateProduct("2", "did", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 202);
CreateProduct("3", "yall", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 300);
CreateProduct("4", "expect", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 400);
CreateProduct("5", "lol", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 529);
CreateProduct("6","tets", "nope", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 650);
CreateProduct("7", "did", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 702);
CreateProduct("8", "yall", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 800);
CreateProduct("9", "expect", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 920);
CreateProduct("10", "23d", "loThinfghjwidoweidjwoiedjwoedjwoedjwoejidowiejdwoejidwoeidjwoedjwoeidjgyl", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 2529);
CreateProduct("11","tets", "nope", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 1100);
CreateProduct("12", "did", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 1502);
CreateProduct("13", "ywqdqwdall", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 1700);
CreateProduct("14", "expect", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 2000);
CreateProduct("15", "lowdql", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 2209);
CreateProduct("16","tewdqwts", "nope", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 2500);
CreateProduct("17", "diqwdqd", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 2700);
CreateProduct("18", "expect", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 2900);
CreateProduct("19", "lol", "", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 3000);

let inc = false;
function fade(){
    if(fadeVal == 0){
        // note the values can be changed for more effects!
        inc = true;
        
    }if(fadeVal == 50){
        inc = false;
        
    }if (inc){
        fadeVal++;
        
    }else{
        fadeVal--;
    }
}

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
    
    //add breathing brackets and make it glow when hovered
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
    
    //to change your current currency!
    Moolah.addEventListener("click", () => {
        window.open('Profile.html', '_blank');
    });
    
    const CurrentMoolah = getbestcurrency(bytez, currencyDivisor(cookie),cookie,2);
    
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
    
    card.style.background = "linear-gradient(360deg, #7a4fd6aa, #2d4f66cc, #0b4a5fcc)";
    
    // //change bg color :sob:
    // document.getElementById('bodyITSELF').style.background = "linear-gradient(" + (deg/2)%360 + "deg, #230041ff, #000000,  #002438ff, #000000, #00192bff)";
    
    /* Create all html elements for the product  */
    
    const img = document.createElement("img");
    img.width = 150;
    img.height = 150;
    img.src = ImageSrc;
    img.alt = Name;
    
    const desc = document.createElement("p");
    if(Description.length > 5){
        desc.textContent = shortDescription;
        desc.className = "description";
    }else{
        desc.textContent = Description;
        desc.className = "description";
    }
    
    const costSection = document.createElement("div");
    
    // //strange error: when we use 
    // const icon = document.createElement("img");
    // icon.className = "currency";
    // icon.src = "./Currency/" + currencyAt(cookie) + ".png";//connect to icon recieved from backend, in uppercase!!!
    // icon.alt = "size of the BYTEZ";
    // icon.className = "icon";
    // icon.width, icon.height = 40;
    
    const cost = document.createElement("span");
    //convert to specified currency
    
    // console.log(JSON.parse(getbestcurrency(bytez, currencyDivisor(cookie), cookie).split(" ")[0]));
    if(cookie === 1){
        const float = getbestcurrency(Cost, currencyDivisor(6), 6, 2);
        cost.textContent = Math.floor(Cost) + " bitz";
        costSection.className = "cost-section " + currencyColor(float);
    }else{
        const float = getbestcurrency(Cost, currencyDivisor(6), 6, 2);
        const roundedDown = Math.floor(getbestcurrency(Cost, currencyDivisor(6), 6).split(" ")[0],2);
        const floatNum = getbestcurrency(Cost, currencyDivisor(6), 6, 20).split(" ")[0];
        
        if( (floatNum - roundedDown) > 0.0){
            cost.textContent = float;
        }else{
            cost.textContent = roundedDown;
        }
        costSection.className = "cost-section " + currencyColor(float);
    }
    
    //maek the cost dim and brighten forever
    
    
    const title = document.createElement("h2");
    
    // Append elements in costSection
    costSection.appendChild(cost);
    // costSection.appendChild(icon);
    function recheck(){
        if (bytez >= Cost) {
            if (canBuyCount > 0) {
                const CanAfford = document.createElement("span");
                CanAfford.className = "canafford";
                CanAfford.textContent = "You can buy " + (Math.round(bytez/Cost));
                title.appendChild(CanAfford);
                title.className = "canafford";
                
                // CanAfford.addEventListener("click", () => {
                //     buyItem(Cost);
                //     recheck();
                // });
            }
        } else {
            const InsufficientFunds = document.createElement("span");
            InsufficientFunds.className = "insufficient-funds";
            InsufficientFunds.textContent = "Not enough bytez";
            title.className = "insufficient-funds";
            title.appendChild(InsufficientFunds);
            
            // CanAfford.addEventListener("click", () => {
            //     buyItem(Cost);
            //     recheck();
            // });
        }
    }
    recheck();
    
    //attach to div section
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(costSection);
    // faves = getCookie("Faves").toString.includes(Name.toString());
    
    if(Math.random()>0.5){
        
        let ID2 = null;
        let blink2 = false;
        let favourites = document.getElementById("FAVES");
        let faves = document.getElementById("Shop-Favourites");
        faves.appendChild(card);
        //for favourites
        faves.addEventListener("mouseover", () => {
            clearInterval(ID2);
            favourites.innerHTML = "> Favourited Items! <";
            ID2 = setInterval(() => {
                if (blink2) {
                    favourites.innerHTML = ">Favourited Items!<";
                } else {
                    favourites.innerHTML = "> Favourited Items! <";
                }
                blink2 = !blink2;
            }, 400);
        });
        
        faves.addEventListener("mouseleave", () => {
            clearInterval(ID2);
            favourites.innerHTML = "Favourited Items!";
            
            card.style.background = "linear-gradient(360deg, #7a4fd6aa, #2d4f66cc, #0b4a5fcc)";
        });
        
    }else{
        
        let ID3 = null;
        let blink3 = false;
        let shopItems = document.getElementById("SHOP");
        let shop = document.getElementById("Shop");
        shop.appendChild(card);
        //for favourites
        shop.addEventListener("mouseover", () => {
            clearInterval(ID3);
            shopItems.innerHTML = "> Shop <";
            ID3 = setInterval(() => {
                if (blink3) {
                    shopItems.innerHTML = ">Shop<";
                } else {
                    shopItems.innerHTML = "> Shop <";
                }
                blink3 = !blink3;
            }, 400);
        });
        
        shop.addEventListener("mouseleave", () => {
            clearInterval(ID3);
            shopItems.innerHTML = "Shop";
            
            card.style.background = "linear-gradient(360deg, #7a4fd6aa, #2d4f66cc, #0b4a5fcc)";
        });
        
    }
    
    let ID4 = null;
    let colorRed = 1;
    let colorSwap = false;
    //for card hover animations
    card.addEventListener("mouseover", () => {
        clearInterval(ID4);
        card.style = "box-shadow: -1px 2px 22px 6px rgba(0,0,0,1);-webkit-box-shadow: -1px 2px 22px 6px rgba(0,0,0,1);-moz-box-shadow: -1px 2px 22px 6px rgba(0,0,0,1);0 0 15px #0000ff;"
        ID4 = setInterval(() => {
            if (colorSwap === false){
                if(colorRed === 50){
                    colorSwap = true;
                }
                colorRed++;
            }else{
                if(colorRed === 0){
                    colorSwap = false;
                }
                colorRed--;
            }
            card.style.boxShadow = `-1px 2px 22px 6px rgba(${colorRed/50 *255}, 97, 136, 1), 0 0 15px #00f`;
        }, 40);
    });
    
    card.addEventListener("mouseleave", () => {
        clearInterval(ID4);
        card.style = "box-shadow: -1px 2px 22px 6px rgba(0,0,0,1);-webkit-box-shadow: -1px 2px 22px 6px rgba(0,0,0,1);-moz-box-shadow: -1px 2px 22px 6px rgba(0,0,0,1);0 0 15px #0000ff;"
    });
    
    
    // .glowing-box {
    //     box-shadow: 0 0 15px #0000ff; /* Adjust color and size */
    //     /* Optional: Add border-radius for rounded corners */
    //     /* border-radius: 5px; */
    // }
    
}

//What is the currency at the index (1 through 6)
function currencyAt(num){
    switch (num) {
        case 1:
        return "Bitz"; 
        
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
        
        //this should not be seen AT ALL!
        default:
        return "Dm Ryomen pls";
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
        return 0;
        
    }
}

//extract the letters for the type of data
function currencyColor(bestCurrency){
    let NP = bestCurrency.replace(/[^a-zA-Z]/g, '');//non primitive type only
    
    if(NP === "Bitz"){
        return "Bitz";
        
    }if(NP === "Bytz"){
        return "Bytz";
        
    }if(NP === "Kilobytz"){
        return "Kilobytz";
        
    }if(NP === "Megabytz"){
        return "Megabytz";
        
    }if(NP === "Gigabytz"){
        return "Gigabytz";
        
    }if(NP === "Hackabytz"){
        return "Hackabytz";
        
    }
    return 0;
}

//give the currency that doesnt have a fraction
function getbestcurrency(moolah, divisor, currency, precision) {
    
    //base case, its pointless to divive, results in 0
    if (moolah === 0) {
        return "0 bytez";
    }
    
    //recursive case, if too big divisor (a fraction) go to smaller currency
    if (moolah / divisor < 1) {
        if (currency <= 1) {
            return Math.floor(moolah) + " bytez";
        }
        return getbestcurrency(moolah, currencyDivisor(currency - 1), currency - 1, precision);
    }
    
    //if currency is not a fraction
    return (moolah / divisor).toFixed(precision) + " " + currencyAt(currency);
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

//todo later
function buyItem(num){
    mybytez -= num;
    recheck();
    // location.reload;
}