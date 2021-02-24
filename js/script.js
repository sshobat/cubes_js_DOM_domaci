// ***** JS DOM HOMEWORK *****




// - Create a page displaying profiles of 15 players of your favorite football team


// PAGE STRUCTURE

// - Page should have a header on the top, containing team logo on the left of the header

// - Below the header there should be a team name

// - Below that there should be a section displaying first squad players (11 of them in total, 4 players in a row)

// - Below that there should be section displaying reserve players

// - Each player profile should contain image, name, last name, player number, position and age in following format:

// image

// Name: Ronaldinho
// Last name: Gaucho
// Number: 9
// Position: Forward
// Age: 27

// - Each time page reloads random 11 players should be selected for starting squad, the rest of them should be in reserves


// FOLDER STRUCTURE

// - You should have main folder called FootballPlayers

// - Inside of that you should have index.html file, as well as css, js and images folders


// DATA STRUCTURE

// - There should be an object containing team data

// - It should contain team name, team logo path, and players properties

// - Players property should be an array of objects

// - Each object should contain single player data (Name, Last name, Number etc.)


// HOW PAGE SHOULD BE CONSTRUCTED

// - In the start in the HTML file you should have only container elements, like header, main section and similar elements you may need

// !!! IMPORTANT !!!

// - All other elements, like logo, team name, and player profiles should be added from JS, using data from existing team object


// BONUS - PLAYER SUBSTITUTION :)

// Each 60 seconds one random player from starting squad should be replaced with random player from reserves



//starting object and array

var zvezda = {
    teamName: 'FC RED STAR',
    teamLogoPath: './img/fkcz_logo.png',
    teamLogoDesc: 'Red Star logo',
    players: []
};

console.log(zvezda);

var playerArr = [
    ['Milan', 'Borjan', 82, 'Goalkeeper', 34, './img/players/149z69_MilanBorjan2.png'], 
    ['Zoran', 'Popovic', 1, 'Goalkeeper', 33, './img/players/149z69_ZoranPopovic2.png'],
    ['Marko', 'Gobeljic', 77, 'Defender', 29, './img/players/149z69_MarkoGobeljic2.png'],
    ['Milan', 'Rodic', 23, 'Defender', 30, './img/players/149z69_MilanRodic2.png'],
    ['Nemanja', 'Milunovic', 19, 'Defender', 32, './img/players/149z69_NemanjaMilunovic2.png'],
    ['Milan', 'Gajic', 2, 'Defender', 25, './img/players/149z69_MilanGajic2.png'],
    ['Radovan', 'Pankov', 6, 'Defender', 26, './img/players/149z69_RadovanPankov2.png'],
    ['Milos', 'Degenek', 5, 'Defender', 27, './img/players/149z69_MilosDegenek2.png'],
    ['Strahinja', 'Erakovic', 25, 'Defender', 20, './img/players/149z69_StrahinjaErakovic2.png'],
    ['Guelor', 'Kanga', 8, 'Midfilder', 31, './img/players/149z69_GelorKanga2.png'],
    ['Marko', 'Ivanic', 4, 'Midfilder', 28, './img/players/149z69_MirkoIvanic2.png'],
    ['Njegos', 'Petrovic', 20, 'Midfilder', 22, './img/players/149z69_PetrovicNjegos2.png'],
    ['Veljko', 'Nikolic', 22, 'Midfilder', 22, './img/players/149z69_VeljkoNikolic2.png'],
    ['Zeljko', 'Gavric', 24, 'Midfilder', 21, './img/players/149z69_ZeljkoGavric2.png'],
    ['Sekou', 'Sango', 35, 'Defender', 32, './img/players/149z69_SekuSanogo2.png']
];

console.log(playerArr);

function Player(name, lastName, number, position, age, photoPath) {
    this.firstName = name;
    this.lastName = lastName;
    this.number = number;
    this.position = position;
    this.age = age;
    this.photoPath = photoPath;
}

function fillZvezdaObject() {
    for(var i = 0; i < playerArr.length; i++) {
        zvezda.players.push(new Player(playerArr[i][0], playerArr[i][1], playerArr[i][2], playerArr[i][3], playerArr[i][4], playerArr[i][5]));
    }
}
fillZvezdaObject();

console.log(zvezda);

//HTML
/////////////////////////////////////////////////////////////////////////////////

//assign header tag to variable
var header = document.querySelector('header');

var container = document.createElement('div');
header.appendChild(container);

//insert logo image
var logo = document.createElement('img');
logo.setAttribute('src', zvezda.teamLogoPath);
logo.setAttribute('alt', zvezda.teamLogoDesc);
container.appendChild(logo);

//insert h1
var headline = window.document.createElement('h1');
logo.after(headline);
document.querySelector('h1').innerHTML = zvezda.teamName + ' APPLICATION';

//assign main tag to variable
var main = document.querySelector('main');

//add first-squad section
var firstSquad = document.createElement('section');
main.appendChild(firstSquad);
firstSquad.classList.add('first-squad');

//insert h3 first-squad section
var headingFirstTeam = document.createElement('h3');
main.prepend(headingFirstTeam);
document.querySelector('h3').innerHTML = 'First team';

//add reserve-players section
var reservePlayers = document.createElement('section');
main.appendChild(reservePlayers);
reservePlayers.classList.add('reserve-players');

//insert h3 first-squad section
var headingSecondTeam = document.createElement('h3');
firstSquad.after(headingSecondTeam);
headingSecondTeam.innerHTML = 'Substitutions';

