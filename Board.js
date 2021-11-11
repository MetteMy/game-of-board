let y;
let dieMoves;
let player1 = 0;
let squareX = [];
let colors = ["red", "yellow", "green", "purple"];
let color;
let moves = 0;
let gameOver;
let category = [];
let answer = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    noStroke();
    rectMode(CENTER);
    textAlign(CENTER);
    gameOver = false;
    y = height / 2;
    drawBoard();
    //Dice
    button = createButton('Dice');
    answerBtn = createButton('Answer');
    button.position(10, 10);
    button.size(70, 70);
    button.mousePressed(die);
    eGQ = eGeographyQ;
    eGA = eGeographyA;
    eMQ = eMathsQ;
    eMA = eMathsA;
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
    giveQuestion()
    if (moves >= 20){
        console.log("you won!!!");
        background(220);
        text("The Game is over. Player1 is the winner!", width/2, height/2);
        button.hide();
        answerBtn.hide();
        gameOver = true;
        
    }
    
    
        
    
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
    if (gameOver === false){
    rect(width/2,120, 400,200);
    
    console.log(moves);
    if (moves %4 === 0){
    // math 
    category = eMQ;
    answer = eMA;
    }
    if (moves %4 === 1){
    // random
    category = ["randomQ"];
    answer = ["randomA"];
    }
    if (moves % 4 === 2){
    // geo
    category = eGQ;
    answer = eGA;
    }
    if (moves %4 === 3){
    // popculture
    category = ["popcultureQ"];
    answer = ["popcultureA"];
       }
    let question = parseInt(random(0, category.length));
    console.log(question);
    text(category[question],width/2,120);
    answerBtn.show();
    answerBtn.position(width/2 - 30, 140);
    answerBtn.mousePressed(function() {text(answer[question], width/2, 180);
    category.splice(question, 1);
    answer.splice(question, 1);
    answerBtn.hide();
    console.log(category);
    console.log(answer);
    //eGeographyA.remove(question);
    });
    //Husk at fjerne spørgsmål når de er brugt 
    
    }
}


function draw() {

}
