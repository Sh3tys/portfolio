// Mise à jour des éléments de l'UI
function updateUI() {
    document.getElementById("score").innerText = Math.floor(score);
    document.getElementById("farm-count").innerText = farms;
    document.getElementById("factory-count").innerText = factories;
    document.getElementById("city-count").innerText = city;
    document.getElementById("boost-multiplier").innerText = boostMultiplier;

    document.getElementById("farm-price").innerText = farmPrice;
    document.getElementById("factory-price").innerText = factoryPrice;
    document.getElementById("city-price").innerText = cityPrice;
    document.getElementById("multiplier-price").innerText = multiplierPrice;
    document.getElementById("auto-clicker-price").innerText = autoClickerPrice;
    document.getElementById("boost-price").innerText = boostPrice;
}
