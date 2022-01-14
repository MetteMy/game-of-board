let players = [];
let squareX = [];
//rød, gul, grøn, lilla
let colors = ["#FF595E", "#FFCA3A", "#8AC926", "#6A4C93"];
let color;
// rød, gul, grøn, lilla, blå
let playerColors = ["#FF595E", "#FFCA3A", "#8AC926", "#6A4C93", "#1982C4"];
let gameOver;
let category = [];
let answer = [];
let diceBtn;
let answerBtn;
let turns;
let playerSelect;
let difficultySelect;
let answerInput;
let question;
let time;
let countDown;


function setup() {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    createCanvas(windowWidth, windowHeight);
    background("#1982C4");//blå
    strokeWeight(2);
    textSize(20);

    gameOver = false;
    diceBtn = createButton('Dice').style('background-color', "white");
    answerBtn = createButton('Answer').style('background-color', "white").size(70, 20).position((width / 2) - 35, 165);
    startGameBtn = createButton('Start Game').style('background-color', "#FFCA3A").style('font-size', '30px').size(200, 80).position((width / 2) - 100, height / 2);
    playerSelect = createSelect().style('background-color', "white").size(40, 20);
    answerInput = createInput().size(140).position((width / 2) - 70, 140);
    rulesBtn = createButton('?').style('background-color', "white").size(20, 20).position(width - 40, 20);
    closeRulesBtn = createButton('close').style('background-color', "#FFCA3A").size(50, 25).position(width / 2 - 25, 450);

    playerSelect.option('2');
    playerSelect.option('3');
    playerSelect.option('4');
    playerSelect.option('5');
    playerSelect.position((width / 2) - 20, 190);


    difficultySelect = createSelect().style('background-color', "white").size(70, 20);
    difficultySelect.option('easy');
    difficultySelect.option('medium');
    difficultySelect.option('hard');
    difficultySelect.position((width / 2) - 35, 240);





    turns = 0;
    diceBtn.hide();
    answerBtn.hide();
    answerInput.hide();
    closeRulesBtn.hide();

    diceBtn.size(70, 70).position(10, 10);
    diceBtn.mousePressed(diceRoll);

    document.addEventListener("keyup", function (event) {
        if (diceBtn.style('display') == 'block') { // så man ikke kan trykke videre rundt om et spørgsmål
            if (keyCode === RIGHT_ARROW) {
                diceRoll();
            }
        }
    });

    rulesBtn.mousePressed(function () {
        playerSelect.hide();
        difficultySelect.hide();
        startGameBtn.hide();
        diceBtn.hide();
        closeRulesBtn.show();
        rulesBtn.hide();

        rect(width / 2, height / 2 + 10, 1000, 410);
        text("The rules", width / 2, 125);
        text("Player one rolls the dice first. If player one answers correctly they get another turn.", width / 2, 180);
        text("A players turn ends when they get a question wrong, or if the timer runs out before they answer the question.", width / 2, 210);
        text("Use right arrow to roll dice or click on the dice button", width / 2, 240);
        text("Use enter to check your answer or click on the answer button", width / 2, 270);
        text("Players start by choosing amount of players and difficulty.", width / 2, 300);
        text("Then starting the game by pressing the 'start game' button.", width / 2, 330);
        text("When you roll the dice you move the amount you roll.", width / 2, 360);
        text("The color you land on corresponds to the type of question you get.", width / 2, 390);
        text("Yellow = Random, Green = Geography, Purple = Pop Culture, Red = Maths", width / 2, 420);
    })

    closeRulesBtn.mousePressed(function () {
        background("#1982C4");//blå
        playerSelect.show();
        difficultySelect.show();
        startGameBtn.show();
        rulesBtn.show();
        closeRulesBtn.hide();
    })

    startGameBtn.mousePressed(function () {
        playerSelect.hide();
        difficultySelect.hide();
        startGameBtn.hide();
        diceBtn.show();
        rulesBtn.hide();
        drawBoard();

        for (let i = 0; i < playerSelect.value(); i++) {
            //Player(farve, navn, y-koordinat)
            players.push(new Player(playerColors[i], "player" + (i + 1), height / 3 * 2 + 40 * i));
        }
        populateCategory();
        drawBoard();
    })




    function diceRoll() {

        for (let i = 0; i < players.length; i++) {
            if (turns % players.length === i) {
                players[i].die();

            }

        }
    }



}

