function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');
  }
  
  function createHearts() {
    const fallingHearts = document.querySelector('.falling-hearts');
    const numHearts = 20; // Number of hearts to create
  
    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random fall speed
      heart.style.fontSize = `${Math.random() * 20 + 10}px`; // Random size
      fallingHearts.appendChild(heart);
    }
  }
  
  // Call the function to create hearts
  createHearts();
  