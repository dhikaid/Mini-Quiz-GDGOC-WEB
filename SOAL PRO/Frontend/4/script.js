const quizData = [
  {
    pertanyaan: "Siapa penemu telepon?",
    a: "Alexander Graham Bell",
    b: "Thomas Edison",
    c: "Nikola Tesla",
    d: "Albert Einstein",
    jawaban: "a",
  },
  {
    pertanyaan: "Apa ibu kota Indonesia?",
    a: "Jakarta",
    b: "Bandung",
    c: "Surabaya",
    d: "Medan",
    jawaban: "a",
  },
  {
    pertanyaan: "Apa planet terdekat dengan matahari?",
    a: "Venus",
    b: "Mars",
    c: "Merkurius",
    d: "Jupiter",
    jawaban: "c",
  },
  {
    pertanyaan: "Siapa yang menulis 'Romeo and Juliet'?",
    a: "Charles Dickens",
    b: "Mark Twain",
    c: "William Shakespeare",
    d: "Jane Austen",
    jawaban: "c",
  },
  {
    pertanyaan: "Apa warna bendera Jepang?",
    a: "Merah dan Putih",
    b: "Biru dan Putih",
    c: "Hijau dan Putih",
    d: "Merah dan Kuning",
    jawaban: "a",
  },
];

let currentPertanyaanIndex = 0;
let score = 0;

function loadpertanyaan() {
  const currentPertanyaan = quizData[currentPertanyaanIndex];
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = `
        <div class="pertanyaan">${currentPertanyaan.pertanyaan}</div>
        <label>
            <input type="radio" name="answer" value="a"> ${currentPertanyaan.a}
        </label><br>
        <label>
            <input type="radio" name="answer" value="b"> ${currentPertanyaan.b}
        </label><br>
        <label>
            <input type="radio" name="answer" value="c"> ${currentPertanyaan.c}
        </label><br>
        <label>
            <input type="radio" name="answer" value="d"> ${currentPertanyaan.d}
        </label><br>
    `;
}

function getSelectedAnswer() {
  const answers = document.querySelectorAll('input[name="answer"]');
  for (const answer of answers) {
    if (answer.checked) {
      return answer.value;
    }
  }
  return undefined;
}

document.getElementById("submit").addEventListener("click", () => {
  const answer = getSelectedAnswer();

  // tulis kode logika disini

  // jawaban :
  // if (answer) {
  //   if (answer === quizData[currentPertanyaanIndex].jawaban) {
  //     score++;
  //   }

  //   currentPertanyaanIndex++;
  //   if (currentPertanyaanIndex < quizData.length) {
  //     loadpertanyaan();
  //   } else {
  //     document.getElementById("quiz").style.display = "none";
  //     document.getElementById(
  //       "result"
  //     ).innerHTML = `Anda selesai! Skor Anda: ${score} dari ${quizData.length}`;
  //   }
  // } else {
  //   alert("Silakan pilih jawaban sebelum mengirim!");
  // }
});

loadpertanyaan();
