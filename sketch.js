let carModel, carTexture;

function preload() {
  carModel = loadModel('model/police-car.obj', true);
}

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  clear()
  scale(2,2,2);
  stroke(0);
  strokeWeight(0);
  background(0,0,0,0)
  orbitControl(5)
  rotateZ(PI);
  rotateY(-QUARTER_PI);
  model(carModel);
  //texture(carTexture);
}