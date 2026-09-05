/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


/* Close menu when clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ===============================
   TYPING EFFECT
================================ */

const typingElement = document.getElementById("typing");

const roles = [
    "Frontend Developer",
    "Web Developer",
    "UI Designer",
    "Creative Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

typeEffect();


/* ===============================
   DARK / LIGHT MODE
================================ */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


/* ===============================
   BACK TO TOP
================================ */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ===============================
   CONTACT FORM
================================ */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("nameInput").value;

    alert(
        `Thank you, ${name}! Your message has been received.`
    );

    contactForm.reset();

});


/* ===============================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .certificate-card, .about-content"
    );


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const position =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (position < windowHeight - 80) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all 0.8s ease";

});


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();