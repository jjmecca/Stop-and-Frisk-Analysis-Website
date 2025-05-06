let carModel, carTexture;
let oWidth, oHeight, s;
let rangle = 0;
const canvas = document.getElementById("title");
const target = document.getElementById('target');
const target2 = document.getElementById('target2');

function preload() {
  carModel = loadModel('model/police-car.obj', true);
  carTexture = loadImage('img/police-car.png');
  sirens = loadSound('sound/sirens.mp3');
}

function setup() {
  oWidth=windowWidth;
  oHeight=windowHeight;
  s=2.7
  createCanvas(windowWidth, windowHeight/1.6, WEBGL); //495
}

function draw() {
  clear();
  scale(s,s,s);
  stroke(0);
  strokeWeight(0);
  background(0,0,0,0);
  rotateX(QUARTER_PI*1.7);
  rotateZ(QUARTER_PI*(3.1+rangle));
  translate(0,0,25);
  model(carModel);
  texture(carTexture);
  rangle+=0.001;
}

function mousePressed(){
  if(mouseY>100 && mouseY<400 && mouseX<1000 && mouseX>400){
    sirens.loop();
    target.classList.remove("title");
    target2.classList.remove("title");
    target.classList.add("flashing");
    target2.classList.add("flashing");
  }
}

function mouseReleased(){
  sirens.stop();
  target.classList.remove("flashing");
  target2.classList.remove("flashing");
  target.classList.add("title");
  target2.classList.add("title");
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight/1.6);
  const scaleRatio = Math.min(windowWidth / oWidth, windowHeight / oHeight);
  s = Math.min(2.7, Math.max(2, 2.7 * scaleRatio));
}

//https://sketchfab.com/3d-models/pixel-police-car-f750782961284b0a9e3748a97539b303