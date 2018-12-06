let word1=document.querySelector(".words");
let word22=document.querySelector(".words2");
let buttons=document.querySelectorAll("button");
let gameBoard=document.querySelector(".board");
let score=document.querySelector(".score");
let bcc=document.querySelectorAll(".bc");
let reset=document.querySelector(".newGame");
let selectField=document.querySelectorAll(".h3");
let moving=document.querySelector(".moving");

let switch1;
let switch2;
let switch3;
let switch4;
let switch5;
let switch6;
let switch7;
let switch8;
let switch9;
let switch10;
let switch11;
let switch12;

let letters1=[

'cat','bet','sex','own','bow',
'leg','rug','top','bar','lid',"a"

];

let letters2=[

'bell','goal','road','undo','mark',
'wood','soap','blue','open','hope',"b"

];

let letters3=[

'novel','money','thing','toast','heart',
'check','swing','water','stone','cover',"c"

];

let letters4=[

'police','soccer','pocket','turkey','potato',
'jacket','candle','street','yellow','hockey',"d"

];

let letters5=[

'diamond','chimney','warning','lettuce','numbers',
'doorman','rooster','jogging','torpedo','stomach',"e"

];

let letters6=[

'monument','shocking','southern','triangle','entrance',
'remember','property','lecturer','exercice','musician',"f"

];

let letters7=[

'instagram','stopwatch','marvelous','defensive','sometimes',
'champions','portfolio','breakfast','hamburger','testimony',"g"

];

let letters8=[

'tournament','exaggerate','basketball','blacksmith','chandelier',
'lumberjack','intermezzo','accusation','biographic','restaurant',"h"

];

let letters9=[

'inheritance','masterpiece','observatory','destruction','ambassadors',
'attribution','blockbuster','willingness','deactivated','bodybuilder',"j"

];

let letters10=[

'receptionist','christianity','circumstance','contemporary','registration',
'merchandiser','imaginations','occasionally','hippopotamus','psychiatrist',"k"

];


let c1=0;
let c2=0;
let c3=0;
let c4=0;
let c5=0;
let c6=0;
let c7=0;
let c8=0;
let c9=0;
let c10=0;
let c11=0;
let c12=0;


let start;

function startingBackground() {
	
$(".board").css("background","url(https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/04/timmy-turner-2.gif) no-repeat").css("background-size","cover");	

}

start=setInterval(startingBackground, 100);

selectField[0].addEventListener("click", homePage);

function homePage() {
	
$(".board").css("background","url(https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/04/timmy-turner-2.gif) no-repeat").css("background-size","cover");
$(".word2").css("visibility","hidden");
$("button").css("visibility","hidden");
$(".score").css("visibility","hidden");
$(".bc").css("visibility","hidden");
$(".newGame").css("visibility","hidden");

}

selectField[1].addEventListener("click", startGame);

function startGame() {
	
clearInterval(start);
start=null;
$(".board").css("background","#55ACEE");
$(".word2").css("visibility","visible");
$("button").css("visibility","visible");
$(".score").css("visibility","visible");
$(".bc").css("visibility","visible");

}

selectField[2].addEventListener("click", gameRules);

function gameRules() {
	
clearInterval(start);
start=null;

$(".board").css("background","url(Gaming1.jpg) no-repeat").css("background-size","cover");
$(".word2").css("visibility","hidden");
$("button").css("visibility","hidden");
$(".score").css("visibility","hidden");
$(".bc").css("visibility","hidden");
$(".newGame").css("visibility","hidden");

}

selectField[3].addEventListener("click", aboutGame);

function aboutGame()  {

clearInterval(start);
start=null;

$(".board").css("background","url(Gaming2.jpg) no-repeat").css("background-size","cover");
$(".word2").css("visibility","hidden");
$("button").css("visibility","hidden");
$(".score").css("visibility","hidden");
$(".bc").css("visibility","hidden");
$(".newGame").css("visibility","hidden");

}

function changeBackground() {
		
bcc[c11].style.background="#EA4335";
++c11;

}

let word20=document.querySelectorAll(".word2");

for(let x=0; x < buttons.length; ++x)  {

buttons[x].addEventListener("click", letterDiscovering1);

}

