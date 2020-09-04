//CHECKBOX
const checkBox = document.querySelector(".checkBox");

checkBox.addEventListener("click", (e) => {
  console.log(e.target.src);
  e.target.src === "https://gracious-boyd-197cee.netlify.app/img/checked.svg"
    ? (e.target.src =
        "https://gracious-boyd-197cee.netlify.app/img/checkOutline.svg")
    : (e.target.src =
        "https://gracious-boyd-197cee.netlify.app/img/checked.svg");
});

//HAMBURGER
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger__menu");
const firstLine = document.querySelector(".line__first");
const secondLine = document.querySelector(".line__second");
const thirdLine = document.querySelector(".line__third");

let menuOpen = false;

hamburger.addEventListener("click", () => {
  !menuOpen
    ? ((menu.style.display = "block"),
      (menuOpen = true),
      secondLine.classList.add("open"),
      firstLine.classList.add("openFirst"),
      thirdLine.classList.add("openThird"),
      menu.classList.add("slide-in"))
    : (menu.classList.remove("slide-in"),
      menu.classList.add("slide-out"),
      secondLine.classList.remove("open"),
      firstLine.classList.remove("openFirst"),
      thirdLine.classList.remove("openThird"),
      setTimeout(function () {
        (menu.style.display = "none"),
          (menuOpen = false),
          menu.classList.remove("slide-out");
      }, 450));
});
