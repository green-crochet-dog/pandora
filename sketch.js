function setup() {
  createCanvas(1000, 1000);
  background('#ffffff')
  noStroke()
  fill ('rgb(77, 168, 125)')
  //body
  ellipse(400,400,300,340)
  //rshoulder
  ellipse(550,400,110,80)
//handr
  ellipse(600,350,60,130)
 // lshoulder
  ellipse(250,460,110,80)
  //lhand
  ellipse(200,410,60,130)
  //left eye
  fill('black')
  ellipse(350,360,28,37)
  //reye
  ellipse(450,360,28,37)
  //mouf
  stroke('red')
  noFill()
 arc(400, 400, 40, 40, 0, PI );
}