
const username = localStorage.getItem("username");

if (username) {
  document.getElementById("username").textContent = username;
}



document.getElementById("reset-button").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});

/*
document.getElementById("give-button").addEventListener("click", () => {
    score += 10000000;
    updateLocalStorage();
    updateUI();
});
*/

updateUI();
