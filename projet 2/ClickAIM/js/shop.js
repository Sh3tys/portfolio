function buyFarm() {
    if (score >= farmPrice) {
        score -= farmPrice;
        farms++;
        farmPrice = Math.ceil(farmPrice * 1.1);
        updateUI();
        updateLocalStorage();
    }
}

function buyFactory() {
    if (score >= factoryPrice) {
        score -= factoryPrice;
        factories++;
        factoryPrice = Math.ceil(factoryPrice * 1.3);
        updateUI();
        updateLocalStorage();
    }
}

function buyCity() {
    if (score >= cityPrice) {
        score -= cityPrice;
        city++;
        cityPrice = Math.ceil(cityPrice * 1.3);
        updateUI();
        updateLocalStorage();
    }
}

function buyAutoClicker() {
    if (score >= autoClickerPrice) {
      score -= autoClickerPrice;
      score = Math.floor(score);
      setInterval(() => spawnDot(), 1000);
      autoClickerPrice = Math.ceil(autoClickerPrice * 1.15);
      updateUI();
      updateLocalStorage();
    }
  }

function buyMultiplier() {
    if (score >= multiplierPrice) {
        score -= multiplierPrice;
        clickMultiplier *= 2;
        multiplierPrice = Math.ceil(multiplierPrice * 3.4);
        updateUI();
        updateLocalStorage();
    }
}

function buyPermanentBoost() {
    if (score >= boostPrice) {
        score -= boostPrice;
        boostMultiplier += 3;
        boostPrice = Math.ceil(boostPrice * 2.98);
        updateUI();
        updateLocalStorage();
    }
}
