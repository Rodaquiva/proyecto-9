var box;




function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  background(30);

}

function draw() 
{
  
if (keyIsDown(UP_ARROW)){
  box.y = box.y-5;
}
if (keyIsDown(DOWN_ARROW)){
  box.y = box.y+5;
}
if (keyIsDown(RIGHT_ARROW)){
  box.x = box.x+5;
}
if (keyIsDown(LEFT_ARROW)){
  box.x = box.x-5;
}
if (keyDown("w")){
  background("yellow");
}
if (keyDown("q")){
  background("blue");
}




drawSprites();
}