function letterDiscovering1() {

this.textContent.toLowerCase();
let adding=parseInt(score.textContent);
	
if(word1.textContent.charAt(0)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(1)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(2)===this.textContent.toLowerCase())  {

this.style.background="purple";
this.classList.add("purple1");
let sound=new Audio();
sound.src="Coin.wav";
sound.play();
sound.volume=0.2;

}  else  {

this.style.background="black";
this.classList.add("black1");
this.removeEventListener("click", letterDiscovering1);
let sound1=new Audio();
sound1.src="Doing.wav";
sound1.play();
sound1.volume=0.2;
setTimeout(changeBackground, 100);

}

if(word1.textContent.charAt(0)===this.textContent.toLowerCase()) {

word22.children[0].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(1)===this.textContent.toLowerCase()) {

word22.children[1].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(2)===this.textContent.toLowerCase()) {

word22.children[2].textContent=this.textContent.toLowerCase();

  } 


if(word22.children[0].textContent.toLowerCase()===word1.textContent.charAt(0) &&
   word22.children[1].textContent.toLowerCase()===word1.textContent.charAt(1) &&
   word22.children[2].textContent.toLowerCase()===word1.textContent.charAt(2))  {

    switch1=setTimeout(removeItem1, 1000);
    switch2=setTimeout(newWords1, 1000);
    score.textContent=adding+1;
    c11=0;

    for(let x=0; x < buttons.length; ++x)  {

    buttons[x].addEventListener("click", letterDiscovering1);

       }

    }

if($(".black1").length > 6)  {

   setTimeout(startAgain1, 1000);
   reset.addEventListener("click", gameReset1);
   score.textContent=adding-1;

   for(let x=0; x < buttons.length; ++x)  {

  buttons[x].removeEventListener("click", letterDiscovering1);

    }

  }

}


function newWords1() {
	
word1.textContent=letters1[c1];
++c1;
$(".newButton").removeClass("purple1");

if(c1===letters1.length)  {

newWords2();

 for(let x=0; x < buttons.length; ++x)  {

      buttons[x].addEventListener("click", letterDiscovering2);
      buttons[x].removeEventListener("click", letterDiscovering1);

       }

  word22.innerHTML +="<div class='fourth word2'>_</div>";
       
   }

}

newWords1();

function removeItem1() {

 $(".button1").css("background","#EA4335");
 $(".button2").css("background","#FBBC05");
 $(".button3").css("background","#34A853");
 $(".button4").css("background","#3B5998");
 $(".button5").css("background","#dac292");
 $(".button6").css("background","#bc5a45");
 $(".button7").css("background","#ffc0cb");
 $(".newButton").removeClass("purple1");
 $(".newButton").removeClass("black1");
 $(".bc").css("background","white");
 $(".bc").removeClass("black1");

for(let i=0; i < word22.children.length; ++i)  {

word22.children[i].textContent="_";

   }   
}

function startAgain1() {

reset.textContent="Click to continue playing";

}



function gameReset1() {
	
c11=0;
reset.textContent="";
reset.removeEventListener("click", gameReset1);

for(let x=0; x < buttons.length; ++x)  {

buttons[x].addEventListener("click", letterDiscovering1);

  }

removeItem1();

}



function letterDiscovering2() {

this.textContent.toLowerCase();
let adding=parseInt(score.textContent);
	
if(word1.textContent.charAt(0)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(1)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(2)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(3)===this.textContent.toLowerCase() )  {

this.style.background="purple";
this.classList.add("purple1");
let sound=new Audio();
sound.src="Coin.wav";
sound.play();
sound.volume=0.2;

}  else  {

this.style.background="black";
this.classList.add("black1");
this.removeEventListener("click", letterDiscovering2);
let sound1=new Audio();
sound1.src="Doing.wav";
sound1.play();
sound1.volume=0.2;
setTimeout(changeBackground, 100);

}

if(word1.textContent.charAt(0)===this.textContent.toLowerCase()) {

word22.children[0].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(1)===this.textContent.toLowerCase()) {

word22.children[1].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(2)===this.textContent.toLowerCase()) {

word22.children[2].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(3)===this.textContent.toLowerCase()) {

word22.children[3].textContent=this.textContent.toLowerCase();

  }   

if(word22.children[0].textContent.toLowerCase()===word1.textContent.charAt(0) &&
   word22.children[1].textContent.toLowerCase()===word1.textContent.charAt(1) &&
   word22.children[2].textContent.toLowerCase()===word1.textContent.charAt(2) && 
   word22.children[3].textContent.toLowerCase()===word1.textContent.charAt(3))  {

    switch3=setTimeout(removeItem1, 1000);
    switch4=setTimeout(newWords2, 1000);
    score.textContent=adding+2;
    c11=0;

    for(let x=0; x < buttons.length; ++x)  {

    buttons[x].addEventListener("click", letterDiscovering2);

    }

  }

if($(".black1").length > 6)  {

   setTimeout(startAgain2, 1000);
   reset.addEventListener("click", gameReset2);
   score.textContent=adding-2;

   for(let x=0; x < buttons.length; ++x)  {

 buttons[x].removeEventListener("click", letterDiscovering2);

    }

  }

}



function newWords2() {
	
word1.textContent=letters2[c2];
++c2;
$(".newButton").removeClass("purple1");

if(c2===letters2.length)  {

  newWords3();

 for(let x=0; x < buttons.length; ++x)  {

      buttons[x].removeEventListener("click", letterDiscovering2);
      buttons[x].addEventListener("click", letterDiscovering3);

       }

  word22.innerHTML +="<div class='fifth word2'>_</div>";

   }

}

function startAgain2() {

reset.textContent="Click to continue playing";

}

