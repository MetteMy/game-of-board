//Variabler oprettes
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


function setup() {
    rectMode(CENTER); //Firkanter tegnes fra midten
    textAlign(CENTER); //Tekst er centeret
    createCanvas(windowWidth, windowHeight);//Canvas tilpasses til computeren
    background("#1982C4");//blå
    strokeWeight(2);

    textSize(20);
    gameOver = false;//Sætter variabel til false

    diceBtn = createButton('Dice').style('background-color', "white");//Opretter knap: 'dice'
    answerBtn = createButton('Answer').style('background-color', "white").position(width / 2, 160);//Opretter knap: 'Answer'
    correctAnswBtn = createButton('Correct answer').style('background-color', "#8AC926").position(width / 2, 140);//Opretter knap: 'Correct answer'
    wrongAnswBtn = createButton('Wrong answer').style('background-color', "#FF595E").position(width / 2, 140);//Opretter knap: 'Wrong answer'
    startGameBtn = createButton('startgame').style('background-color', "white");//Opretter startknap: 'startgame'
    playerSelect = createSelect().style('background-color', "white"); //Opretter select
    answerInput = createInput().size(70).position(width / 2, 140);
    //Indsætter valgmuligheder for antal players

    playerSelect.option('2');
    playerSelect.option('3');
    playerSelect.option('4');
    playerSelect.option('5');
    playerSelect.position(width / 2, 160);//Placering for valg af antal spillere knap

    //question difficulty select
    difficultySelect = createSelect().style('background-color', "white");
    difficultySelect.option('easy');
    difficultySelect.option('medium');
    difficultySelect.option('hard');
    difficultySelect.position(width / 2, 200);

    
    console.log(players);
    

    
    turns = 0;//Der startes med ikke at være foretaget ture
    startGameBtn.size(100, 30);//Placering for start spil knap
    startGameBtn.position(width / 2, height / 2);
    diceBtn.hide();//'dice' kommer først frem når spillet starter
    correctAnswBtn.hide();
    wrongAnswBtn.hide();
    answerBtn.hide();
    answerInput.hide();
    startGameBtn.mousePressed(function () {//Når der trykkes på 'startgame' sker følgene:
        playerSelect.hide();
        difficultySelect.hide();
        startGameBtn.hide();//'startgame' skjules
        diceBtn.show();//'dice' kommer frem på skærmen
        drawBoard();

        for (let i = 0; i < playerSelect.value(); i++) {//Inden for i=0 til det valgte antal spillere sker følgende
            //Opretter spiller efter nedenstående objekt
            //For hver player skal en farve vælges og y- værdi for position
            //For loopet kører player antal, dvs. det antal playere spilelren har valgt
            //Farven vælges efter farve array
            //Position for y-værdi vælges til sidst
            players.push(new Player(playerColors[i], "player" + (i + 1), height / 3 * 2 + 40 * i));
        }

        if (difficultySelect.value() === 'easy') {
            mathsQ = eMathsQ;
            mathsA = eMathsA;
            popcultureQ = ePopcultureQ;
            popcultureA = ePopcultureA;
            geographyQ = eGeographyQ;
            geographyA = eGeographyA;
            randomQ = eRandomQ;
            randomA = eRandomA;
        }
        if (difficultySelect.value() === 'medium') {
            mathsQ = mMathsQ;
            mathsA = mMathsA;
            popcultureQ = mPopcultureQ;
            popcultureA = mPopcultureA;
            geographyQ = mGeographyQ;
            geographyA = mGeographyA;
            randomQ = mRandomQ;
            randomA = mRandomA;
        }
        if (difficultySelect.value() === 'hard') {
            mathsQ = hMathsQ;
            mathsA = hMathsA;
            popcultureQ = hPopcultureQ;
            popcultureA = hPopcultureA;
            geographyQ = hGeographyQ;
            geographyA = hGeographyA;
            randomQ = hRandomQ;
            randomA = hRandomA;
        }
        console.log(players);

        drawBoard();


    })

    //

    //Dice
    diceBtn.position(10, 10);//Angiver positionen for terning
    diceBtn.size(70, 70);//Angiver terningens størrelse
    diceBtn.mousePressed(diceRoll);

    document.addEventListener("keyup", function (event) {
        //event.preventDefault();
        if (keyCode == RIGHT_ARROW) { // piletast fordi et bogstav ville udløses når man skriver svar
            diceRoll();
            console.log("keycode is: " + keyCode);

        }

    });
    function diceRoll() {

        console.log("turns: " + turns);
        for (let i = 0; i < players.length; i++) {
            if (turns % players.length === i) {
                players[i].die();

            }

        }
    }



}


