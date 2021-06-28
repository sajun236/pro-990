var iss,spacecraft,hasDocked

function preload(){
  bg=loadImage("Docking-undocking/spacebg.jpg");
  iss_image=loadImage("Docking-undocking/iss.png");
  spacecraft1=loadImage("Docking-undocking/scimg.png");
  spacecraft2=loadImage("Docking-undocking/scimg1.png");
  spacecraft3=loadImage("Docking-undocking/scimg2.png");
  spacecraft4=loadImage("Docking-undocking/scimg3.png");
}

function setup() {
  createCanvas(1500,800);
  iss=createSprite(400, 290, 50, 50);
  iss.addImage(iss_image)

  spacecraft=createSprite(400,500,50,50)
  spacecraft.addImage(scimg);

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
}


function draw() {
  background(bg);  
  drawSprites();
}