//all files that come in the help cmd
const files = [
"whatisryftlyne.txt",
"contact.txt",
"where.txt",
"amiworthy.txt"
];

let increase = false;
let inputColor = 48;

const info = {
"whatisryftlyne.txt":
"ryftlyne is a cutting-edge software solution designed to enhance user experience through innovative features and seamless integration.",
"contact.txt":
"For inquiries, support, or feedback, please reach out to us at",
"where.txt":
"RyftLyne is headquartered in San Francisco, California, with offices worldwide to support our global user base.",
"amiworthy.txt":
"Absolutely! Every user is valuable to us, and we believe you are worthy of using RyftLyne to its fullest potential."
};

//all info/text for the files as objects, key val pairs

/*VERY IMPORTANT>>> CHECK/UPDATE THE FAQ.TXT EVERYTIME FOR THE FAQ QUESTIONS*/
//track if doing errors on purpose 
let consecutiveErrors = 100* 0;
ID = [null,null,null,null,null]; //ids for all the FAQ questions
let HoverNum = 0;

const Cli = document.createElement('div');
Cli.style.fontFamily = 'DotGothic16, sans-serif';
Cli.style.background = '#000000ff';
Cli.style.color = '#00ff0def';
Cli.style.padding = '20px';
Cli.style.borderRadius = '8px';
Cli.style.width = '100%';
Cli.style.maxWidth = '1100px';
Cli.style.margin = '2em auto';

//:sob: accidentally deleted this part of the code once and it TOOK FORVER TO FIGURE OUT WHAT WAS WRONG
const output = document.createElement('div');
output.style.minHeight = '2em';
output.style.maxHeight = '500px';
output.style.overflowY = 'auto';
/*VIC, very import code T-T   DO NOT DELETE*/

const input = document.createElement('input');
input.style.width = '90%';//kinda want to taper it near the end lol
input.style.background = '#111';
input.style.color = '#ffffff';
input.style.fontFamily = 'DotGothic16, sans-serif';
increase = false;//init the pusle effect
inputColor = 68;
input.style.marginTop = '1em';

//add event listener to maek this a button
document.getElementById("Switch").onclick = staticHTML;

//place holder animation thingy for the cli
let x = 2;

//loading frames CHECK THEM OUT IN THE SIM!!!
const frames = [
"|.txt",
"\\.txt",
"-.txt",
"/.txt"
];
//dang okie dokie artichokie here we go

const button1 = document.getElementById("PersonalStats");
const button2 = document.getElementById("Signout");

// Pulsing border color variables


function ButtonColorChnage() {
    
    // when to reverse the pulse
    if (inputColor === 40) {
        increase = true;
    } else if (inputColor === 110) {
        increase = false;
    }
    
    // increment or decrement brightness
    if (increase) {
        inputColor++;
    } else {
        inputColor--;
    }
    
    // apply border color to both buttons
    const rgb = 'rgb(' + inputColor + ', ' + inputColor + ', ' + inputColor + ')';
    
    button1.style.border = `2px solid ${rgb}`;
    button1.style.borderRadius = '5px';
    
    button2.style.border = `2px solid ${rgb}`;
    button2.style.borderRadius = '5px';
}

// animate every 20ms
setInterval(ButtonColorChnage, 20);

setInterval(() => {
    input.placeholder = frames[x % 4];
    x++;
}, 80);

Cli.appendChild(output);
Cli.appendChild(input);
document.body.appendChild(Cli);

//cool thingy for the border of the text input of the cli
function inputBarFocus() {
    if (inputColor === 48) {
        increase = true;
    }else if (inputColor === 150) {
        increase = false;
    }if (increase) {
        inputColor++;
    }   else {
        inputColor--;
    }
    //infinity increases and decreases the brightness of the border
    
    //set border color to rgb value (black to gray to white, so only 1 value needed)
    input.style.border = '2px solid rgb(' + inputColor + ', ' + inputColor + ', ' + inputColor + ')';
    input.style.borderRadius = '5px';// the above code resets it so its over here!
}

//initial help print
print('Welcome to the RyftLyne CLI! ');
print('Type "help" to see a list of available files.');

//check cookies to del the Cli version

