let eGQ = [];
let eGA = [];
//Vi har lavet spørgsmål med forskellig sværhedsgrad, men kan ikke nå at implementere en mulighed for at vælge
//sværhedsgrad, så 
var eGeographyQ = ["What is the capital of Sweden?", "What is the capital of Norway?", "Which country is the biggest in the world?", "Copenhagen is the capital of…?", "What is the capital of Germany?", "Paris is the capital of…?", "Brussels is the capital of…?", "Athens is the capital of…?", "Which country is the best country?", "Which country is the most populated?"];
var eGeographyA = ["Stockholm", "Oslo", "Russia", "Denmark", "Berlin", "France", "Belgium", "Greece", "Denmark", "China"];

var mGeographyQ = ["Name a country starting with a V", "Which country has the longest coastline?", "What is the capital of Finland?", "Which country has the Kuala Lumpur as the capital?", "What is the capital of Spain?", "Name a country ending with the letter L", "Name the country with K as the last letter", "Name a country with the last letter M", "The capital of Canada is…?", "The Capital of Egypt is…?"];
var mGeographyA = ["Vanuatu, Venezuela or Vietnam", "Canada", "Helsinki", "Malaysia", "Madrid", "Nepal, Portugal, Senegal, Brazil or Israel", "Denmark", "Belgium, United Kingdom or Vietnam", "Ottawa", "Cairo"];

var hGeographyQ = ["How many countries exist officially?", "Which country has the biggest number of neighbouring countries?", "Name the capital of Australia?", "Name a country with exactly 8 neighbouring countries", "How many countries in the EU?", "What country is the smallest in the world?", "Country furthest from Denmark?", "Name the country with the longest coastline?", "What country is the least populated in the world?", "Lomé is the capital of…?"];
var hGeographyA = ["195", "Russia (with 16)", "Canberra", "France, Austria, Turkey, Serbia, Tanzania or Zambia", "27", "Vatican City", "New Zealand", "Canada", "Vatican City (about 800 people)", "Togo"];

var eMathsQ = ["2 + 5", "9 - 4", "2 ∙ 3", "4 / 2", "10 ∙ 2", "3 ∙ 4", "17 + 5", "23 + 8", "41 - 17", "32 - 9"];
var eMathsA = ["7", "5", "6", "2", "20", "12", "22", "31", "24", "23"];

var mMathsQ = ["9 ∙ 19", "1 + 1 + 1 + 1 + 1 ∙ 0 + 1", "9 + 9 ∙ 6", "101 - 12", "11 ∙ 17", "12 ∙ 18", "9 ∙ 7", "5!", "4! ∙ 2", "6 ∙ 6"];
var mMathsA = ["117", "5", "72", "89", "187", "216", "63", "120", "48", "36"];

var hMathsQ = ["144 / 32", "107 ∙ 11", "7!", "8!", "6! ∙ 2", "5432 / 4", "9! / 9", "999 ∙ 5", "207 ∙ 9", "9 ∙ 9 ∙ 9"];
var hMathsA = ["4.5", "1177", "5040", "40320", "1440", "1358", "40320 (8!)", "4995", "1863", "729"];

var ePopcultureQ = ["What does Hakuna Matata mean?", "What movie in 2019 topped Avatar as the highest-grossing film of all time?", "Which tech entrepreneur wanted to name his son X Æ A-12?", "Which country is ABBA from?", "Who has the hit singles “Perfect” and “Shape of You”?", "Who were the lead actors in the movie Twilight?", "Which movies is the line “Life is like a box of chocolate” from?", "What famous Christmas song is Mariah Carey known for?", "Name Donald Duck's three nephews", "When will Queen Elizabeth II die?"];
var ePopcultureA = ["No worries", "Avengers: Endgame", "Elon Musk", "Sweden", "Ed Sheeran", "Robert Pattinson and Kristen Stewart", "Forrest Gump", "All I Want for Christmas Is You", "Louie, Dewey, and Huey", "Never (she's obviously immortal)"];

