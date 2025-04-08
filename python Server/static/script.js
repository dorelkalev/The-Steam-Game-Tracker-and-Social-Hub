//Get the HTML elements by ID to use for Javascript logic:
const gameContainer = document.getElementById("game-title");

//Database integration
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

connection.connect((err) => {
    if (err) {
    console.error('Error connecting to database:', err);
    return;
    }
    console.log('Connected to database!');
});





function gameSearch() {

const searchTerm = document.getElementById("search").value;

    const sql = `
        SELECT game_title, game_image, playtime, completion, friends_playing 
        FROM games
        WHERE game_title LIKE ?;
    `;

    connection.query(sql, [`%${searchTerm}%`], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }

        console.log('Query results:', results);

        gameContainer.innerHTML = "";

        if (results.length > 0) {
            results.forEach(game => {
                const gameElement = document.createElement('div');
                gameElement.classList.add('game-result');

                gameElement.innerHTML = '
                    <h2>${game.game_title} </h2>
                    <img src="${game.game_image}" alt="${game.game_title}" class="ImgDesign" style="margin-left: 20px;">
                    <p>Playtime: ${game.playtime}</p>
                    <p>Completion: ${game.completion}</p>
                    <p>Friends Playing: ${game.friends_playing}</p>
                ';
                gameContainer.appendChild(gameElement);
            });
        } 
        else {
            gameContainer.innerHTML = "<p>No games found!</p>";
        }
    });
}







function openNav() {
    document.getElementById("mySidebar").style.left = "0";
    document.body.style.cursor = "none";
}

function closeNav() {
    document.getElementById("mySidebar").style.left = "-250px";
    document.body.style.cursor = "default";
}

const fadeEffect = document.querySelector('.fade-effect');
fadeEffect.style.animation = 'fadeInOut 3s infinite';
