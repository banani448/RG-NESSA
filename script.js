// ===== LIGHTBOX AVANCÉ =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

// Sélection de toutes les images qui peuvent être zoomées
const imagesZoom = document.querySelectorAll(".galerie img, .ImagesReception img, .ImagesCuisine img, .tourisme-grid img, .imagesPrestations img");

imagesZoom.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Fermer le lightbox au clic en dehors de l'image
lightbox.addEventListener("click", e => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
        lightboxImg.src = "";
    }
});

// ===== AFFICHER / CACHER LA LISTE DES CONTACTS =====
const voirMessagesBtn = document.getElementById("voirMessages");
const listeContacts = document.getElementById("ListeContacts");

voirMessagesBtn.addEventListener("click", e => {
    e.preventDefault();
    if (listeContacts.style.display === "none" || listeContacts.style.display === "") {
        listeContacts.style.display = "block";
        listeContacts.scrollIntoView({ behavior: "smooth" });
    } else {
        listeContacts.style.display = "none";
    }
});

// ===== FORMULAIRE DYNAMIQUE =====
const form = document.querySelector("footer form");
const contactBody = document.getElementById("contactBody");

form.addEventListener("submit", e => {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const prenom = form.prenom.value.trim();
    const nom = form.nom.value.trim();
    const email = form.email.value.trim();
    const adresse = form.adresse.value.trim();
    const numero = form.numero.value.trim();
    const heure = form.heure.value;
    const message = form.message.value.trim();

    if (!prenom || !nom || !email || !message) {
        alert("Merci de remplir les champs obligatoires !");
        return;
    }

    // Créer une nouvelle ligne dans le tableau
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${prenom}</td>
        <td>${nom}</td>
        <td>${adresse}</td>
        <td>${numero}</td>
        <td>${email}</td>
        <td>${message}</td>
        <td>${new Date().toLocaleDateString()}</td>
        <td>${heure || new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
    `;

    contactBody.appendChild(newRow);

    // Afficher automatiquement la liste des contacts
    listeContacts.style.display = "block";
    listeContacts.scrollIntoView({ behavior: "smooth" });

    // Réinitialiser le formulaire
    form.reset();
});

// ===== MENU MOBILE =====
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});
