/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1500);

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ==========================================
   STICKY NAVBAR SHADOW
========================================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,8,22,.85)";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(5,8,22,.45)";

        header.style.boxShadow = "none";

    }

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section,.card,.skill,.project-card,.contact-card").forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   HERO TYPING EFFECT
========================================== */

const text = [

    "Aspiring Full-Stack Developer",

    "Python Developer",

    "Learning AI & Machine Learning",

    "Web Development Enthusiast"

];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

const typingElement = document.querySelector(".hero-left h2");

(function type() {

    if (count === text.length) {

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if (letter.length === currentText.length) {

        count++;

        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 90);

    }

})();