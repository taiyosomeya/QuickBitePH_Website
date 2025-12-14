// Search Box Animation
const searchBox = document.querySelector(".search-box input");

searchBox.addEventListener("focus", () => {
    searchBox.style.background = "#fff";
});

searchBox.addEventListener("blur", () => {
    searchBox.style.background = "transparent";
});

// LOGIN MODAL SCRIPT
const loginBtnNavbar = document.querySelector(".login-btn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close-btn");

const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");

const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.querySelector(".toggle-password");

const loginButton = document.querySelector(".login-btn-modal");

// OPEN MODAL
loginBtnNavbar.addEventListener("click", () => {
    loginModal.style.display = "flex";
});

// CLOSE MODAL
closeBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
});

// EMAIL VALIDATION
emailInput.addEventListener("blur", () => {
    if (emailInput.value.trim() === "") {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
});

// PASSWORD SHOW/HIDE
togglePassword.addEventListener("click", () => {
    passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
});

// ENABLE LOGIN BUTTON 
function updateLoginButton() {
    if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        loginButton.classList.add("active");
    } else {
        loginButton.classList.remove("active");
    }
}

emailInput.addEventListener("input", updateLoginButton);
passwordInput.addEventListener("input", updateLoginButton);