function gameReset2() {
	
c11=0;
reset.textContent="";
reset.removeEventListener("click", gameReset2);

for(let x=0; x < buttons.length; ++x)  {

buttons[x].addEventListener("click", letterDiscovering2);

  }

removeItem1();

}



function letterDiscovering3() {

this.textContent.toLowerCase();
let adding=parseInt(score.textContent);	

if(word1.textContent.charAt(0)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(1)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(2)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(3)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(4)===this.textContent.toLowerCase() )  {

this.style.background="purple";
this.classList.add("purple1");
let sound=new Audio();
sound.src="Coin.wav";
sound.play();
sound.volume=0.2;

}  else  {

this.style.background="black";
this.classList.add("black1");
this.removeEventListener("click", letterDiscovering3);
let sound1=new Audio();
sound1.src="Doing.wav";
sound1.play();
sound1.volume=0.2;
setTimeout(changeBackground, 100);

}

if(word1.textContent.charAt(0)===this.textContent.toLowerCase()) {

word22.children[0].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(1)===this.textContent.toLowerCase()) {

word22.children[1].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(2)===this.textContent.toLowerCase()) {

word22.children[2].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(3)===this.textContent.toLowerCase()) {

word22.children[3].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(4)===this.textContent.toLowerCase()) {

word22.children[4].textContent=this.textContent.toLowerCase();

  }     

if(word22.children[0].textContent.toLowerCase()===word1.textContent.charAt(0) &&
   word22.children[1].textContent.toLowerCase()===word1.textContent.charAt(1) &&
   word22.children[2].textContent.toLowerCase()===word1.textContent.charAt(2) && 
   word22.children[3].textContent.toLowerCase()===word1.textContent.charAt(3) &&
   word22.children[4].textContent.toLowerCase()===word1.textContent.charAt(4))  {

    switch5=setTimeout(removeItem1, 1000);
    switch6=setTimeout(newWords3, 1000);
    score.textContent=adding+3;
    c11=0;

    for(let x=0; x < buttons.length; ++x)  {

    buttons[x].addEventListener("click", letterDiscovering3);

     }

  }

if($(".black1").length > 6)  {

   setTimeout(startAgain3, 1000);
   reset.addEventListener("click", gameReset3);
   score.textContent=adding-3;

   for(let x=0; x < buttons.length; ++x)  {

 buttons[x].removeEventListener("click", letterDiscovering3);

    }

  }

}

function newWords3() {
	
word1.textContent=letters3[c3];
++c3;
$(".newButton").removeClass("purple1");

if(c3===letters3.length)  {

newWords4();

for(let x=0; x < buttons.length; ++x)  {

      buttons[x].removeEventListener("click", letterDiscovering3);
      buttons[x].addEventListener("click", letterDiscovering4);

       }

  word22.innerHTML +="<div class='sixth word2'>_</div>";

   }


}


function startAgain3() {

reset.textContent="Click to continue playing";

}

function gameReset3() {
	
c11=0;
reset.textContent="";
reset.removeEventListener("click", gameReset3);

for(let x=0; x < buttons.length; ++x)  {

buttons[x].addEventListener("click", letterDiscovering3);

  }

removeItem1();

}


function letterDiscovering4() {

this.textContent.toLowerCase();
let adding=parseInt(score.textContent);
	
if(word1.textContent.charAt(0)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(1)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(2)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(3)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(4)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(5)===this.textContent.toLowerCase())  {

this.style.background="purple";
this.classList.add("purple1");
let sound=new Audio();
sound.src="Coin.wav";
sound.play();
sound.volume=0.2;

}  else  {

this.style.background="black";
this.classList.add("black1");
this.removeEventListener("click", letterDiscovering4);
let sound1=new Audio();
sound1.src="Doing.wav";
sound1.play();
sound1.volume=0.2;
setTimeout(changeBackground, 100);

}

if(word1.textContent.charAt(0)===this.textContent.toLowerCase()) {

word22.children[0].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(1)===this.textContent.toLowerCase()) {

word22.children[1].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(2)===this.textContent.toLowerCase()) {

word22.children[2].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(3)===this.textContent.toLowerCase()) {

word22.children[3].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(4)===this.textContent.toLowerCase()) {

word22.children[4].textContent=this.textContent.toLowerCase();

  }     

if(word1.textContent.charAt(5)===this.textContent.toLowerCase()) {

word22.children[5].textContent=this.textContent.toLowerCase();

  }    

if(word22.children[0].textContent.toLowerCase()===word1.textContent.charAt(0) &&
   word22.children[1].textContent.toLowerCase()===word1.textContent.charAt(1) &&
   word22.children[2].textContent.toLowerCase()===word1.textContent.charAt(2) && 
   word22.children[3].textContent.toLowerCase()===word1.textContent.charAt(3) &&
   word22.children[4].textContent.toLowerCase()===word1.textContent.charAt(4) &&
   word22.children[5].textContent.toLowerCase()===word1.textContent.charAt(5))  {

    switch5=setTimeout(removeItem1, 1000);
    switch6=setTimeout(newWords4, 1000);
    score.textContent=adding+4;
    c11=0;

    for(let x=0; x < buttons.length; ++x)  {

      buttons[x].addEventListener("click", letterDiscovering4);

       }

  }

if($(".black1").length > 6)  {

   setTimeout(startAgain4, 1000);
   reset.addEventListener("click", gameReset4);
   score.textContent=adding-4;

   for(let x=0; x < buttons.length; ++x)  {

 buttons[x].removeEventListener("click", letterDiscovering4);

    }

  }  

}

