const checkBox = document.querySelector(".checkBox");

checkBox.addEventListener("click", (e) => {
  console.log(e.target.src);
  e.target.src === "http://127.0.0.1:5500/img/checked.svg"
    ? (e.target.src = "./img/checkOutline.svg")
    : (e.target.src = "http://127.0.0.1:5500/img/checked.svg");
});
