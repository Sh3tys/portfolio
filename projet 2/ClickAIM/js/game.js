// Fonction pour générer un cercle cliquable
function spawnDot() {
    const dot = document.createElement("div");
    const size = Math.random() * 20 + 10;
    dot.className = "dot";
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${Math.random() * 90}%`;
    dot.style.top = `${Math.random() * 90}%`;

    dot.onclick = function () {
        let pointsGagnes = Math.round(6 - (size / 6));
        pointsGagnes *= clickMultiplier * (1 + boostMultiplier / 100);
        
        score += pointsGagnes;
        score = Math.floor(score);
        document.getElementById("score").innerText = score;
        updateLocalStorage();
        dot.remove();
    };

    document.getElementById("game-window").appendChild(dot);
    setTimeout(() => dot.remove(), 2000);
}

// Génération des cercles et points passifs
setInterval(spawnDot, 1000);
setInterval(() => {
    score += farms * 2 + factories * 10 + city * 25;
    score = Math.floor(score);
    document.getElementById("score").innerText = score;
    updateLocalStorage();
}, 1000);
