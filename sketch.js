let carModel, carTexture;

function preload() {
  carModel = loadModel('model/police-car.obj', true);
  carTexture = loadImage('img/police-car.png');
  sirens = loadSound('sound/sirens.mp3');
}

function setup() {
  createCanvas(windowWidth, 500, WEBGL);
}

function draw() {
  clear();
  scale(2.7,2.7,2.7);
  stroke(0);
  strokeWeight(0);
  background(0,0,0,0);
  orbitControl(1, 1, 0);
  rotateX(QUARTER_PI*1.7);
  rotateZ(QUARTER_PI*3.1);
  translate(0,0,25);
  model(carModel);
  texture(carTexture);
}

function mousePressed(){
  if(mouseY>100 && mouseY<400 && mouseX<1000 && mouseX>400){
    sirens.loop()
  }
}
function mouseReleased(){
  sirens.stop()
}

//https://sketchfab.com/3d-models/pixel-police-car-f750782961284b0a9e3748a97539b303