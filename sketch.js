function setup() {
  createCanvas(800,400);
  fixedrec = createSprite(400, 200, 50, 50);
  movingrec = createSprite(500,60,30,30);
  fixedrec.shapeColor = "blue";
  movingrec.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
  movingrec.x = World.mouseX;
  movingrec.y = World.mouseY;
  if(movingrec.x - fixedrec.x < fixedrec.width/2 + movingrec.width/2 &&
     fixedrec.x - movingrec.x < fixedrec.width/2 + movingrec.width/2 &&
     movingrec.y - fixedrec.y < fixedrec.height/2 + movingrec.height/2 &&
     fixedrec.y - movingrec.y < fixedrec.height/2 + movingrec.height/2){

    movingrec.shapeColor = "yellow";
    fixedrec.shapeColor = "yellow";

  }
  else{
    movingrec.shapeColor = "blue";
    fixedrec.shapeColor = "red";
  }

  drawSprites();
}