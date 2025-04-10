//Get the HTML elements by ID to use for Javascript logic:
const gameContainer = document.getElementById("game");
const friendContainer = document.getElementById("friend");
const communityContainer = document.getElementById("community");

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

                gameElement.innerHTML = `
                    <h2>${game.game_title} </h2>
                    <img src="${game.game_image}" alt="${game.game_title}" class="ImgDesign" style="display: inline-block; margin-left: 20px;">
                    <p>Playtime: ${game.playtime}</p>
                    <p>Completion: ${game.completion}</p>
                    <p>Friends Playing: ${game.friends_playing}</p>
                `;
                gameContainer.appendChild(gameElement);
            });
        } 
        else {
            gameContainer.innerHTML = "<p>No games found!</p>";
        }
    });
}

function showFriendInfo() {
    friendContainer.innerHTML = '';

    const sql = `
        SELECT id, username, profile_picture, status, favorite_game, total_playtime
        FROM friends;
    `;

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching friends:', err);
            return;
        }

        results.forEach((friend, index) => {
            const friendDiv = document.createElement('div');
            friendDiv.classList.add('friend-card');
            friendDiv.style.marginBottom = '15px';
            friendDiv.style.border = '1px solid #ccc';
            friendDiv.style.padding = '10px';
            friendDiv.style.borderRadius = '8px';

            friendDiv.innerHTML = `
                <div>
                    <img src="${friend.profile_picture}" alt="${friend.username}" 
                         style="width: 40px; height: 40px; border-radius: 50%; vertical-align: middle;">
                    <strong style="margin-left: 10px;">${friend.username}</strong>
                </div>
                <div id="friend-details-${index}" style="display: none; margin-top: 10px;">
                    <p>Status: ${friend.status}</p>
                    <p>Favorite Game: ${friend.favorite_game}</p>
                    <p>Total Playtime: ${friend.total_playtime} hours</p>
                </div>
            `;

            friendContainer.appendChild(friendDiv);
        });
    });
}

function revealFriendDetails() {
    const detailDivs = document.querySelectorAll('[id^="friend-details-"]');
    detailDivs.forEach(div => {
        div.style.display = 'block';
    });
}

function communityButton(event) {
    event.preventDefault();

    const reviewText = document.getElementById('search2').value;
    const postBox = document.getElementById('post-box');

    const username = 'PlayerOne'; // Replace with actual logged-in username
    const gameTitle = 'Current Game Title'; // Replace with actual selected game title

    if (!reviewText.trim()) {
        alert("Please write something before posting.");
        return false;
    }

    const sql = `
        INSERT INTO community_posts (username, game_title, post_text)
        VALUES (?, ?, ?);
    `;

    connection.query(sql, [username, gameTitle, reviewText], (err, result) => {
        if (err) {
            console.error('Error inserting post:', err);
            return;
        }

        console.log('Post inserted with ID:', result.insertId);

        const newPost = document.createElement('div');
        newPost.classList.add('community-post');
        newPost.style.border = '1px solid #aaa';
        newPost.style.padding = '10px';
        newPost.style.marginTop = '10px';
        newPost.style.borderRadius = '6px';

        newPost.innerHTML = `
            <strong>${username}</strong> on <em>${gameTitle}</em> says:
            <p>${reviewText}</p>
        `;

        postBox.prepend(newPost);

        document.getElementById('search2').value = ''; // Clear input
    });

    return false;
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
