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
var key;
var randomX, randomY;
for(var i=len-1;i>=0;i--){
  snake.push({x:i,y:0});
}

document.addEventListener("keypress",function(event){
  key=event.key;
  console.log(key);
});

function generateRandom(){
   randomX=Math.round(Math.random()*(W-size));
   randomY=Math.round(Math.random()*(H-size));
}
generateRandom();

function draw(){
  c.clearRect(0,0,W,H);
  for(var i=0;i<snake.length;i++){
    c.fillStyle="blue";
    c.fillRect(snake[i].x*size,snake[i].y*size,size-2,size-2);
  }
  c.fillRect(randomX,randomY,size,size);
}
function update(){
  snake.pop();
  var headX=(snake[0].x);
  var headY=(snake[0].y);
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
  console.log(snake[0].x*size +" " + randomX);
  
  if(snake[0].x*size==randomX){
    alert("bas");
  }
}
function gameLoop(){
  draw();
  update();
}

setInterval(gameLoop,100);
