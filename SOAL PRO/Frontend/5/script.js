const images = [
  {
    src: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
    name: "kucing",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
    name: "anjing",
  },
  {
    src: "https://images.unsplash.com/photo-1480044965905-02098d419e96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D",
    name: "burung",
  },
  {
    src: "https://images.unsplash.com/photo-1486326658981-ed68abe5868e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "mobil",
  },
  {
    src: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "sepeda",
  },
];

let currentImageIndex = 0;

function loadImage() {
  const imageContainer = document.getElementById("image");
  imageContainer.src = images[currentImageIndex].src;
  document.getElementById("message").textContent = "";
  document.getElementById("guess").value = "";
  document.getElementById("next").style.display = "none";
}

document.getElementById("submit").addEventListener("click", () => {
  const guess = document.getElementById("guess").value.toLowerCase();
  const correctAnswer = images[currentImageIndex].name;

  // tulis kode disini

  // jawaban :
  // if (guess === correctAnswer) {
  //   document.getElementById("message").textContent = "Tebakan Anda benar!";
  //   document.getElementById("next").style.display = "block";
  // } else {
  //   document.getElementById(
  //     "message"
  //   ).textContent = `Salah! Jawaban yang benar adalah "${correctAnswer}".`;
  //   document.getElementById("next").style.display = "none";
  // }
});

document.getElementById("next").addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex < images.length) {
    loadImage();
  } else {
    document.getElementById("message").textContent =
      "Permainan selesai! Terima kasih telah bermain.";
    document.getElementById("image-container").style.display = "none";
    document.getElementById("guess").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "none";
  }
});

loadImage();
