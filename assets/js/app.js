// // ===========preloader==========

// const preloader = document.getElementById("preloader");

// setTimeout(() => {
//     preloader.classList.add("d-none")
//     preloader.classList.add("overflow-hidden")
// }, 2000)

// ===========backtop===============
let topButton = document.getElementById("backtop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topButton.style.display = "flex";
    }
    else {
        topButton.style.display = "none";
    }
});

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
