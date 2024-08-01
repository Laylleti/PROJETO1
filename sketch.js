function setup() {
  createCanvas(1000, 800);
  background("rgb(255,192,253)");
}

function draw() {
  
  fill("purple");
  stroke("#E91E63");
  if(mouseIsPressed)
  rect(mouseX,mouseY,30,50);
}
