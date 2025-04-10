// Initialisation EmailJS
(function () {
    emailjs.init("RKJ66EUsnU-kI6qh6"); // Remplace par ton User ID réel si besoin
  })();
  
  // Gérer l'envoi d'email au clic sur "JOUER"
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
  
    // Si l'utilisateur n'a pas saisi d'email, rediriger vers la page Accueil.html
    if (!email) {
      window.location.href = "Accueil.html";
      return;
    }
  
    // Paramètres du modèle EmailJS
    const templateParams = {
      to_email: "shetysh3tys@gmail.com",  // Destinataire de l'email
      user_email: email,  // Email de l'utilisateur
    };
  
    // Envoi de l'email via EmailJS
    emailjs.send("service_50vwsmg", "template_l2cmtvo", templateParams)
      .then(function (response) {
        console.log("Connexion succes");
        window.location.href = "./AcceuilPage/Acceuil.html";  // Redirige après envoi réussi
      }, function (error) {
        console.log("FAILED: un problème est survenu veuillez-vous connecter sans mail !");
      });
  });
  