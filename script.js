// I love you in 13 languages
const loveTexts = [
  "હું તને પ્રેમ કરું છું",  // Gujarati
  "मैं तुमसे प्यार करता हूँ", // Hindi
  "I love you",               // English
  "Je t'aime",                // French
  "Te amo",                   // Spanish
  "أحبك",                     // Arabic
  "میں تم سے پیار کرتا ہوں",  // Urdu
  "Eu te amo",                // Portuguese
  "Ti amo",                   // Italian
  "Ich liebe dich",           // German
  "S'agapo",                  // Greek
  "Ani ohev otach",           // Hebrew
  "Я тебя люблю"              // Russian
];

// 🎊 CONFETTI EXPLOSION
function confettiBurst() {
  const confettiColors = ['#ff6fb5','#ffd86f','#ff9a9e','#8f7bff','#4169E1'];
  for(let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed; width: 10px; height: 10px; border-radius: 50%;
      background: ${confettiColors[Math.floor(Math.random()*5)]};
      left: ${Math.random()*100}vw; top: -10px;
      animation: confettiFall ${2+Math.random()*3}s linear forwards;
      z-index: 10; pointer-events: none;
    `;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

// 🎹 CALM ROMANTIC PIANO MELODY
function playRomanticPiano() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  const melody = [261.63, 329.63, 392.00, 440.00, 349.23, 392.00, 523.25, 659.25];
  const times = [0, 0.4, 0.8, 1.2, 1.6, 2.0, 2.4, 2.8];
  
  times.forEach((time, i) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'triangle';
    oscillator.frequency.value = melody[i];
    
    gainNode.gain.setValueAtTime(0.12, audioContext.currentTime + time);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + time + 0.35);
    
    oscillator.start(audioContext.currentTime + time);
    oscillator.stop(audioContext.currentTime + time + 0.35);
  });
}

// 60 Royal Blue hearts
const heartsContainer = document.querySelector('.hearts-container');
const bgHeartCount = 60;

for (let i = 0; i < bgHeartCount; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart-bg");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = Math.random() * -60 + "vh";
  heart.style.animationDuration = 7 + Math.random() * 5 + "s";
  heart.style.animationDelay = Math.random() * 6 + "s";
  heartsContainer.appendChild(heart);
}

// Load effects
window.addEventListener('load', confettiBurst);

// Button - ROMANTIC PIANO + Love + Hearts + Confetti
const loveBtn = document.getElementById("loveBtn");
let loveIndex = 0;

loveBtn.addEventListener("click", () => {
  playRomanticPiano(); // 🎹 Beautiful piano melody
  
  // Love text cycle
  loveBtn.innerHTML = loveTexts[loveIndex] + " <span>💖</span>";
  loveIndex = (loveIndex + 1) % loveTexts.length;
  
  // Extra effects
  confettiBurst();
  
  // Heart burst
  const burstCount = 25;
  const { innerWidth: w, innerHeight: h } = window;

  for (let i = 0; i < burstCount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-pop");
    heart.textContent = "💖";

    const angle = Math.random() * Math.PI * 2;
    const distance = 120 + Math.random() * 160;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    heart.style.left = w / 2 + "px";
    heart.style.top = h / 2 + 40 + "px";
    heart.style.setProperty("--tx", tx + "px");
    heart.style.setProperty("--ty", ty + "px");

    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
});
