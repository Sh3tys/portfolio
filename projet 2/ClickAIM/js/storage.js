// Initialisation des variables à partir du localStorage
let score = parseInt(localStorage.getItem("score")) || 0;
let farms = parseInt(localStorage.getItem("farms")) || 0;
let factories = parseInt(localStorage.getItem("factories")) || 0;
let city = parseInt(localStorage.getItem("city")) || 0;
let boostMultiplier = parseInt(localStorage.getItem("boostMultiplier")) || 0;
let clickMultiplier = parseInt(localStorage.getItem("clickMultiplier")) || 1;

// Prix initiaux des améliorations
const initPrices = {
    farm: 100,
    factory: 1000,
    city: 5000,
    multiplier: 75,
    autoClicker: 5,
    boost: 100
};

// Chargement des prix depuis localStorage ou valeurs initiales
let farmPrice = parseInt(localStorage.getItem("farmPrice")) || initPrices.farm;
let factoryPrice = parseInt(localStorage.getItem("factoryPrice")) || initPrices.factory;
let cityPrice = parseInt(localStorage.getItem("cityPrice")) || initPrices.city;
let multiplierPrice = parseInt(localStorage.getItem("multiplierPrice")) || initPrices.multiplier;
let autoClickerPrice = parseInt(localStorage.getItem("autoClickerPrice")) || initPrices.autoClicker;
let boostPrice = parseInt(localStorage.getItem("boostPrice")) || initPrices.boost;

// Fonction pour mettre à jour le localStorage
function updateLocalStorage() {
    localStorage.setItem("score", score);
    localStorage.setItem("farms", farms);
    localStorage.setItem("factories", factories);
    localStorage.setItem("city", city);
    localStorage.setItem("boostMultiplier", boostMultiplier);
    localStorage.setItem("clickMultiplier", clickMultiplier);

    localStorage.setItem("farmPrice", farmPrice);
    localStorage.setItem("factoryPrice", factoryPrice);
    localStorage.setItem("cityPrice", cityPrice);
    localStorage.setItem("multiplierPrice", multiplierPrice);
    localStorage.setItem("autoClickerPrice", autoClickerPrice);
    localStorage.setItem("boostPrice", boostPrice);
}
