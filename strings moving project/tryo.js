const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const numParticles = 400;

// Create particles
for (let i = 0; i < numParticles; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 50 + 40, // Length of the line
        angle: Math.random() * Math.PI * 2, // Random initial angle
        speed: Math.random() * 0.02 + 0.02, // Rotation speed
        color: 'hsl(' + Math.random() * 360 + ', 100%, 50%)',
        alpha: 1 // Full opacity
    });
}

let mouseX = 0;
let mouseY = 0;
let moving = false;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle) => {
        // Update the angle for rotation effect
        if (moving) {
            // Rotate towards the mouse position
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            particle.angle = Math.atan2(dy, dx);
        } else {
            // Rotate smoothly when stationary
            particle.angle += particle.speed;
        }

        // Calculate the end position of the line based on the angle
        const endX = particle.x + Math.cos(particle.angle) * particle.length;
        const endY = particle.y + Math.sin(particle.angle) * particle.length;

        // Draw the line
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 2; // Fixed line width
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    });

    requestAnimationFrame(animate);
}

// Update mouse position and moving state
window.addEventListener('mousemove', (e) => {
    mouseX = e.x;
    mouseY = e.y;
    moving = true; // Set moving to true on mouse move
});

window.addEventListener('mouseleave', () => {
    moving = false; // Set moving to false when mouse leaves
});

// Stop moving when the mouse is not moving
setInterval(() => {
    moving = false;
}, 100); // Delay to prevent flickering

animate();
