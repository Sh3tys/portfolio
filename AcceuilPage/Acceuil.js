document.addEventListener("DOMContentLoaded", () => {

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
