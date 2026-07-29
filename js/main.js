
 /* DARK MODE / LIGHT MODE */
// ===============================

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    }

    darkModeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");

        if (currentTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            darkModeBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            darkModeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        }
    });
}



/* NAVBAR DYNAMIQUE */
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

 /* ANIMATION AU SCROLL */
// ===============================

const sections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => observer.observe(section));

// 4. ONGLETS PROGRAMME
// ===============================

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {

        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        button.classList.add("active");

        document
            .getElementById(button.dataset.tab)
            .classList.add("active");
    });
});

/* FILTRE INTERVENANTS */

const filterButtons = document.querySelectorAll(".filter-btn");
const speakerCards = document.querySelectorAll(".speaker-card");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Retirer la classe active de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove("active"));

        // Ajouter la classe active au bouton cliqué
        this.classList.add("active");

        // Récupérer le filtre
        const filter = this.getAttribute("data-filter");

        // Afficher/Masquer les cartes
        speakerCards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});





/* VALIDATION FORMULAIRE */

const form = document.getElementById("contactFrom");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.getElementById("nom");
        const email = document.getElementById("email");
        const telephone = document.getElementById("telephone");
        const message = document.getElementById("message");

        let valide = true;

        // Nom
        if (nom.value.trim() === "") {
            afficherErreur(nom, "Le nom est obligatoire");
            valide = false;
        } else {
            afficherSucces(nom);
        }

        // Email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value.trim())) {
            afficherErreur(email, "Email invalide");
            valide = false;
        } else {
            afficherSucces(email);
        }

        // Téléphone (au moins 8 chiffres)
        if (telephone.value.trim().length < 8) {
            afficherErreur(telephone, "Minimum 8 chiffres");
            valide = false;
        } else {
            afficherSucces(telephone);
        }

        // Message (au moins 20 caractères)
        if (message.value.trim().length < 20) {
            afficherErreur(message, "Minimum 20 caractères");
            valide = false;
        } else {
            afficherSucces(message);
        }

        if (valide) {
            alert("Inscription envoyée avec succès !");
            form.reset();
        }
    });
}

function afficherErreur(input, texte) {
    input.style.border = "2px solid red";
    input.nextElementSibling.textContent = texte;
}

function afficherSucces(input) {
    input.style.border = "2px solid green";
    input.nextElementSibling.textContent = "";
}

        
        

         



/*  ANNEE DYNAMIQUE */


document.getElementById("year").textContent = new Date().getFullYear();




/* COMPTEURS ANIMÉS*/


const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;
const target = +counter.dataset.target;

let count = 0;

const update = ()=>{

count += Math.ceil(target/100);

if(count<target){

counter.textContent=count;
requestAnimationFrame(update);

}else{

counter.textContent=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>counterObserver.observe(counter));


/*COMPTE À REBOURS */

const eventDate = new Date("November 15, 2026 09:00:00").getTime();

    countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(countdown);

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }

}, 1000);

/*BOUTON RETOUR EN HAUT*/


const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll",()=>{

if(window.scrollY>300){
backToTop.style.display="flex";
}else{
backToTop.style.display="none";
}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/*FILTRAGE*/


