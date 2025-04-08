document.addEventListener("DOMContentLoaded", () => {
  // ======== CANVAS BACKGROUND =========
  const canvas = document.getElementById("background-canvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  let particles = [];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 3 + 1;
      this.alpha = Math.random() * 0.8 + 0.2;
      this.speedX = (Math.random() - 0.5) * 1.5;
      this.speedY = Math.random() * -0.5 - 0.2;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.fill();
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha -= 0.002;

      if (this.alpha <= 0 || this.y < 0) {
        this.reset();
      }
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    initParticles();
  });

  initParticles();
  animateParticles();

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // ===== HOVER EFFECTS =====
  document.querySelectorAll(".project-item").forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.1)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
    });
  });
});
