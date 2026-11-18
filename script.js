
// FSR GAMING Website JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to FSR GAMING!");

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "red";
        }
    });
});
