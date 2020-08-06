var canvas=document.querySelector("canvas");
var c=canvas.getContext("2d");
var W=canvas.width=493;
var H= canvas.height=493;
console.log(W);
console.log(H);
var size=17.1;
var x,y;
var snake=[];
var len=8;
var score=8;
var key;
var randomX, randomY;
for(var i=len-1;i>=0;i--){
  snake.push({x:i,y:0});
}
var headX=(snake[0].x);
  var headY=(snake[0].y);
  var button_left=document.querySelector("#left");
  var button_right=document.querySelector("#right");
  var button_down=document.querySelector("#down");
  var button_up=document.querySelector("#up");

  button_up.addEventListener("click",function(){
    key="w";
  });
  button_left.addEventListener("click",function(){
    key="a";
  });
  button_right.addEventListener("click",function(){
    key="d";
  });
  button_down.addEventListener("click",function(){
    key="s";
  });

document.addEventListener("keypress",function(event){
  key=event.key;
  console.log(key);
});

function generateRandom(){
   randomX=Math.round(Math.random()*(W-size)/size);
   randomY=Math.round(Math.random()*(H-size)/size);
}
generateRandom();

function draw(){
  c.clearRect(0,0,W,H);
  for(var i=0;i<snake.length;i++){
    c.fillStyle="blue";
    c.fillRect(snake[i].x*size,snake[i].y*size,size-2,size-2);
  }
  c.fillStyle="red";
  c.fillRect(randomX*size,randomY*size,size-2,size-2);
   c.font="30px Calibri";
  c.fillText(score,50,50);
}
function update(){

  if(headX*size>W || headX*size<0 || headY*size>H || headY*size<0){
    alert("Reload The Page to Start The New Game");
    clearInterval(id);
  }
  else{
  if(headX*size==randomX*size && headY*size==randomY*size){
  generateRandom();
  snake.splice(0,0,{x:headX,y:headY});
  score++;
  }

  else{
    snake.pop();
    console.log(headX +" "+ randomX);
     if(key=="w"){
        headY--;
      }
    else if(key=="a"){
       headX--;
      }
    else if(key=="s"){
      headY++;
      }
    else{
      headX++;
    }

    snake.splice(0,0,{x:headX,y:headY});
    }
  }
}

function gameLoop(){
  draw();
  update();
}

var id=setInterval(gameLoop,100);
