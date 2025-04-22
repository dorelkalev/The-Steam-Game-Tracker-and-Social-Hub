document.addEventListener('DOMContentLoaded', () => {
    const trailElements = Array.from({ length: 30 }, () => {
        const el = document.createElement('div');
        el.className = 'trail';
        document.body.appendChild(el);
        return { el: el, x: 0, y: 0 };
    });

    let mouseX = 0;
    let mouseY = 0;
    const positions = Array(trailElements.length).fill({ x: 0, y: 0 });

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function lerp(start, end, factor) {
        return start * (1 - factor) + end * factor;
    }

    function updateTrail() {
        positions.unshift({ x: mouseX, y: mouseY });
        positions.length = trailElements.length;

        trailElements.forEach((trail, index) => {
            const target = positions[index];

            trail.x = lerp(trail.x, target.x, 0.3);
            trail.y = lerp(trail.y, target.y, 0.3);

            trail.el.style.left = `${trail.x}px`;
            trail.el.style.top = `${trail.y}px`;
            trail.el.style.opacity = 1 - (index / trailElements.length);
        });

        requestAnimationFrame(updateTrail);
    }

    updateTrail();
});