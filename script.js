// Search box background change on focus/blur
const searchBox = document.querySelector(".search-box input");

searchBox.addEventListener("focus", () => {
    searchBox.style.background = "#fff";
});

searchBox.addEventListener("blur", () => {
    searchBox.style.background = "transparent";
});

// Navigation links to toggle content sections
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const faqSection = document.getElementById("faq-section");
const faqToggle = document.getElementById("faq-toggle");
const homeSection = document.getElementById("home-section");

// Function to hide all sections except specified
function showSection(sectionId) {
    sections.forEach((section) => {
        if (section.id === sectionId) {
            section.style.display = "block";
            section.classList.add("active-section");
        } else {
            section.style.display = "none";
            section.classList.remove("active-section");
        }
    });
}

// Initially show home, hide FAQ
showSection("home-section");

// Handle nav clicks
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("data-target");
        // Show the clicked section, hide FAQ if open
        showSection(targetId);
        faqSection.style.display = "none";

        // Remove active class from all, add to clicked
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// FAQ toggle click: show/hide FAQ section, hide other sections
faqToggle.addEventListener("click", () => {
    if (faqSection.style.display === "none" || faqSection.style.display === "") {
        faqSection.style.display = "block";
        sections.forEach((sec) => {
            if (sec !== faqSection) {
                sec.style.display = "none";
                sec.classList.remove("active-section");
            }
        });
        navLinks.forEach((l) => l.classList.remove("active"));
    } else {
        faqSection.style.display = "none";
        // Return to home on FAQ close
        showSection("home-section");
        navLinks.forEach((l) => l.classList.remove("active"));
        document.querySelector('.nav-link[data-target="home-section"]').classList.add("active");
    }
});

// FAQ accordion functionality
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            // Close other answers
            document.querySelectorAll(".faq-answer").forEach((a) => (a.style.display = "none"));
            answer.style.display = "block";
        }
    });
});
