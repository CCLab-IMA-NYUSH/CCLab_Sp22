function setup() {
  createCanvas(500, 400);
  background(220);
}

function draw() {
  let x = random(width);
  let y = random(height);
  let dia = random(30, 100);
  
  circle(x, y, dia);
}