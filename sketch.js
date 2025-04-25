let carModel, carTexture;

function preload() {
  carModel = loadModel('model/police-car.obj', true);
  carTexture = loadImage('img/police-car.png')
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
  texture(carTexture);
}

//https://sketchfab.com/3d-models/pixel-police-car-f750782961284b0a9e3748a97539b303