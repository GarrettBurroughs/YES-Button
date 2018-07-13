var song;

function setup() {
  song = loadSound('assets/falcon-yes.mp3');
  createCanvas(1000, 1000);
  fill(0);
}
let radius = 250;
function draw() {
  let c = color(1, 135, 59);
  fill(0);
  if((mouseX - width/2) ** 2 + (mouseY - height/2) ** 2 > radius ** 2){
    c = color(41, 216, 99);
  }else{
    c = color(1, 135, 59);
    if(mouseIsPressed){
      c = color(0, 255, 0);
    }

    console.log(mouseIsPressed);
  }

  fill(c);
  ellipse(width/2, height/2, radius * 2, radius * 2);
  
  textAlign(CENTER);
  textSize(70);
  fill(255);
  text("YES!", height/2, width/2);
}

function mouseClicked(){
  console.log("YES 1");
  if((mouseX - width/2) ** 2 + (mouseY - height/2) ** 2 < radius ** 2){
    console.log("YES!");
    song.stop();
    song.play();
  }
}