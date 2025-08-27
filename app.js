let gameSeq = [];
let userSeq =[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    //just for second
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    //just for second
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    document.querySelector("body").style.backgroundColor = "yellow";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },30);
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random()*3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function isSame(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),900);
        }
    }else{
        h3.innerHTML = `Game over! your score was <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },80);
        reset();
    }
}

function btnPress(){
    let btn = this; //je button press hoyche
    userFlash(btn);
    // console.dir(this);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    isSame(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}