function newWords4() {
	
word1.textContent=letters4[c4];
++c4;
$(".newButton").removeClass("purple1");

if(c4===letters4.length)  {

newWords5();

for(let x=0; x < buttons.length; ++x)  {

      buttons[x].removeEventListener("click", letterDiscovering4);
      buttons[x].addEventListener("click", letterDiscovering5);

       }

  word22.innerHTML +="<div class='seventh word2'>_</div>";

  }

}

function startAgain4() {

reset.textContent="Click to continue playing";

}

function gameReset4() {
	
c11=0;
reset.textContent="";
reset.removeEventListener("click", gameReset4);

for(let x=0; x < buttons.length; ++x)  {

buttons[x].addEventListener("click", letterDiscovering4);

  }

removeItem1();

}


function letterDiscovering5() {

this.textContent.toLowerCase();
let adding=parseInt(score.textContent);
	
if(word1.textContent.charAt(0)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(1)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(2)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(3)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(4)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(5)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(6)===this.textContent.toLowerCase())  {

this.style.background="purple";
this.classList.add("purple1");
let sound=new Audio();
sound.src="Coin.wav";
sound.play();
sound.volume=0.2;

}  else  {

this.style.background="black";
this.classList.add("black1");
this.removeEventListener("click", letterDiscovering5);
let sound1=new Audio();
sound1.src="Doing.wav";
sound1.play();
sound1.volume=0.2;
setTimeout(changeBackground, 100);

}

if(word1.textContent.charAt(0)===this.textContent.toLowerCase()) {

word22.children[0].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(1)===this.textContent.toLowerCase()) {

word22.children[1].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(2)===this.textContent.toLowerCase()) {

word22.children[2].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(3)===this.textContent.toLowerCase()) {

word22.children[3].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(4)===this.textContent.toLowerCase()) {

word22.children[4].textContent=this.textContent.toLowerCase();

  }     

if(word1.textContent.charAt(5)===this.textContent.toLowerCase()) {

word22.children[5].textContent=this.textContent.toLowerCase();

  }    

if(word1.textContent.charAt(6)===this.textContent.toLowerCase()) {

word22.children[6].textContent=this.textContent.toLowerCase();

  }    

if(word22.children[0].textContent.toLowerCase()===word1.textContent.charAt(0) &&
   word22.children[1].textContent.toLowerCase()===word1.textContent.charAt(1) &&
   word22.children[2].textContent.toLowerCase()===word1.textContent.charAt(2) && 
   word22.children[3].textContent.toLowerCase()===word1.textContent.charAt(3) &&
   word22.children[4].textContent.toLowerCase()===word1.textContent.charAt(4) &&
   word22.children[5].textContent.toLowerCase()===word1.textContent.charAt(5) &&
   word22.children[6].textContent.toLowerCase()===word1.textContent.charAt(6))  {

    switch7=setTimeout(removeItem1, 1000);
    switch8=setTimeout(newWords5, 1000);
    score.textContent=adding+5;
    c11=0;
    
    for(let x=0; x < buttons.length; ++x)  {

      buttons[x].addEventListener("click", letterDiscovering5);

       }
  }

if($(".black1").length > 6)  {

   setTimeout(startAgain5, 1000);
   reset.addEventListener("click", gameReset5);
   score.textContent=adding-5;

   for(let x=0; x < buttons.length; ++x)  {

    buttons[x].removeEventListener("click", letterDiscovering5);

     }

  }    

}

function newWords5() {
	
word1.textContent=letters5[c5];
++c5;
$(".newButton").removeClass("purple1");

if (c5===letters5.length) {

newWords6();

for(let x=0; x < buttons.length; ++x)  {

      buttons[x].removeEventListener("click", letterDiscovering5);
      buttons[x].addEventListener("click", letterDiscovering6);

       }

  word22.innerHTML +="<div class='eighth word2'>_</div>";

   }

}

function startAgain5() {

reset.textContent="Click to continue playing";

}

function gameReset5() {
	
c11=0;
reset.textContent="";
reset.removeEventListener("click", gameReset5);

for(let x=0; x < buttons.length; ++x)  {

buttons[x].addEventListener("click", letterDiscovering5);

  }

removeItem1();

}

