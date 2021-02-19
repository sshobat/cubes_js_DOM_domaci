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



//starting object

var zvezda = {
    teamName: 'FC RED STAR',
    teamLogoPath: './img/fkcz_logo.png',
    teamLogoDesc: 'Red Star logo',
    players: [
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: './img/players/149z69_MilanBorjan2.png'
        },
        {
            firstName: 'Zoran',
            lastName: 'Popovic',
            number: 1,
            position: 'Goalkeeper',
            age: 33,
            photoPath: './img/players/149z69_ZoranPopovic2.png'
        },
        {
            firstName: 'Marko',
            lastName: 'Gobeljic',
            number: 77,
            position: 'Defender',
            age: 29,
            photoPath: './img/players/149z69_MarkoGobeljic2.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Rodic',
            number: 23,
            position: 'Defender',
            age: 30,
            photoPath: './img/players/149z69_MilanRodic2.png'
        },
        {
            firstName: 'Nemanja',
            lastName: 'Milunovic',
            number: 19,
            position: 'Defender',
            age: 32,
            photoPath: './img/players/149z69_NemanjaMilunovic2.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Gajic',
            number: 2,
            position: 'Defender',
            age: 25,
            photoPath: './img/players/149z69_MilanGajic2.png'
        },
        {
            firstName: 'Radovan',
            lastName: 'Pankov',
            number: 6,
            position: 'Defender',
            age: 26,
            photoPath: './img/players/149z69_RadovanPankov2.png'
        },
        {
            firstName: 'Milos',
            lastName: 'Degenek',
            number: 5,
            position: 'Defender',
            age: 27,
            photoPath: './img/players/149z69_MilosDegenek2.png'
        },
        {
            firstName: 'Strahinja',
            lastName: 'Erakovic',
            number: 25,
            position: 'Defender',
            age: 20,
            photoPath: './img/players/149z69_StrahinjaErakovic2.png'
        },
        {
            firstName: 'Guelor',
            lastName: 'Kanga',
            number: 8,
            position: 'Midfilder',
            age: 31,
            photoPath: './img/players/149z69_GelorKanga2.png'
        },
        {
            firstName: 'Marko',
            lastName: 'Ivanic',
            number: 4,
            position: 'Midfilder',
            age: 28,
            photoPath: './img/players/149z69_MirkoIvanic2.png'
        },
        {
            firstName: 'Njegos',
            lastName: 'Petrovic',
            number: 20,
            position: 'Midfilder',
            age: 22,
            photoPath: './img/players/149z69_PetrovicNjegos2.png'
        },
        {
            firstName: 'Veljko',
            lastName: 'Nikolic',
            number: 22,
            position: 'Midfilder',
            age: 22,
            photoPath: './img/players/149z69_VeljkoNikolic2.png'
        },
        {
            firstName: 'Zeljko',
            lastName: 'Gavric',
            number: 24,
            position: 'Midfilder',
            age: 21,
            photoPath: './img/players/149z69_ZeljkoGavric2.png'
        },
        {
            firstName: 'Sekou',
            lastName: 'Sango',
            number: 35,
            position: 'Midfilder',
            age: 32,
            photoPath: './img/players/149z69_SekuSanogo2.png'
        },
    ]
};

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

    var currentIndex, randomIndex, temporaryElement

    for(var i = arr.length - 1; i > 0; i--) {

        randomIndex = Math.floor(Math.random() * i);

        temporaryElement = arr[i];

        arr[i] = arr[randomIndex];

        arr[randomIndex] = temporaryElement;

    }

    return arr;
}

var playersRandomArr = randomPlayers(zvezda.players);

//insert text content and image src

function addContentFS(array) {
    firstSquad.lastChild.querySelector('.img').setAttribute('src', array[i].photoPath);
    firstSquad.lastChild.querySelector('.name').textContent = 'Name: ' + array[i].firstName;
    firstSquad.lastChild.querySelector('.last-name').textContent = 'Last name: ' + array[i].lastName;
    firstSquad.lastChild.querySelector('.number').textContent = 'Number: ' + array[i].number;
    firstSquad.lastChild.querySelector('.position').textContent = 'Position: ' + array[i].position;
    firstSquad.lastChild.querySelector('.age').textContent = 'Age: ' + array[i].age;
}

//print players to article First Squad

function createPlayerFirstSquad(arr) {

    var article = document.createElement('article');

    firstSquad.append(article);

    fillArticle(article);

    addContentFS(arr);
}

var teamOne = [];

for (var i = 0; i < 11; i++) {
    createPlayerFirstSquad(playersRandomArr);
    teamOne.push(playersRandomArr[i]);
}

//insert text content and image src

function addContentRT(arr) {
    reservePlayers.lastChild.querySelector('.img').setAttribute('src', arr[i].photoPath);
    reservePlayers.lastChild.querySelector('.name').textContent = 'Name: ' + arr[i].firstName;
    reservePlayers.lastChild.querySelector('.last-name').textContent = 'Last name: ' + arr[i].lastName;
    reservePlayers.lastChild.querySelector('.number').textContent = 'Number: ' + arr[i].number;
    reservePlayers.lastChild.querySelector('.position').textContent = 'Position: ' + arr[i].position;
    reservePlayers.lastChild.querySelector('.age').textContent = 'Age: ' + arr[i].age;
}

//show players to article Reserve Team

function createPlayerReserveTeam(arr) {

    var article = document.createElement('article');
    reservePlayers.append(article);

    fillArticle(article);

    addContentRT(arr);

}

var teamTwo = [];

for (var i = 11; i < 15; i++) {
    createPlayerReserveTeam(playersRandomArr);
    teamTwo.push(playersRandomArr[i]);
}

//reset-delete all player articles
function resetPlayers() {
    document.querySelector('.first-squad').innerHTML = '';
    document.querySelector('.reserve-players').innerHTML = '';
}

function changeTeamArr() {
    var randomTeamOneIndex = Math.floor(Math.random()*teamOne.length);
    var randomTeamTwoIndex = Math.floor(Math.random()*teamTwo.length);

    var tempPosition = teamOne[randomTeamOneIndex];

    teamOne[randomTeamOneIndex] = teamTwo[randomTeamTwoIndex];
    teamTwo[randomTeamTwoIndex] = tempPosition;

}

// BONUS: ONE RANDOM SUBSTITUTION EVERY MINUTE
function substitution() {

    changeTeamArr();

    resetPlayers();

    for (var i = 0; i < 11; i++) {
        createPlayerFirstSquad(teamOne);
    }

    for (var i = 0; i < 4; i++) {
        createPlayerReserveTeam(teamTwo);
    }

}
    
setInterval(substitution, 60000);

