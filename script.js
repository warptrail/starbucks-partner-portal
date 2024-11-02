function setBodyHeight() {
  const bodyHeight = Math.max(document.body.scrollHeight, window.innerHeight);
  document.body.style.minHeight = `${bodyHeight}px`;
}

// Call the function initially and on window resize
setBodyHeight();
window.addEventListener('resize', setBodyHeight);

let hue = 0;

function updateGlowEffect(e) {
  const mouseX = e.clientX; // - window.scrollX;
  const mouseY = e.clientY; // - window.scrollY;
  const gradientSize = 150;

  // Update the hue to create a color-changing effect
  hue = (hue + 1) % 360;

  // Create the gradient with the updated hue
  const gradient = `radial-gradient(circle at ${mouseX}px ${mouseY}px, hsla(${hue}, 100%, 50%, 0.5), rgba(255, 255, 255, 0) ${gradientSize}px)`;

  document.getElementById('glow-container').style.background = gradient;
}

document.addEventListener('mousemove', updateGlowEffect);

function createEmoji(x, y) {
  const emoji = document.createElement('div');
  emoji.textContent = '☕';
  emoji.style.position = 'absolute';
  emoji.style.left = `${x}px`;
  emoji.style.top = `${y}px`;
  emoji.style.fontSize = '2em';
  emoji.style.transition = 'transform 1s, opacity 1s';
  document.body.appendChild(emoji);

  // Animate the emoji
  requestAnimationFrame(() => {
    emoji.style.transform = `translate(${Math.random() * 200 - 100}px, ${
      Math.random() * 200 - 100
    }px)`;
    emoji.style.opacity = 0;
  });

  // Remove the emoji after the animation
  setTimeout(() => {
    emoji.remove();
  }, 1000);
}

document.body.addEventListener('click', function (e) {
  if (
    !e.target.classList.contains('link-card') &&
    !e.target.closest('.link-card')
  ) {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // Create multiple emojis
    for (let i = 0; i < 10; i++) {
      createEmoji(mouseX, mouseY);
    }
  }
});
