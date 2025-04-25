let carModel, carTexture;

function preload() {
  carModel = loadModel('model/police-car.stl', true);
  carTexture = loadImage('img/police-car.png');
}

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  clear()
  stroke(0);
  strokeWeight(0);
  background("transparent");  
  orbitControl(5)
  rotateZ(PI);
  rotateY(-QUARTER_PI);
  model(carModel); "transparent"
  texture(carTexture);
}