var mPopcultureQ = ["What is the name of Ariel and Prince Eric's daughter?", "Which Disney Princess sings “Once Upon a Dream”?", "How many Star Wars movies are there (not including spin-offs like Rogue One: A Star Wars Story and Solo)?", "Who was the drummer for The Beatles?", "How many movies are there in the film series The Godfather?", "How many movies has Tom Hanks been in?", "How many ghosts are there in A Christmas Carol?", "What is Tim Burton's 1993 famous Christmas movie?", "What company has used Santa Claus in its advertisements every year since 1931?", "Black Panther was played by which famous actor?"];
var mPopcultureA = ["Princess Melody", "Aurora (Sleeping Beauty)", "9", "Ringo Starr", "3", "More than 72", "Four (Christmas Past, Christmas Present, Christmas Future & Jacob Marley)", "The Nightmare Before Christmas", "Coca-Cola", "Chadwick Boseman"];

var hPopcultureQ = ["What is the real name of Joe Exotic (Tiger King)?", "How many kids does Angelina Jolie have?", "What year did Disneyland open?", "What is the name of Wendy's dog in Peter Pan?", "How many brothers does Prince Hans of the Southern Isles have in Frozen?", "What was the first music video played on MTV?", "What was Freddie Mercury's original name?", "Which movie (adjusted for inflation) is the highest-grossing movie to date?", "What was the first Pixar movie", "What year was Britney Spears' album Oops!… I Did It Again released?"];
var hPopcultureA = ["Joseph Allen Maldonado-Passage", "6", "1955", "Nana", "12", "Video Killed the Radio Star", "Frederick Bulsara", "Gone with the Wind", "Toy Story", "2000"];

var eRandomQ = ["How many hours in a day?", "What is the atomic symbol for iron?", "Who is the best teacher at Sukkertoppen? (in your opinion)", "What keeps going up, but never goes down?", "You own it, but other people use it more than you. What is it?", "What color is grass typically?", "Which 'gymnasie' is the best 'gymnasie'?", "How many seasons of Game of Thrones were made?", "Name a Disney Princess", "How mant minutes in an hour?"];
var eRandomA = ["24", "Fe", "This is just an oppertunity to get plus point with whichever teacher (automatic right answer)", "Your age", "Your name", "Green", "Sukkertoppen gymnasie", "8", "Snow White, Cinderella, Aurora, Ariel, Belle, Jasmine, Pocahontas, Mulan, Tiana, Rapunzel, Merida, and Moana (and probably more tbh)", "60"];

var mRandomQ = ["How old is Mette Frederiksen?", "How many minutes in a day?", "How old is Donald Trump", "How many seconds in a hour", "How old is president Biden?", "What is Trump's middle name?", "What is a bibliokept?", "What is the 17th letter of the english alphabet?", "What does ttyl stand for?", "Name the most watched Youtube video to date"];
var mRandomA = ["44 years old", "1440", "75 years old", "3600", "79 years old", "John", "Someone who steals", "Q", "'talk to you later'", "'Baby Shark Dance'"];

var hRandomQ = ["How many hours in year?", "The color magenta has which frequency on the color spectrum?", "When did the French revolution start?", "Name the best selling book in 2020", "Who sings These Boots Are Made For Walkin'?", "Name the best selling game in the US in 2020", "What movie is the most watched movie on NETFLIX?", "What show is the most watched show on NETFLIX?", "When was the first case of Covid-19 recorded?", "Where did the term alcohol come from?"];
var hRandomA = ["About 8765.81277 hours", "None (it doesn't technically exist)", "5th of May 1789", "'A Promised Land' by Barack Obama", "Nancy Sinatra", "Call of Duty: Black Ops Cold War", "Red Notice (364 million hours of watchtime)", "Squid Game (1.65 billion hours of watchtime for season 1)", "17. November 2019", "The Arabic word 'al-kuhul' (al kohl) meaning 'fine powder'"];
