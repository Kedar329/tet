let font;
let v = [];

function preload(){
  font = loadFont('assets/introheadr-base.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  // fill(255);
  // textFont(font);
  // textSize(200);
  // textAlign(CENTER);
  // text('outbreak',width/2,height/2);
   var pts = font.textToPoints('outbreak',(width/2-300),height/2,200);
   for (var i = 0; i < pts.length; i++) {
      var dot = pts[i];
     // fill(125);
     // stroke(125);
     // point(dot.x, dot.y);
  var dots = new vehicle(dot.x,dot.y);
  v.push(dots)

   }
}


function draw() {
background(0);
for(var j = 0; j < v.length; j++){
  v[j].show();
  v[j].update();
  v[j].behaviour();
}
}