function letterDiscovering6() {

this.textContent.toLowerCase();
let adding=parseInt(score.textContent);
	
if(word1.textContent.charAt(0)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(1)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(2)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(3)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(4)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(5)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(6)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(7)===this.textContent.toLowerCase())  {

this.style.background="purple";
this.classList.add("purple1");
let sound=new Audio();
sound.src="Coin.wav";
sound.play();
sound.volume=0.2;

}  else  {

this.style.background="black";
this.classList.add("black1");
this.removeEventListener("click", letterDiscovering6);
let sound1=new Audio();
sound1.src="Doing.wav";
sound1.play();
sound1.volume=0.2;
setTimeout(changeBackground, 100);

}

if(word1.textContent.charAt(0)===this.textContent.toLowerCase()) {

word22.children[0].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(1)===this.textContent.toLowerCase()) {

word22.children[1].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(2)===this.textContent.toLowerCase()) {

word22.children[2].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(3)===this.textContent.toLowerCase()) {

word22.children[3].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(4)===this.textContent.toLowerCase()) {

word22.children[4].textContent=this.textContent.toLowerCase();

  }     

if(word1.textContent.charAt(5)===this.textContent.toLowerCase()) {

word22.children[5].textContent=this.textContent.toLowerCase();

  }    

if(word1.textContent.charAt(6)===this.textContent.toLowerCase()) {

word22.children[6].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(7)===this.textContent.toLowerCase()) {

word22.children[7].textContent=this.textContent.toLowerCase();

  } 


if(word22.children[0].textContent.toLowerCase()===word1.textContent.charAt(0) &&
   word22.children[1].textContent.toLowerCase()===word1.textContent.charAt(1) &&
   word22.children[2].textContent.toLowerCase()===word1.textContent.charAt(2) && 
   word22.children[3].textContent.toLowerCase()===word1.textContent.charAt(3) &&
   word22.children[4].textContent.toLowerCase()===word1.textContent.charAt(4) &&
   word22.children[5].textContent.toLowerCase()===word1.textContent.charAt(5) &&
   word22.children[6].textContent.toLowerCase()===word1.textContent.charAt(6) &&
   word22.children[7].textContent.toLowerCase()===word1.textContent.charAt(7))  {

    switch9=setTimeout(removeItem1, 1000);
    switch10=setTimeout(newWords6, 1000);
    score.textContent=adding+6;
    c11=0;

    for(let x=0; x < buttons.length; ++x)  {

      buttons[x].addEventListener("click", letterDiscovering6);

       }

  }

if($(".black1").length > 6)  {

   setTimeout(startAgain6, 1000);
   reset.addEventListener("click", gameReset6);
   score.textContent=adding-6;

   for(let x=0; x < buttons.length; ++x)  {

 buttons[x].removeEventListener("click", letterDiscovering6);

     }

  }    

}

function newWords6() {
	
word1.textContent=letters6[c6];
++c6;
$(".newButton").removeClass("purple1");

if(c6===letters6.length)  {

newWords7();

for(let x=0; x < buttons.length; ++x)  {

      buttons[x].removeEventListener("click", letterDiscovering6);
      buttons[x].addEventListener("click", letterDiscovering7);

       }

  word22.innerHTML +="<div class='nineth word2'>_</div>";

  }
 
}

function startAgain6() {

reset.textContent="Click to continue playing";

}

function gameReset6() {
	
c11=0;
reset.textContent="";
reset.removeEventListener("click", gameReset6);

for(let x=0; x < buttons.length; ++x)  {

buttons[x].addEventListener("click", letterDiscovering6);

  }

removeItem1();

}

function letterDiscovering7() {

this.textContent.toLowerCase();
let adding=parseInt(score.textContent);
	
if(word1.textContent.charAt(0)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(1)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(2)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(3)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(4)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(5)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(6)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(7)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(8)===this.textContent.toLowerCase())  {

this.style.background="purple";
this.classList.add("purple1");
let sound=new Audio();
sound.src="Coin.wav";
sound.play();
sound.volume=0.2;

}  else  {

this.style.background="black";
this.classList.add("black1");
this.removeEventListener("click", letterDiscovering7);
let sound1=new Audio();
sound1.src="Doing.wav";
sound1.play();
sound1.volume=0.2;
setTimeout(changeBackground, 100);

}

if(word1.textContent.charAt(0)===this.textContent.toLowerCase()) {

word22.children[0].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(1)===this.textContent.toLowerCase()) {

word22.children[1].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(2)===this.textContent.toLowerCase()) {

word22.children[2].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(3)===this.textContent.toLowerCase()) {

word22.children[3].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(4)===this.textContent.toLowerCase()) {

word22.children[4].textContent=this.textContent.toLowerCase();

  }     

if(word1.textContent.charAt(5)===this.textContent.toLowerCase()) {

word22.children[5].textContent=this.textContent.toLowerCase();

  }    

if(word1.textContent.charAt(6)===this.textContent.toLowerCase()) {

word22.children[6].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(7)===this.textContent.toLowerCase()) {

word22.children[7].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(8)===this.textContent.toLowerCase()) {

word22.children[8].textContent=this.textContent.toLowerCase();

  } 

if(word22.children[0].textContent.toLowerCase()===word1.textContent.charAt(0) &&
   word22.children[1].textContent.toLowerCase()===word1.textContent.charAt(1) &&
   word22.children[2].textContent.toLowerCase()===word1.textContent.charAt(2) && 
   word22.children[3].textContent.toLowerCase()===word1.textContent.charAt(3) &&
   word22.children[4].textContent.toLowerCase()===word1.textContent.charAt(4) &&
   word22.children[5].textContent.toLowerCase()===word1.textContent.charAt(5) &&
   word22.children[6].textContent.toLowerCase()===word1.textContent.charAt(6) &&
   word22.children[7].textContent.toLowerCase()===word1.textContent.charAt(7) &&
   word22.children[8].textContent.toLowerCase()===word1.textContent.charAt(8))  {

    switch9=setTimeout(removeItem1, 1000);
    switch10=setTimeout(newWords7, 1000);
    score.textContent=adding+7;
    c11=0;
  
    for(let x=0; x < buttons.length; ++x)  {

      buttons[x].addEventListener("click", letterDiscovering7);

       }

  }

if($(".black1").length > 6)  {

   setTimeout(startAgain7, 1000);
   reset.addEventListener("click", gameReset7);
   score.textContent=adding-7;

   for(let x=0; x < buttons.length; ++x)  {

   buttons[x].removeEventListener("click", letterDiscovering7);

    }

  }   

}

