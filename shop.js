itemnum = 0;
ItemDetails = [];
ShopItems = [];
let bytes = 2000;
// MY COOL new CURRENCY!!!
/*
Per hour you get>>> 48 bitz per hour
Bitz
> Base unit

Bytez
> 128 bitz

Kilobytez
> 288 bitz
> 2.25 Bytez

Megabytez
> 608 bitz
> 4.22 Bytez
> 2.11 Kilobytez

Gigabytez
> 1248 bitz
> 9.75 Bytez
> 4.33 Kilobytez
> 2.05 Megabytez

Hackabytez
> 2528 bitz
> 19.75 Bytez
> 8.78 Kilobytez
> 4.16 Megabytez
> 2.03 Gigabytez

And so you must code for 2528 bitz or about 52 hours

the formula for getting the conversion is 
unit in bitz = (previous units value in bitz + 16) * 2

And you get the ticket to the physical location by buying the hackabyte
NOte the symbols look a little too similar to cryptocurrency :cryin:
*/

//need a 2d array >>> ShopItems [ Item details[Name,desc,cost,image] ]
// and itemsDetails is stored via itemnum++

//Function to make the items in the shop by pulling stats from backend and putting it into the code!

//note to self later on



//create a thingy to budget to find out how many hours you have to do to afford something in hc


function mybytes(){
}


function CreateProduct(Name, Description, ImageSrc, Cost){
    let canBuyCount = Math.floor(bytes / Cost);
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
    
    const title = document.createElement("h2");
    title.textContent = Name;
    
    const desc = document.createElement("p");
    desc.textContent = Description;
    desc.className = "description whatisitlol";
    
    const costSection = document.createElement("div");
    costSection.className = "cost-section";
    
    const icon = document.createElement("img");
    icon.src = "bytes_icon.png";//connect to icon recieved from backend
    icon.alt = "bytes";
    icon.className = "icon";
    icon.width = 16;
    icon.height = 16;
    
    const cost = document.createElement("span");
    cost.className = "cost moolah";
    cost.textContent = Cost + " Moolah";
    
    const InsufficientFunds = document.createElement("span");
    InsufficientFunds.className = "insufficient-funds";
    InsufficientFunds.textContent = "Not enough bytes";
    
    const CanAfford = document.createElement("span");
    CanAfford.className = "canafford";
    CanAfford.textContent = "You can buy " + (Math.round(bytes/Cost));
    
    // Append elements in costSection
    costSection.appendChild(icon);
    costSection.appendChild(cost);
    if (bytes >= Cost) {
        if (canBuyCount > 0) costSection.appendChild(CanAfford);
    } else {
        costSection.appendChild(InsufficientFunds);
    }
    
    //attach to div section
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(costSection);
    
    document.getElementById("Shop").appendChild(card);
}


//code imported from main.js to change the border of the buttons

let increase = false;
let inputColor = 48;
const button1 = document.getElementById("PersonalStats");
const button2 = document.getElementById("Signout");

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
CreateProduct("Thingy", "What", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 10);
CreateProduct("Thingy", "did", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 20);
CreateProduct("Thingy", "yall", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 30);
CreateProduct("Thingy", "expect", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 50);
CreateProduct("Thingy", "lol", "https://a.thumbs.redditmedia.com/ORzuv1AmOv8dWigyEryGNS4Jih5RoqPrwb5giTHVvy4.jpg", 60);

function showCurrency(){
    getCookie("Currency");
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

function buyItem(num){
}