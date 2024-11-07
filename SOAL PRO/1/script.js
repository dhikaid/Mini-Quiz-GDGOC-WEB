const checkBox = document.querySelector("#checkbox");
const info = document.querySelector("#info");

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    info.textContent = "light";
    document.body.style.backgroundColor = "white";
    info.style.color = "black";
  } else {
    info.textContent = "dark";
    document.body.style.backgroundColor = "#1b1b1b";
    info.style.color = "white";
  }
});