function newWords7() {
	
word1.textContent=letters7[c7];
++c7;
$(".newButton").removeClass("purple1");

if(c7===letters7.length)  {

newWords8();

for(let x=0; x < buttons.length; ++x)  {

      buttons[x].removeEventListener("click", letterDiscovering7);
      buttons[x].addEventListener("click", letterDiscovering8);

       }

  word22.innerHTML +="<div class='tenth word2'>_</div>";

  }
 
}

function startAgain7() {

reset.textContent="Click to continue playing";

}

function gameReset7() {
	
c11=0;
reset.textContent="";
reset.removeEventListener("click", gameReset7);

for(let x=0; x < buttons.length; ++x)  {

buttons[x].addEventListener("click", letterDiscovering7);

  }

removeItem1();

}

function letterDiscovering8() {

this.textContent.toLowerCase();
let adding=parseInt(score.textContent);	

if(word1.textContent.charAt(0)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(1)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(2)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(3)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(4)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(5)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(6)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(7)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(8)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(9)===this.textContent.toLowerCase())  {

this.style.background="purple";
this.classList.add("purple1");
let sound=new Audio();
sound.src="Coin.wav";
sound.play();
sound.volume=0.2;

}  else  {

this.style.background="black";
this.classList.add("black1");
this.removeEventListener("click", letterDiscovering8);
let sound1=new Audio();
sound1.src="Doing.wav";
sound1.play();
sound1.volume=0.2;
setTimeout(changeBackground, 100);

}

if(word1.textContent.charAt(0)===this.textContent.toLowerCase()) {

word22.children[0].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(1)===this.textContent.toLowerCase()) {

word22.children[1].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(2)===this.textContent.toLowerCase()) {

word22.children[2].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(3)===this.textContent.toLowerCase()) {

word22.children[3].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(4)===this.textContent.toLowerCase()) {

word22.children[4].textContent=this.textContent.toLowerCase();

  }     

if(word1.textContent.charAt(5)===this.textContent.toLowerCase()) {

word22.children[5].textContent=this.textContent.toLowerCase();

  }    

if(word1.textContent.charAt(6)===this.textContent.toLowerCase()) {

word22.children[6].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(7)===this.textContent.toLowerCase()) {

word22.children[7].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(8)===this.textContent.toLowerCase()) {

word22.children[8].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(9)===this.textContent.toLowerCase()) {

word22.children[9].textContent=this.textContent.toLowerCase();

  }   

if(word22.children[0].textContent.toLowerCase()===word1.textContent.charAt(0) &&
   word22.children[1].textContent.toLowerCase()===word1.textContent.charAt(1) &&
   word22.children[2].textContent.toLowerCase()===word1.textContent.charAt(2) && 
   word22.children[3].textContent.toLowerCase()===word1.textContent.charAt(3) &&
   word22.children[4].textContent.toLowerCase()===word1.textContent.charAt(4) &&
   word22.children[5].textContent.toLowerCase()===word1.textContent.charAt(5) &&
   word22.children[6].textContent.toLowerCase()===word1.textContent.charAt(6) &&
   word22.children[7].textContent.toLowerCase()===word1.textContent.charAt(7) &&
   word22.children[8].textContent.toLowerCase()===word1.textContent.charAt(8) &&
   word22.children[9].textContent.toLowerCase()===word1.textContent.charAt(9))  {

    switch9=setTimeout(removeItem1, 1000);
    switch10=setTimeout(newWords8, 1000);
    score.textContent=adding+8;
    c11=0;
    
    for(let x=0; x < buttons.length; ++x)  {

      buttons[x].addEventListener("click", letterDiscovering8);

      }

  }

if($(".black1").length > 6)  {

   setTimeout(startAgain8, 1000);
   reset.addEventListener("click", gameReset8);
   score.textContent=adding-8;

   for(let x=0; x < buttons.length; ++x)  {

 buttons[x].removeEventListener("click", letterDiscovering8);

    }

  }  

}

