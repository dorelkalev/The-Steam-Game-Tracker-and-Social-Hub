function openNav() {
    document.getElementById("mySidebar").style.left = "0";
    document.body.style.cursor = "none";
}

function closeNav() {
    document.getElementById("mySidebar").style.left = "-250px";
    document.body.style.cursor = "default";
}

document.addEventListener('mousemove', function (e) {
    const button = psButtons[Math.floor(Math.random() * psButtons.length)];
    const psButtonElement = document.createElement('div');
    psButtonElement.classList.add('ps-button', button);
    document.body.appendChild(psButtonElement);

    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const elementWidth = psButtonElement.offsetWidth;
    const elementHeight = psButtonElement.offsetHeight;

    psButtonElement.style.left = `${mouseX - elementWidth / 2}px`;
    psButtonElement.style.top = `${mouseY - elementHeight / 2}px`;

    setTimeout(() => {
        psButtonElement.remove();
    }, 500);
});

const fadeEffect = document.querySelector('.fade-effect');
fadeEffect.style.animation = 'fadeInOut 3s infinite';

function showFriendInfo() {

    var gamesPlayed = document.getElementById("gamesPlayed");
    var totalPlaytime = document.getElementById("totalPlaytime");
    var currentlyPlaying = document.getElementById("currentlyPlaying");

    if (gamesPlayed.style.display === "none") {
        gamesPlayed.style.display = "block";



    }


}