javascript
const startBtn = document.getElementById("startBtn");
const heroSection = document.querySelector(".hero");

startBtn.addEventListener("click", () => {
    heroSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

