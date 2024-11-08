const form = document.querySelector("form");
const p = document.querySelector("p");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (password.value !== password2.value) {
    p.style.display = "inline-block";
  } else {
    p.style.display = "none";
    setTimeout(() => {
      alert("Password OK!");
    }, 500);
  }
});
