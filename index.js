/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {

    // Step 1: Loop over each item in games
    for (let i = 0; i < games.length; i++) {
        const game = games[i];

        // Step 2: Create a new div for each game card
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        // Step 3: Add innerHTML using a template literal
        gameCard.innerHTML = `
            <img class="game-img" src="${game.img}" alt="${game.name}" />
            <h3>${game.name}</h3>
            <p>Backers: ${game.backers.toLocaleString()}</p>
            <p>Goal: $${game.goal.toLocaleString()}</p>
        `;

        // Step 4: Append the card to the container
        gamesContainer.appendChild(gameCard);
    }

}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games

addGamesToPage(GAMES_JSON);


/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const totalContributions = GAMES_JSON.reduce((total, game) => total + game.backers, 0);


contributionsCard.innerHTML = `${totalContributions.toLocaleString()}`;



// set the inner HTML using a template literal and toLocaleString to get a number with commas


// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");
const totalPledged = GAMES_JSON.reduce((total, game) => total + game.pledged, 0);
// set inner HTML using template literal
raisedCard.innerHTML = `$${totalPledged.toLocaleString()}`;


// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");
gamesCard.innerHTML = `${GAMES_JSON.length}`;


/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    const unfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal);
    console.log("Unfunded games count:", unfundedGames.length); 


    addGamesToPage(unfundedGames);

}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    const fundedGames = GAMES_JSON.filter(game => game.pledged >= game.goal);
    console.log("Funded games count:", fundedGames.length);

    addGamesToPage(fundedGames);

}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    addGamesToPage(GAMES_JSON);

}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);

/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
const unfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal);
const unfundedCount = unfundedGames.length;

// create a string that explains the number of unfunded games using the ternary operator
const descriptionText = `
A total of $${GAMES_JSON.reduce((sum, game) => sum + game.pledged, 0).toLocaleString()} has been raised for ${GAMES_JSON.length} games. 
Currently, ${unfundedCount} ${unfundedCount === 1 ? "game remains" : "games remain"} unfunded. 
We need your help to fund these amazing games!
`;

// create a new DOM element containing the template string and append it to the description container
const descriptionElement = document.createElement("p");
descriptionElement.innerText = descriptionText.trim();
descriptionContainer.appendChild(descriptionElement);
/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

// use destructuring and the spread operator to grab the first and second games
const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");
// create a new element to hold the name of the top pledge game, then append it to the correct element
const [topGame, runnerUpGame] = [...GAMES_JSON].sort((item1, item2) => {
    return item2.pledged - item1.pledged;
});
const topGameElement = document.createElement("p");
topGameElement.innerText = `${topGame.name}`;
firstGameContainer.appendChild(topGameElement);
// do the same for the runner up item
const runnerUpElement = document.createElement("p");
runnerUpElement.innerText = `${runnerUpGame.name}`;
secondGameContainer.appendChild(runnerUpElement);

window.filterUnfundedOnly = filterUnfundedOnly;
window.filterFundedOnly=filterFundedOnly;