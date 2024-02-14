document.addEventListener('DOMContentLoaded', function () {
  const numDrops = 20;
  const container = document.getElementById('rain-container');

  for (let i = 0; i < numDrops; i++) {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 3 + 1}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`; // Add this line
    //drop.style.width = `${Math.random() * 40 + 10}px`; // Add this line
    //drop.style.height = `${Math.random() * 40 + 10}px`; // Add this line
    drop.style.transform = `rotate(${Math.random() * 20 - 10}deg)`; // Add this line
    
    container.appendChild(drop);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const sentences = [
    'I like you',
    'I like you much',
    'I like you so much',
    'I like you a lot',
    'I like you forever',
    'I have feelings for you',
    'I am crazy about you',
    'I am head over heels for you',
    'I am so in love with you',
    'I have fallen for you',
    'I am yours',
    'You fill my heart',
    'I need you',
    'You are my everything',
    'You are my one and only',
    'I will always love you',
    'You are my angel',
    'You stole my heart',
    'My heart is yours',
    'You are my happiness',
    'I like everything about you',
    'You are my everything',
    'I love you more than words can say',
    'I am nuts about you',
    'You are Moon of my life',
    'You are My Sun and stars',
    'Always',
    'You are my princess',
    'I am in love with you',
    'I want to be yours forever',
    'You are my strength',
    'You are amazing'
    
  ];

  document.getElementById('button').addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    this.textContent = sentences[randomIndex]; // Change the text content of the button
  });
});