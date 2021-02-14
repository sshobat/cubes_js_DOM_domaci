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


var teamData = {
    teamName: 'FC Red Star',
    teamLogoPath: './img/fkcz_logo.png',
    teamLogoDesc: 'Red Star logo',
    players: [
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: '\img\players\fkcz_logo.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: '\img\players\fkcz_logo.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: '\img\players\fkcz_logo.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: '\img\players\fkcz_logo.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: '\img\players\fkcz_logo.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: '\img\players\fkcz_logo.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: '\img\players\fkcz_logo.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: '\img\players\fkcz_logo.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: '\img\players\fkcz_logo.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: '\img\players\fkcz_logo.png'
        },
        {
            firstName: 'Milan',
            lastName: 'Borjan',
            number: 82,
            position: 'Goalkeeper',
            age: 34,
            photoPath: '\img\players\fkcz_logo.png'
        }
    ]
}

// HEADER

//assign header tag to variable
var header = document.querySelector('header');

//insert logo image
var logo = window.document.createElement('img');
logo.setAttribute('src', teamData.teamLogoPath);
logo.setAttribute('alt', teamData.teamLogoDesc);
header.appendChild(logo);

//insert h1
var headline = window.document.createElement('h1');
header.after(headline);
document.querySelector('h1').innerHTML = teamData.teamName;

//MAIN

//assign main tag to variable
var main = document.querySelector('main');

//add first-squad section
var firstSquad = document.createElement('section');
main.appendChild(firstSquad);

firstSquad.classList.add('first-squad');

//add players
var article = document.createElement('article');
firstSquad.prepend(article);

var player = "";









document.querySelector('.first-squad article').innerHTML = '<div>Proba</div>';





//add reserve-players section
var reservePlayers = document.createElement('section');
main.appendChild(reservePlayers);

reservePlayers.classList.add('reserve-players');