//delete console.logs debugging
if(getCookie("CmDLine") != null || getCookie("CmDLine") === 0){
    // console.log("not null");
    if(parseInt(getCookie("CmDLine")) === 1){
        // console.log("CMD not allowed");
        staticHTML();
    }else{
        // console.log("Console Allowed");
    }
}else{
    // console.log("cookie set");
    setCookie("CmDLine",-1,1);
}

if(getCookie("Currency") != null || getCookie("Currency") === 0 ){
    setCookie("Currency", 1, 30);
}

//Print the value
function print(msg) {
    output.innerHTML += msg + '<br>';
    // Auto-scroll to bottom
    output.scrollTop = output.scrollHeight;
}

//Sort the cmds from the input + eror handling
function handleCommand(cmd) {
    cmd = cmd.trim().toLowerCase();
    //cmd is the parsed input from the event listeners :nodnod:
    if (cmd === 'help') {
        print('Help files:<br>' + files.join('<br>'));
        consecutiveErrors = 0;
    }
    
    else if(cmd === 'idc') {
        for (let i = 0; i < files.length; i++) {
            print('<b>' + files[i] + '</b>:<br>' + info[files[i]]+'<br>');
        }
        consecutiveErrors = 0;//reset lol
        return;//terminal case (even tho its not recursive)
    }
    
    else if (cmd === 'clear') {
        output.innerHTML = '';//clear all of it
        print('found easter egg! DM me on Slack for a prize ~ Ryomen');
        consecutiveErrors = 0;
        return;//terminal case (even tho its not recursive)
    }
    
    else if (cmd === 'exit') {
        terminate();
    }
    
    else if (files.includes(cmd)) {
        print('<b>' + cmd + '</b>:<br>' + info[cmd]);
        consecutiveErrors = 0;
    }
    
    else if (cmd.length > 0) {
        consecutiveErrors++;
        print('Error: File not found.');
    }
    
    //prevent users from spamming enter or wasting time lol
    else{
        consecutiveErrors++;
    }
    
    if(consecutiveErrors === 3) {
        print('Hint: Type "help" to see a list of available files.');
    }
    
    if (consecutiveErrors === 6) {
        print('Are you sure you are worthy of using this CLI? Type "AmIWorthy.txt" or "help" to find out.');
    }
    
    if(consecutiveErrors === 8) {
        print('Just type "help" already...  or "idc" to quit trying.');
        //extra easter egg for 8 errors
        //also if you type idc it will js say all the files listed
    }
    
    if (consecutiveErrors >= 10 && consecutiveErrors != 13) {
        output.innerHTML = '';
        terminate();
        //A hidden reference to ecz
        print('Fatal Error: code 0 >>> Too many errors. Reset terminal to continue...');
        setTimeout(() => {
            location.reload();
        }, 4000);//reload after 6 secs
    }
}

function terminate(){
    consecutiveErrors = 13;
    print("Session Terminated");
    input.remove();
}

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey && consecutiveErrors <= 9) {//when enter is pressed lowk or no errors
        print('&gt; ' + input.value);//gt means the > bc html is weird
        handleCommand(input.value);//get back the cmd from the func call
        input.value = '';//reset the input var
    }
});
setInterval(inputBarFocus, 30); //js make it pulse between dark and light