function drawBoard() {//Funktion der tegner spillebrættet

    for (let i = 0; i < 20; i++) {//Der tegnes 20 felter
        color = i % 4;//"Resten" når der divideres med 4. Angiver hvilket felt brikken rykker til
        push();//Det er kun det ene felt der bliver farvet
        fill(colors[color]);//Arrayet hedder colors. Derfor colors
        //color angiver hvilket nummer i arrayet vi skal bruge (altså hvilken farve vi fylder med)
        //Husk at color ovenover er defineret til at være lig med i%4
        rect(width / 20 * i + 32, height, 50, 450);//Tegner feltet. Felternes højde varieres efter antal spillere
        squareX.push(width / 20 * i + 32);//
        pop();//Ender push
    }

    for (let i = 0; i < players.length; i++) {//Loopet kører det antal gange som der er players.
        //Length angiver længden af arrayet 'players'
        players[i].display();//Henviser til metoden display som er længere nede
        console.log("players at drawboard: " + players);
    }
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
        diceBtn.hide();
        push();
        noStroke();
        fill("#1982C4");
        rect(90, 30, 20, 80);
        pop();
        this.dieMoves = parseInt(random(1, 5));
        this.move();
        text(this.dieMoves, 90, 50);


        // board is 20 tiles long, so when  we reach 20, the game is over 
        if (this.moves >= 20) {
            console.log("you won!!!");
            background("#1982C4");
            text("The Game is over. " + this.playername + " is the winner!", width / 2, height / 2);
            diceBtn.hide();
            answerBtn.hide();
            wrongAnswBtn.hide();
            correctAnswBtn.hide();
            answerInput.hide();
            gameOver = true;

        }
    }
    giveQuestion() {
        if (gameOver === false) {
            answerInput.value("");
            console.log(this.playercolor);
            push();
            fill(this.playercolor);
            rect(width / 2, 120, 1000, 250);
            pop();
            push();
            fill(colors[this.moves % 4]);
            rect(width / 2, 120, 900, 230);
            pop();
            if (this.moves % 4 === 0) {
                // math 
                category = mathsQ;
                answer = mathsA;

            }
            if (this.moves % 4 === 1) {
                // random
                category = randomQ;
                answer = randomA;
            }
            if (this.moves % 4 === 2) {
                // geo
                category = geographyQ;
                answer = geographyA;
            }
            if (this.moves % 4 === 3) {
                // popculture
                category = popcultureQ;
                answer = popcultureA;
            }

            question = parseInt(random(0, category.length));
            console.log("question number: " + question);
            text(category[question], width / 2, 120);
            answerInput.show();
            answerBtn.show();



            answerBtn.mousePressed(checkAnswer);
            document.addEventListener("keyup", function (event) {
                //event.preventDefault();
                if (keyCode == 13) {
                    checkAnswer();
                    console.log("keycode is: " + keyCode);

                }

            });


            function checkAnswer() {
                answerBtn.hide();
                text(answer[question], width / 2, 200);

                console.log("input :" + answerInput.value().toLowerCase());
                console.log("answer at input check :" + answer[question].toLowerCase());


                if (answer[question].toLowerCase().match(answerInput.value().toLowerCase()) && answerInput.value().toLowerCase() != "") {
                    // if answer is correct
                    text("Correct, you can try again!", width / 2, 230);
                    diceBtn.show();
                    console.log("the answer was correct");

                } else {
                    text("incorrect, next player", width / 2, 230);
                    turns += 1;
                    diceBtn.show();

                }


                /*category.splice(question, 1);// det her virker ikke 
                answer.splice(question, 1);
                answerBtn.hide();
                console.log("category: " + category);
                console.log("answer: " + answer);
                
                
*/
            }





        }
    }

}