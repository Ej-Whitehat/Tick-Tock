function setup() {
  createCanvas(700,700);
}

function draw() {
  background(0,0,0); 
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  scAngle=map(sc,0,60,0,360); 
  mnAngle=map(mn,0,60,0,360); 
  hrAngle=map(hr,0,12,0,360);
  translate(350,350);
  push()
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  drawSprites();
}