//if someone wants to see the static html version (dissapointed smh)
function staticHTML(){
    setCookie("CmDLine",1,1);//set cookie for a day to stop cmd line
    input.remove();
    Cli.remove();
    output.remove();
    document.getElementById('Switch').remove();
    
    //html for all the questions!
    
    /* 
    Please note that each question has its own set of variables to hold it
    It works by setting a var to the consistent question and answer
    when hovered over the answer appears and the title gets breathing brackets that move 
    using intervals, and swap every 0.4 seconds, and the color gets darker.
    when the title is not being hovered over, the answer dissapears, as well as the title
    no longer has any breathing brackets, and teh color returns to normal.
    The title is initially bright, but after you hover on it, it stays dark
    */
    
    let blink1 = false;
    const What = document.getElementById('What');
    const Whattext = document.getElementById('Whattext');
    let ID1 = null;
    const title1 = "What is RyftLyne?";
    What.innerHTML = title1;
    What.style.display = "flex";
    Whattext.style.display = "flex";
    const Message1 = "ryftlyne is a cutting-edge software solution designed to enhance user experience through innovative features and seamless integration.";
    
    What.addEventListener("mouseover", () => {
        Whattext.innerHTML = Message1;
        What.innerHTML = "> " + title1 + " <";
        What.style.color = "#6ba1f8";
        
        ID1 = setInterval(() => {
            if (blink1) {
                What.innerHTML = ">" + title1 + "<";
            } else {
                What.innerHTML = "> " + title1 + " <";
            }
            blink1 = !blink1;
        }, 400);
    });
    
    What.addEventListener("mouseleave", () => {
        clearInterval(ID1);
        What.innerHTML = title1;
        Whattext.innerHTML = "";
        What.style.color = "#0062ffff";
    });
    
    
    let blink2 = false;
    const Contact = document.getElementById('Contact');
    const Contacttext = document.getElementById('Contacttext');
    let ID2 = null;
    const title2 = "Who to Contact?";
    Contact.innerHTML = title2;
    Contact.style.display = "flex";
    Contacttext.style.display = "flex";
    const Message2 = "For inquiries, support, or feedback, please reach out to us at (Ryomen here)";
    
    Contact.addEventListener("mouseover", () => {
        Contacttext.innerHTML = Message2;
        Contact.innerHTML = "> " + title2 + " <";
        Contact.style.color = "#6ba1f8";
        
        ID2 = setInterval(() => {
            if (blink2) {
                Contact.innerHTML = ">" + title2 + "<";
            } else {
                Contact.innerHTML = "> " + title2 + " <";
            }
            blink2 = !blink2;
        }, 400);
    });
    
    Contact.addEventListener("mouseleave", () => {
        clearInterval(ID2);
        Contact.innerHTML = title2;
        Contacttext.innerHTML = "";
        Contact.style.color = "#0062ffff";
    });
    
    
    let blink3 = false;
    const Where = document.getElementById('Where');
    const Wheretext = document.getElementById('Wheretext');
    let ID3 = null;
    const title3 = "Where is RyftLyne happening?";
    Where.innerHTML = title3;
    Where.style.display = "flex";
    Wheretext.style.display = "flex";
    const Message3 = "RyftLyne is headquartered in San Francisco, California, with offices worldwide to support our global user base.";
    
    Where.addEventListener("mouseover", () => {
        Wheretext.innerHTML = Message3;
        Where.innerHTML = "> " + title3 + " <";
        Where.style.color = "#6ba1f8";
        
        ID3 = setInterval(() => {
            if (blink3) {
                Where.innerHTML = ">" + title3 + "<";
            } else {
                Where.innerHTML = "> " + title3 + " <";
            }
            blink3 = !blink3;
        }, 400);
    });
    
    Where.addEventListener("mouseleave", () => {
        clearInterval(ID3);
        Where.innerHTML = title3;
        Wheretext.innerHTML = "";
        Where.style.color = "#0062ffff";
    });
    
    
    let blink4 = false;
    const Who = document.getElementById('Who');
    const Whotext = document.getElementById('Whotext');
    let ID4 = null;
    const title4 = "Who is eligible?";
    Who.innerHTML = title4;
    Who.style.display = "flex";
    Whotext.style.display = "flex";
    const Message4 = "Absolutely! Every user is valuable to us, and we believe you are worthy of using RyftLyne to its fullest potential.";
    
    Who.addEventListener("mouseover", () => {
        Whotext.innerHTML = Message4;
        Who.innerHTML = "> " + title4 + " <";
        Who.style.color = "#6ba1f8";
        
        ID4 = setInterval(() => {
            if (blink4) {
                Who.innerHTML = ">" + title4 + "<";
            } else {
                Who.innerHTML = "> " + title4 + " <";
            }
            blink4 = !blink4;
        }, 400);
    });
    
    Who.addEventListener("mouseleave", () => {
        clearInterval(ID4);
        Who.innerHTML = title4;
        Whotext.innerHTML = "";
        Who.style.color = "#0062ffff";
    });
    
    // console.log(226);
    
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