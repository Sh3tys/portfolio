// Chargement des sections débloquées
let unlockedFarm = localStorage.getItem("unlockedFarm") === "true";
let unlockedShop = localStorage.getItem("unlockedShop") === "true";
let unlockedBoost = localStorage.getItem("unlockedBoost") === "true";

// Fonction pour gérer la visibilité des sections
function updateVisibility() {
    if (score >= 100 || unlockedFarm) {
        unlockedFarm = true;
        localStorage.setItem("unlockedFarm", "true");
        document.getElementById("farm-section").style.display = "block";
    }
    if (score >= 500 || unlockedShop) {
        unlockedShop = true;
        localStorage.setItem("unlockedShop", "true");
        document.getElementById("shop-section").style.display = "block";
    }
    if (score >= 1000 || unlockedBoost) {
        unlockedBoost = true;
        localStorage.setItem("unlockedBoost", "true");
        document.getElementById("boost-section").style.display = "block";
    }
}

document.getElementById("farm-section").style.display = unlockedFarm ? "block" : "none";
document.getElementById("shop-section").style.display = unlockedShop ? "block" : "none";
document.getElementById("boost-section").style.display = unlockedBoost ? "block" : "none";
