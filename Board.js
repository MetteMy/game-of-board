let y;
let dieMoves;
let player1 = 0;
let squareX = [];
let colors = ["red", "yellow", "green", "purple"];
let color;
let moves = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    noStroke();
    rectMode(CENTER);
    textAlign(CENTER);
    y = height / 2;
    drawBoard();
    //Dice
    button = createButton('Dice');
    button.position(10, 10);
    button.size(70, 70);
    button.mousePressed(die);
}


function die() {
    push();
    fill(220);
    rect(90, 50, 20, 20);
    pop();
    
    dieMoves = parseInt(random(1, 7));
    text(dieMoves, 90, 50);
    moves += dieMoves;
    player1 = squareX[moves];
    drawBoard();
    circle(player1, y, 30, 30);
    if (moves >= 20){
        console.log("you won!!!");
        background(220)
        text("The Game is over. Player1 is the winner!", width/2, height/2);

    }
    giveQuestion()
    rect(width/2,120, 400,200);
    let question = parseInt(random(0, eGeographyQ.length));
    console.log(question);
    
    text(eGeographyQ[question],width/2,120);
    answerBtn = createButton('Answer');
    answerBtn.position(width/2, 140);
    answerBtn.mousePressed(function() {text(eGeographyA[question], width/2, 180)});
    //Husk at fjerne spørgsmål når de er brugt 
        
    
}
function getAnswer() {
    text(eGeographyA[question], width/2, 180);
}





function drawBoard() {
    for (let i = 0; i < 20; i++) {
        color = i % 4;
        push();
        fill(colors[color]);
        rect(width / 20 * i + 32, y, 50, 50);
        squareX.push(width / 20 * i + 32);
        pop();
    }
}


function giveQuestion() {
    
}
function draw() {

}
