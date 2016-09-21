function setup() {
  createCanvas(200,200);
  background(255);
}

var i = 0
function draw() {
  triangle(50,0,0,50,100,50);
  rectMode(CENTER);
  rect(50,100,100,100);
  rectMode(CORNERS);
  rect(65,100,85,150);
}
