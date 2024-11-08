let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("submit").addEventListener("click", function () {
  const guess = parseInt(document.getElementById("guess").value);
  attempts++;

  let message = "";

  // tulis kode logika disini

  // jawaban :
  // if (guess < 1 || guess > 100) {
  //   message = "Tebakan harus antara 1 dan 100!";
  // } else if (guess < randomNumber) {
  //   message = "Tebakan Anda terlalu rendah!";
  // } else if (guess > randomNumber) {
  //   message = "Tebakan Anda terlalu tinggi!";
  // } else {
  //   message = `Selamat! Anda menebak angka ${randomNumber} dalam ${attempts} percobaan!`;
  //   document.getElementById("restart").style.display = "block";
  //   document.getElementById("submit").disabled = true;
  // }

  document.getElementById("message").textContent = message;
});

document.getElementById("restart").addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guess").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("restart").style.display = "none";
  document.getElementById("submit").disabled = false;
});
