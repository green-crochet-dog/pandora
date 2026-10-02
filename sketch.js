let g =137;
let colors = ['#9bcf86','#48e2f7','#8f2207','#ed9316','#fce871'];
let sharwama = 0;


function setup(){
  createCanvas(1000, 1000)
   let button= createButton('change background')
   button.position(0, 100)
   button.mousePressed(repaint )
   let button2 =createButton('change body colour')
   button2.position(150, 100)
   button2.mousePressed(paintover)
}
function draw(){
background(g)
body()
arms()
face()
hacc()
}
function body(){
 noStroke()
  fill ( colors[sharwama])
  //body
  ellipse(400,400,300,340)
}
function arms(){
   //rshoulder
  ellipse(550,400,110,80)
//handr
  ellipse(600,350,60,130)
 // lshoulder
  ellipse(250,460,110,80)
  //lhand
  ellipse(200,410,60,130)
}
function face(){
   //left eye
  fill('black')
  ellipse(350,360,28,37)
  //reye
  ellipse(450,360,28,37)
  //mouf
  stroke('red')
  noFill()
 arc(400, 400, 40, 40, 0, PI );
//lchekk
noStroke()
fill('#FFD4CA')
ellipse(320,405,50,30)
ellipse(490,405,50,30) 
}
function hacc(){
   textSize(48)
text('🌸',300,300)
}
function repaint (){
 g = random(255);
  }
function paintover(){
 alert(sharwama)
  if(sharwama > 3 ){
    sharwama = 0 ;
  } else {sharwama++}
  
}