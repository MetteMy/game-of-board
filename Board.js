//let y;
//let dieMoves;
let players = [];
let squareX = [];
let colors = ["red", "yellow", "green", "purple"];
let color;
let playerColors = ["white", "darkgreen", "blue", "pink", "indigo"];
//let moves = 0;
let gameOver;
let category = [];
let answer = [];
let diceBtn;
let answerBtn;
let turns;
let playerSelect;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    noStroke();
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(20);
    gameOver = false;
    diceBtn = createButton('Dice');
    answerBtn = createButton('Answer');
    correctAnswBtn = createButton('Correct answer');
    wrongAnswBtn = createButton('Wrong answer');
    startGameBtn = createButton('startgame');
    playerSelect = createSelect(); 
    startGameBtn.size(200,30);
    playerSelect.option('1');
    playerSelect.option('2');
    playerSelect.option('3');
    playerSelect.option('4');
    playerSelect.option('5');
    playerSelect.position(width/2,20);
    turns = 0;
    startGameBtn.position(width/2, height/2);
    diceBtn.hide();
    correctAnswBtn.hide();
    wrongAnswBtn.hide();
    answerBtn.hide();
    startGameBtn.mousePressed(function(){
    startGameBtn.hide();
    diceBtn.show();
    drawBoard();
    for (let i = 0; i < playerSelect.value(); i++) {
        players.push(new Player(playerColors[i], playerColors[i], height / 2 + 40 * i));
    }
    console.log(players);
    
    drawBoard();


    })

    //Dice
    diceBtn.position(10, 10);
    diceBtn.size(70, 70);
    diceBtn.mousePressed(function () {
        //turns = turns + 1; // changes whoose turn it is
        console.log("turns: " + turns);
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
        rect(width / 20 * i + 32, height/2, 50, 40 * players.length);
        squareX.push(width / 20 * i + 32);
        pop();
    }

    for (let i = 0; i < players.length; i++) {
        players[i].display();
        console.log("players at drawboard: "+players);

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
        console.log("this.moves: " + this.moves);
        console.log("this.player: " + this.player);
        drawBoard();
        this.display();
        this.giveQuestion()
    }
    die() {
        push();
        fill(220);
        rect(90, 30, 20, 80);
        pop();
        this.dieMoves = parseInt(random(1, 7));
        this.move();
        text(this.dieMoves, 90, 50);

        if (this.moves >= 20) {
            console.log("you won!!!");
            background(220);
            text("The Game is over. " + this.playername + " is the winner!", width / 2, height / 2);
            diceBtn.hide();
            answerBtn.hide();
            wrongAnswBtn.hide();
            correctAnswBtn.hide();
            gameOver = true;

        }
    }
    giveQuestion() {
        if (gameOver === false) {
            
            console.log(this.playercolor);
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
            console.log("question number: " + question);
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
                correctAnswBtn.position(width / 2 + 30, 140);
                wrongAnswBtn.position(width / 2 - 130, 140);
                correctAnswBtn.show();
                wrongAnswBtn.show();

            });
            wrongAnswBtn.mousePressed(function () {

                turns += 1;
                wrongAnswBtn.hide();
                correctAnswBtn.hide();
                
            });

            correctAnswBtn.mousePressed(function () {
                wrongAnswBtn.hide();
                correctAnswBtn.hide();

            });


        }
    }

}