// === Dil değişimi ===
document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-select button");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      loadLanguage(lang);
    });
  });

  // varsayılan dil
  loadLanguage("tr");
});

function loadLanguage(lang) {
  fetch(`locales/${lang}.json`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelectorAll("[data-translate]").forEach((el) => {
        const key = el.dataset.translate;
        if (data[key]) el.textContent = data[key];
      });
    })
    .catch(() => console.log("Dil dosyası bulunamadı."));
}

// === Arka plan partikül animasyonu ===
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let particlesArray;

function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", initCanvas);
initCanvas();

// Partikül sınıfı
class Particle {
  constructor(x, y, size, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.fill();
  }
}

// Partikülleri oluştur
function initParticles() {
  particlesArray = [];
  const count = 50;
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = (Math.random() - 0.5) * 0.6;
    const speedY = (Math.random() - 0.5) * 0.6;
    particlesArray.push(new Particle(x, y, size, "#d4af37", speedX, speedY));
  }
}

// Çizim döngüsü
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let particle of particlesArray) {
    particle.update();
    particle.draw();
  }
  requestAnimationFrame(animate);
}

initParticles();
animate();
