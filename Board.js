let x;
let y;
let a;
let b;
let num;
let k;
let q1;
let q2;
let q3;

function setup() {
  createCanvas(600, 600);
  background(220);

 x = 5;
 y = height/2;
 a = 50;
 b = 50;
 num = 33;
 noStroke();
 q1 = (239,239,0);//gul
 q2 = (215,1,23);//rød
 q3 = (100,166,23);//grøn

 //Øverste række
for (let i = 1; i < num/3; i++){
 fill(239,239,0);
 //fill(239,239,0);
 rect(x,y,a,b);
 x += 60;}


//Terning
button = createButton('Terning');
button.position(10,10);
button.size(70,70);
button.mousePressed(terning);
}

function terning(){
  button = createButton(random(1,6));
  button.position(20,20);
  button.size(5,5);
}






function draw() {

}
