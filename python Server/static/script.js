const gameContainer = document.getElementById("game");
const friendContainer = document.getElementById("friend");

// Game Search
async function gameSearch() {
    const searchTerm = document.getElementById("search").value;

    try {
        const response = await fetch(`/api/games?q=${encodeURIComponent(searchTerm)}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
        });
        const results = await response.json();

        gameContainer.innerHTML = "";

        if (results.length > 0) {
            results.forEach(game => {
                const gameElement = document.createElement('div');
                gameElement.classList.add('game-result');
                gameElement.innerHTML = `
                    <h2>${game.game_title}</h2>
                    <img src="${game.game_image}" alt="${game.game_title}" class="ImgDesign" style="display: inline-block; margin-left: 20px;">
                    <p>Playtime: ${game.playtime}</p>
                    <p>Completion: ${game.completion}</p>
                    <p>Friends Playing: ${game.friends_playing}</p>
                `;
                gameContainer.appendChild(gameElement);
            });
        } else {
            gameContainer.innerHTML = "<p>No games found!</p>";
        }
    } catch (error) {
        alert('Search failed');
    }
}


async function showFriendInfo() {
    try {
        const response = await fetch('/api/friends', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
        });
        const results = await response.json();

        friendContainer.innerHTML = '';
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
    } catch (error) {
        alert('Failed to load friends');
    }
}

function revealFriendDetails() {
    const detailDivs = document.querySelectorAll('[id^="friend-details-"]');
    detailDivs.forEach(div => {
        div.style.display = 'block';
    });
}

// Community Post
async function communityButton(event) {
    event.preventDefault();
    const reviewText = document.getElementById('search2').value;
    const postBox = document.getElementById('post-box');

    try {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            },
            body: JSON.stringify({
                post_text: reviewText
            })
        });

        const newPost = document.createElement('div');
        newPost.classList.add('community-post');
        newPost.style.border = '1px solid #aaa';
        newPost.style.padding = '10px';
        newPost.style.marginTop = '10px';
        newPost.style.borderRadius = '6px';
        newPost.innerHTML = `
            <strong>${JSON.parse(localStorage.getItem('user')).username}</strong> says:
            <p>${reviewText}</p>
        `;
        postBox.prepend(newPost);
        document.getElementById('search2').value = '';
    } catch (error) {
        alert('Post failed');
    }
}


function openNav() {
    document.getElementById("mySidebar").style.left = "0";
}

function closeNav() {
    document.getElementById("mySidebar").style.left = "-250px";
}


function redirectToDashboard(event) {
    event.preventDefault();
    window.location.href = "/dashboard";
}


const fadeEffect = document.querySelector('.fade-effect');
if (fadeEffect) {
    fadeEffect.style.animation = 'fadeInOut 3s infinite';
}


function saveUserInfo({ username, email = "", first_name = "", last_name = "" }) {
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem("user", JSON.stringify({
        username,
        email,
        first_name,
        last_name,
        registered_at: today
    }));
}


