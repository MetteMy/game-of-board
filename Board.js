//let y;
//let dieMoves;
let players = [];
let squareX = [];
let colors = ["red", "yellow", "green", "purple"];
let color;
//let moves = 0;
let gameOver;
let category = [];
let answer = [];
let button;
let answerBtn;
let turns;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    noStroke();
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(20);
    gameOver = false;
    y = height / 2;
    button = createButton('Dice');
    answerBtn = createButton('Answer');
    drawBoard();
    players.push(new Player("blue", "blue", height / 2 - 20));
    players.push(new Player("Pink", "pink", height/ 2 + 20));
    turns = 0;
    for (let i = 0; i < players.length; i++) {
        players[i].display();
        
    }
    


    //Dice
    button.position(10, 10);
    button.size(70, 70);
    button.mousePressed(function () {
        turns = turns + 1; // changes whoose turn it is
        console.log("turns: "+turns);
        for (let i = 0; i < players.length; i++) {
            if (turns % players.length === i) {
                players[i].die();

            }
            
        }

    });
    eGQ = eGeographyQ;
    eGA = eGeographyA;
    eMQ = eMathsQ;
    eMA = eMathsA;

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
    for (let i = 0; i < players.length; i++) {
        players[i].display();
        
    }
}




function draw() {

}

class Player {
    constructor(playercolor, playername, y) {
        this.moves = 0;
        this.player = squareX[this.moves];
        this.playercolor = playercolor;
        
        this.playername = playername;
        this.y = y;
        this.dieMoves;

    }
    display() {
        push();
        fill(this.playercolor);
        circle(this.player, this.y, 30, 30);
        pop();
    }
    move() {
        this.moves += this.dieMoves;
        this.player = squareX[this.moves];
        console.log("this.moves: "+this.moves);
        console.log("this.player: "+this.player);
        background(this.playercolor);
        drawBoard();
        this.display();
        this.giveQuestion()
    }
    die() {
        push();
        fill(220);
        rect(90, 50, 20, 20);
        pop();
        this.dieMoves = parseInt(random(1, 7));
        
        this.move();
        text(this.dieMoves, 90, 50);

        if (this.moves >= 20) {
            console.log("you won!!!");
            background(220);
            text("The Game is over. "+this.playername+" is the winner!", width / 2, height / 2);
            button.hide();
            answerBtn.hide();
            gameOver = true;

        }
    }
    giveQuestion() {
        if (gameOver === false) {
            rect(width / 2, 120, 400, 200);

            if (this.moves % 4 === 0) {
                // math 
                category = eMQ;
                answer = eMA;
            }
            if (this.moves % 4 === 1) {
                // random
                category = ["randomQ"];
                answer = ["randomA"];
            }
            if (this.moves % 4 === 2) {
                // geo
                category = eGQ;
                answer = eGA;
            }
            if (this.moves % 4 === 3) {
                // popculture
                category = ["popcultureQ"];
                answer = ["popcultureA"];
            }
            let question = parseInt(random(0, category.length));
            console.log("question number: " +question);
            text(category[question], width / 2, 120);
            answerBtn.show();
            answerBtn.position(width / 2 - 30, 140);
            answerBtn.mousePressed(function () {
                text(answer[question], width / 2, 180);
                category.splice(question, 1);// det her virker ikke 
                answer.splice(question, 1);
                answerBtn.hide();
                console.log("category: " + category);
                console.log("answer: " + answer);

            });


        }
    }

}