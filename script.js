const searchBox = document.querySelector(".search-box input");

searchBox.addEventListener("focus", () => {
    searchBox.style.background = "#fff";
});

searchBox.addEventListener("blur", () => {
    searchBox.style.background = "transparent";
});
