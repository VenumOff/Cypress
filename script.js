document.querySelector("button").addEventListener("click", function () {
    const nom = document.querySelector("input").value;
    const welcomeMessage = document.querySelector("div");
    if (nom) {
        const message = `Bienvenue, ${nom}!`;
        welcomeMessage.textContent = message;
        document.querySelector("input").value = "";
    } else {
        alert("Veuillez entrer votre nom.");
    }
});
