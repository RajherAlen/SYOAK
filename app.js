const checkBox = document.querySelector(".checkBox");

checkBox.addEventListener("click", (e) => {
  console.log(e.target.src);
  e.target.src === "https://gracious-boyd-197cee.netlify.app/img/checked.svg"
    ? (e.target.src = "./img/checkOutline.svg")
    : (e.target.src =
        "https://gracious-boyd-197cee.netlify.app/img/checked.svg");
});
