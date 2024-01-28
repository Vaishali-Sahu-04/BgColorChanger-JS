
var timer=60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent = score;
}

function makeBubble(){
    var clutter = "";
    for(var i=1;i<=133;i++){
       clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector(".btmPanel").innerHTML = clutter;
}

function getHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function runTimer(){
    var time = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else {
            clearInterval(time);
            document.querySelector(".btmPanel").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}
document.querySelector(".btmPanel")
.addEventListener("click",function(dets){
    var clickedVal = Number(dets.target.textContent);
    if(hitrn === clickedVal){
        increaseScore();
    }
    makeBubble();
    getHit();
})

makeBubble();
getHit();
runTimer();