function drawBoard() {
    background("#1982C4");//blå
    for (let i = 0; i < 20; i++) {//Der tegnes 20 felter
        color = i % 4;
        push();
        fill(colors[color]);

        rect(width / 20 * i + 32, height, 50, 450);
        squareX.push(width / 20 * i + 32);
        pop();
    }

    for (let i = 0; i < players.length; i++) {
        players[i].display();

    }
}

function populateCategory() {
    if (difficultySelect.value() === 'easy') {
        var difficulty = "e";
    } if (difficultySelect.value() === 'medium') {
        var difficulty = "m";
    }
    if (difficultySelect.value() === 'hard') {
        var difficulty = "h";
    }
    mathsQ = eval(difficulty + "MathsQ"); // eval eksekverer en string
    mathsA = eval(difficulty + "MathsA"); // fordi man ikke bare kan ligge e til MathsQ.
    popcultureQ = eval(difficulty + "PopcultureQ");
    popcultureA = eval(difficulty + "PopcultureA");
    geographyQ = eval(difficulty + "GeographyQ");
    geographyA = eval(difficulty + "GeographyA");
    randomQ = eval(difficulty + "RandomQ");
    randomA = eval(difficulty + "RandomA");

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
        drawBoard();
        this.display();
        this.giveQuestion()
    }
    die() {
        if (gameOver === false) {
            diceBtn.hide();
            push();
            noStroke();
            fill("#1982C4");
            rect(90, 30, 20, 80);
            pop();
            this.dieMoves = parseInt(random(1, 5));
            this.move();
            text(this.dieMoves, 90, 50);
        }



        if (this.moves >= 20) {
            background("#1982C4"); //blå
            text("The Game is over. " + this.playername + " is the winner!", width / 2, height / 2);
            diceBtn.hide();
            answerBtn.hide();
            answerInput.hide();
            gameOver = true;
            clearInterval(countDown);
        }

    }
    giveQuestion() {
        if (gameOver === false) {
            answerInput.value("");

            drawBoard();
            push();
            fill(this.playercolor);
            rect(width / 2, 120, 1000, 350);
            pop();
            push();
            fill(colors[this.moves % 4]);
            rect(width / 2, 120, 900, 330);
            pop();

            if (this.moves % 4 === 0) {
                findCategory(mathsQ, mathsA);
            }
            if (this.moves % 4 === 1) {
                findCategory(randomQ, randomA);
            }
            if (this.moves % 4 === 2) {
                findCategory(geographyQ, geographyA);
            }
            if (this.moves % 4 === 3) {
                findCategory(popcultureQ, popcultureA);
            }


            text(category[question], width / 2, 120);
            answerInput.show();
            answerBtn.show();


            time = 60000;
            rect(width / 2, 90, 30, 30)
            text((time / 1000), width / 2, 90);

            countDown = setInterval(function () {
                time -= 1000;
                rect(width / 2, 90, 30, 30)
                text((time / 1000), width / 2, 90);
                if (time == 0) {
                    checkAnswer();
                }
            }, 1000);




            answerBtn.mousePressed(checkAnswer);
            document.addEventListener("keyup", function (event) {
                if (answer != "") {
                    if (keyCode == 13) {
                        checkAnswer();
                    }
                }

            });
            function findCategory(queArr, ansArr) {
                category = queArr;
                question = parseInt(random(0, queArr.length));
                answer = ansArr;
            }

            function checkAnswer() {
                if (gameOver === false) {
                    clearInterval(countDown);
                    answerBtn.hide();
                    text(answer[question], width / 2, 200);
                    let playerAnswer = answerInput.value().toLowerCase();
                    let correctAnswer = answer[question].toLowerCase();


                    if (correctAnswer.match(playerAnswer) && playerAnswer.length >= correctAnswer.length * 0.8 || playerAnswer.length >= 4) {
                        text("Correct, you can try again!", width / 2, 230);
                        removeQuestion();
                        diceBtn.show();


                    } else {
                        text("incorrect, next player", width / 2, 230);
                        removeQuestion();
                        turns += 1;
                        diceBtn.show();
                    }

                    function removeQuestion() {

                        if (category == mathsQ) {
                            mathsQ.splice(question, 1);
                            mathsA.splice(question, 1);
                        }
                        if (category == randomQ) {
                            randomQ.splice(question, 1);
                            randomA.splice(question, 1);
                        }
                        if (category == geographyQ) {
                            geographyQ.splice(question, 1);
                            geographyA.splice(question, 1);
                        }
                        if (category == popcultureQ) {
                            popcultureQ.splice(question, 1);
                            popcultureA.splice(question, 1);
                        }

                        answer = "";

                    }
                }


            }





        }
    }

}

