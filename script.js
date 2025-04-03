function openNav() {
    document.getElementById("mySidebar").style.left = "0";
    document.body.style.cursor = "none";
}

function closeNav() {
    document.getElementById("mySidebar").style.left = "-250px";
    document.body.style.cursor = "default";
}

const psButtons = ['circle', 'x', 'square', 'triangle'];

document.addEventListener('mousemove', function (e) {
    const button = psButtons[Math.floor(Math.random() * psButtons.length)];
    const psButtonElement = document.createElement('div');
    psButtonElement.classList.add('ps-button', button);
    document.body.appendChild(psButtonElement);

    const mouseX = e.pageX;
    const mouseY = e.pageY;

    psButtonElement.style.left = `${mouseX - 12}px`;
    psButtonElement.style.top = `${mouseY - 12}px`;

    setTimeout(() => {
        psButtonElement.remove();
    }, 500);
});

const fadeEffect = document.querySelector('.fade-effect');
fadeEffect.style.animation = 'fadeInOut 3s infinite';