function newWords8() {
	
word1.textContent=letters8[c8];
++c8;
$(".newButton").removeClass("purple1");

if(c8===letters8.length)  {

newWords9();

for(let x=0; x < buttons.length; ++x)  {

      buttons[x].removeEventListener("click", letterDiscovering8);
      buttons[x].addEventListener("click", letterDiscovering9);

       }

  word22.innerHTML +="<div class='eleventh word2'>_</div>";

  }
 
}

function startAgain8() {

reset.textContent="Click to continue playing";

}

function gameReset8() {
	
c11=0;
reset.textContent="";
reset.removeEventListener("click", gameReset8);

for(let x=0; x < buttons.length; ++x)  {

buttons[x].addEventListener("click", letterDiscovering8);

  }

removeItem1();

}


function letterDiscovering9() {

this.textContent.toLowerCase();
let adding=parseInt(score.textContent);
	
if(word1.textContent.charAt(0)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(1)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(2)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(3)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(4)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(5)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(6)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(7)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(8)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(9)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(10)===this.textContent.toLowerCase())  {

this.style.background="purple";
this.classList.add("purple1");
let sound=new Audio();
sound.src="Coin.wav";
sound.play();
sound.volume=0.2;

}  else  {

this.style.background="black";
this.classList.add("black1");
this.removeEventListener("click", letterDiscovering9);
let sound1=new Audio();
sound1.src="Doing.wav";
sound1.play();
sound1.volume=0.2;
setTimeout(changeBackground, 100);

}

if(word1.textContent.charAt(0)===this.textContent.toLowerCase()) {

word22.children[0].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(1)===this.textContent.toLowerCase()) {

word22.children[1].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(2)===this.textContent.toLowerCase()) {

word22.children[2].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(3)===this.textContent.toLowerCase()) {

word22.children[3].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(4)===this.textContent.toLowerCase()) {

word22.children[4].textContent=this.textContent.toLowerCase();

  }     

if(word1.textContent.charAt(5)===this.textContent.toLowerCase()) {

word22.children[5].textContent=this.textContent.toLowerCase();

  }    

if(word1.textContent.charAt(6)===this.textContent.toLowerCase()) {

word22.children[6].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(7)===this.textContent.toLowerCase()) {

word22.children[7].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(8)===this.textContent.toLowerCase()) {

word22.children[8].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(9)===this.textContent.toLowerCase()) {

word22.children[9].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(10)===this.textContent.toLowerCase()) {

word22.children[10].textContent=this.textContent.toLowerCase();

  }    

if(word22.children[0].textContent.toLowerCase()===word1.textContent.charAt(0) &&
   word22.children[1].textContent.toLowerCase()===word1.textContent.charAt(1) &&
   word22.children[2].textContent.toLowerCase()===word1.textContent.charAt(2) && 
   word22.children[3].textContent.toLowerCase()===word1.textContent.charAt(3) &&
   word22.children[4].textContent.toLowerCase()===word1.textContent.charAt(4) &&
   word22.children[5].textContent.toLowerCase()===word1.textContent.charAt(5) &&
   word22.children[6].textContent.toLowerCase()===word1.textContent.charAt(6) &&
   word22.children[7].textContent.toLowerCase()===word1.textContent.charAt(7) &&
   word22.children[8].textContent.toLowerCase()===word1.textContent.charAt(8) &&
   word22.children[9].textContent.toLowerCase()===word1.textContent.charAt(9) &&
   word22.children[10].textContent.toLowerCase()===word1.textContent.charAt(10))  {

    switch9=setTimeout(removeItem1, 1000);
    switch10=setTimeout(newWords9, 1000);
    score.textContent=adding+9;
    c11=0;
 
    for(let x=0; x < buttons.length; ++x)  {

      buttons[x].addEventListener("click", letterDiscovering9);

       }

  }

if($(".black1").length > 6)  {

   setTimeout(startAgain9, 1000);
   reset.addEventListener("click", gameReset9);
   score.textContent=adding-9;

   for(let x=0; x < buttons.length; ++x)  {

 buttons[x].removeEventListener("click", letterDiscovering9);

    }

  }  

}

function newWords9() {
	
word1.textContent=letters9[c9];
++c9;
$(".newButton").removeClass("purple1");

if(c9===letters9.length)  {

newWords10();

for(let x=0; x < buttons.length; ++x)  {

      buttons[x].removeEventListener("click", letterDiscovering9);
      buttons[x].addEventListener("click", letterDiscovering10);

       }

  word22.innerHTML +="<div class='twelveth word2'>_</div>";

  }
 
}

function startAgain9() {

reset.textContent="Click to continue playing";

}

