let yMouth = 255 //open mouth
let sizeMouth = 50; // mouth size
let yEyes = 240; // eyes position
let xLEyes = 125; // left eye horizontal position
let xREyes = 375; // right eye horizontal position
let sizeEyes = 30; // eyes size
 

function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background(255);
  noFill();
  
  // Movement of eyes up and down
  if (mouseY < height/3 ) 
    {
      yEyes = 220
    }
 
  else if (mouseY < 2*height/3)
  {
      yEyes = 240;
  }
  else 
  {
     yEyes = 260; 
  }
 
  // Movement of left eye - left to right
  if (mouseX < width/3)
  {
    xREyes = 355;
  }
  else if (mouseX < 2*width/3)
  {
    xREyes = 375;
  }
  else {
    xREyes = 395;
  }
  
  // Movement of right eye - left to right
  if (mouseX < width/3)
  { 
    xLEyes = 105;
  }
  else if (mouseX < 2*width/3)
  {
    xLEyes = 125;
  }
  else
  {
    xLEyes = 145;
  }

  
  // Mouth movement
  if (mouseIsPressed == true){
    yMouth = 0; //black mouth when clicked
  } else {
    yMouth = 255; //white mouth when not clicked
  }
  
  if (mouseIsPressed == true){
    sizeMouth = random (20,60); //random open mouth when clicked
  } else { 
    sizeMouth = 50; // mouth back to just white when not cicked
  }
  
  //Head
  strokeWeight(4);
  circle(250,250,400);
  
  //Nose
  strokeWeight(8);
  point(210,310);
  point(290,310);
  strokeWeight(4);
  line(200,57,200,443);
  line(300,57,300,443);
  
  //Eyes
  //Left eye
  circle(125,240,150);
  strokeWeight(3);
  circle(125,240,135);
  circle(125,240,90);
  strokeWeight(5);
  circle(xLEyes,yEyes,25);
  
  
  //Right eye
  strokeWeight(4);
  circle(375,240,150);
  strokeWeight(3);
  circle(375,240,135);
  circle(375,240,90);
  strokeWeight(5);
  circle(xREyes,yEyes,25);
  
  //Mouth
  strokeWeight(4)
  circle(250,350,100);
  fill(yMouth);
  circle(250,350,sizeMouth);
}