//insert h3 description
var headingDescription = document.createElement('h3');
reservePlayers.after(headingDescription);
headingDescription.innerHTML = 'Application description';

//insert counter
var counterDIV = document.createElement('div');
headingDescription.before(counterDIV);
var counterParagraf = document.createElement('p');
counterDIV.appendChild(counterParagraf);
counterParagraf.setAttribute('id', 'timerNum');
document.getElementById('timerNum').textContent = "20";

var counterText = document.createElement('p');
counterParagraf.before(counterText);
counterText.setAttribute('id', 'timerText');
document.getElementById('timerText').textContent = "Timer:";

//insert p description
var description = document.createElement('p');
headingDescription.after(description);
description.textContent = 'The FC Red Star Application is randomly selecting 11 players for starting lineup from the group of 15 players, and placing remaining 4 to the substitution area.';

var descriptionTwo = document.createElement('p');
description.after(descriptionTwo);
descriptionTwo.textContent = 'After that, every one minute, the application is changing randomly selected player from the first team with randomly selected player from the substitutions area.';

//add container 1000px
container.classList.add('container');
headline.classList.add('container');
main.classList.add('container');

//function fill player article with empty elements
function fillArticle(element) {

    var printImage = document.createElement('img');
    printImage.classList.add('img');
    element.appendChild(printImage);

    var printName = document.createElement('p');
    printName.classList.add('name');
    element.appendChild(printName);

    var printLastName = document.createElement('p');
    printLastName.classList.add('last-name');
    element.appendChild(printLastName);

    var printNumber = document.createElement('p');
    printNumber.classList.add('number');
    element.appendChild(printNumber);

    var printPosition = document.createElement('p');
    printPosition.classList.add('position');
    element.appendChild(printPosition);

    var printAge = document.createElement('p');
    printAge.classList.add('age');
    element.appendChild(printAge);

}

////////////////////////////////////////////////////////////////////////////////////

//JS

// randomly mix players from the initial object(array)

function randomPlayers(arr) {

    var randomIndex, temporaryElement

    for(var i = arr.length - 1; i > 0; i--) {

        randomIndex = Math.floor(Math.random() * i);

        temporaryElement = arr[i];

        arr[i] = arr[randomIndex];

        arr[randomIndex] = temporaryElement;

    }

    return arr;
}

var playersRandomArr = randomPlayers(zvezda.players);

console.log(playersRandomArr);

//insert text content and image src

function addContent(section, array, i) {
    console.log(array, i)
    section.lastChild.querySelector('.img').setAttribute('src', array[i].photoPath);
    section.lastChild.querySelector('.name').textContent = 'Name: ' + array[i].firstName;
    section.lastChild.querySelector('.last-name').textContent = 'Last name: ' + array[i].lastName;
    section.lastChild.querySelector('.number').textContent = 'Number: ' + array[i].number;
    section.lastChild.querySelector('.position').textContent = 'Position: ' + array[i].position;
    section.lastChild.querySelector('.age').textContent = 'Age: ' + array[i].age;
}

//print players to article First Squad

function createPlayerFirstSquad(arr, i) {
    console.log(arr);
    var article = document.createElement('article');

    firstSquad.append(article);

    fillArticle(article);

    addContent(firstSquad, arr, i);
}

var teamOne = [];

for (var i = 0; i < 11; i++) {
    createPlayerFirstSquad(playersRandomArr, i);
    teamOne.push(playersRandomArr[i]);
}

//print players to article Reserve Team

function createPlayerReserveTeam(arr, i) {

    var article = document.createElement('article');
    reservePlayers.append(article);

    fillArticle(article);

    addContent(reservePlayers, arr, i);

}

var teamTwo = [];

for (var i = 11; i < 15; i++) {
    createPlayerReserveTeam(playersRandomArr, i);
    teamTwo.push(playersRandomArr[i]);
}

//reset-delete all player articles
function resetPlayers() {
    document.querySelector('.first-squad').innerHTML = '';
    document.querySelector('.reserve-players').innerHTML = '';
}
// resetPlayers();

function changeTeamArr() {
    var randomTeamOneIndex = Math.floor(Math.random()*teamOne.length);
    var randomTeamTwoIndex = Math.floor(Math.random()*teamTwo.length);

    var tempPosition = teamOne[randomTeamOneIndex];

    teamOne[randomTeamOneIndex] = teamTwo[randomTeamTwoIndex];
    teamTwo[randomTeamTwoIndex] = tempPosition;
}

// BONUS: ONE RANDOM SUBSTITUTION EVERY MINUTE

var timerStart = 20;

function substitute() {

    changeTeamArr();

    resetPlayers();

    for (var i = 0; i < 11; i++) {
        createPlayerFirstSquad(teamOne, i);
    }
    for (var i = 0; i < 4; i++) {
        createPlayerReserveTeam(teamTwo, i);
    }
}

setInterval(substitute, (timerStart+1)*1000);

function timer() {

    var timerBox = document.querySelector('main > div');
    var time = document.getElementById('timerNum');

    setInterval(function() {
        
        if (timer > 0) {
            timer--;
        } else {
            timer = timerStart;
        }

        time.textContent = timer;

        if (timer < 11) {
            timerBox.classList.add('red-background'); 
        } else {
            timerBox.classList.remove('red-background'); 
        }
    }, 1000);
}
timer();