function gameReset9() {
	
c11=0;
reset.textContent="";
reset.removeEventListener("click", gameReset9);

for(let x=0; x < buttons.length; ++x)  {

buttons[x].addEventListener("click", letterDiscovering9);

  }

removeItem1();

}


function letterDiscovering10() {

this.textContent.toLowerCase();
let adding=parseInt(score.textContent);
	
if(word1.textContent.charAt(0)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(1)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(2)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(3)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(4)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(5)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(6)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(7)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(8)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(9)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(10)===this.textContent.toLowerCase() ||
   word1.textContent.charAt(11)===this.textContent.toLowerCase())  {

this.style.background="purple";
this.classList.add("purple1");
let sound=new Audio();
sound.src="Coin.wav";
sound.play();
sound.volume=0.2;

}  else  {

this.style.background="black";
this.classList.add("black1");
this.removeEventListener("click", letterDiscovering10);
let sound1=new Audio();
sound1.src="Doing.wav";
sound1.play();
sound1.volume=0.2;
setTimeout(changeBackground, 100);

}

if(word1.textContent.charAt(0)===this.textContent.toLowerCase()) {

word22.children[0].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(1)===this.textContent.toLowerCase()) {

word22.children[1].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(2)===this.textContent.toLowerCase()) {

word22.children[2].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(3)===this.textContent.toLowerCase()) {

word22.children[3].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(4)===this.textContent.toLowerCase()) {

word22.children[4].textContent=this.textContent.toLowerCase();

  }     

if(word1.textContent.charAt(5)===this.textContent.toLowerCase()) {

word22.children[5].textContent=this.textContent.toLowerCase();

  }    

if(word1.textContent.charAt(6)===this.textContent.toLowerCase()) {

word22.children[6].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(7)===this.textContent.toLowerCase()) {

word22.children[7].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(8)===this.textContent.toLowerCase()) {

word22.children[8].textContent=this.textContent.toLowerCase();

  } 

if(word1.textContent.charAt(9)===this.textContent.toLowerCase()) {

word22.children[9].textContent=this.textContent.toLowerCase();

  }   

if(word1.textContent.charAt(10)===this.textContent.toLowerCase()) {

word22.children[10].textContent=this.textContent.toLowerCase();

  }    

if(word1.textContent.charAt(11)===this.textContent.toLowerCase()) {

word22.children[11].textContent=this.textContent.toLowerCase();

  }     

if(word22.children[0].textContent.toLowerCase()===word1.textContent.charAt(0) &&
   word22.children[1].textContent.toLowerCase()===word1.textContent.charAt(1) &&
   word22.children[2].textContent.toLowerCase()===word1.textContent.charAt(2) && 
   word22.children[3].textContent.toLowerCase()===word1.textContent.charAt(3) &&
   word22.children[4].textContent.toLowerCase()===word1.textContent.charAt(4) &&
   word22.children[5].textContent.toLowerCase()===word1.textContent.charAt(5) &&
   word22.children[6].textContent.toLowerCase()===word1.textContent.charAt(6) &&
   word22.children[7].textContent.toLowerCase()===word1.textContent.charAt(7) &&
   word22.children[8].textContent.toLowerCase()===word1.textContent.charAt(8) &&
   word22.children[9].textContent.toLowerCase()===word1.textContent.charAt(9) &&
 word22.children[10].textContent.toLowerCase()===word1.textContent.charAt(10) &&
 word22.children[11].textContent.toLowerCase()===word1.textContent.charAt(11))  {

    switch9=setTimeout(removeItem1, 1000);
    switch10=setTimeout(newWords10, 1000);
    score.textContent=adding+10;
    c11=0;

    for(let x=0; x < buttons.length; ++x)  {

    buttons[x].addEventListener("click", letterDiscovering10);

    }

  }

if($(".black1").length > 6)  {

   setTimeout(startAgain10, 1000);
   reset.addEventListener("click", gameReset10);
   score.textContent=adding-10;

   for(let x=0; x < buttons.length; ++x)  {

 buttons[x].removeEventListener("click", letterDiscovering10);

    }

  }  

}

function newWords10() {
	
word1.textContent=letters10[c10];
++c10;
$(".newButton").removeClass("purple1");

if(c10===letters10.length)  {

for(let x=0; x < buttons.length; ++x)  {

      buttons[x].removeEventListener("click", letterDiscovering10);
 
     }

gameBoard.innerHTML="<img src='https://thumbs.gfycat.com/LazyFlamboyantBlacklemur-small.gif'>";
$(".score").css("visibility","hidden");
$(".bc").css("visibility","hidden");
reset.textContent="Your score is " + " "+score.textContent+" points";
setTimeout(refresh, 15000);

  }
 
}

function startAgain10() {

reset.textContent="Click to continue playing";

}

function gameReset10() {
	
c11=0;
reset.textContent="";
reset.removeEventListener("click", gameReset10);

for(let x=0; x < buttons.length; ++x)  {

buttons[x].addEventListener("click", letterDiscovering10);

  }

removeItem1();

}

function refresh()  {

location.reload();

}