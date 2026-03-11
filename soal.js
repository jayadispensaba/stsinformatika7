// --- FILE: soal.js ---
const questionBank = [
  {
    id: 1,
    type: "single",
    q: "Siapakah penemu bola lampu?",
    options: ["Thomas Edison", "Albert Einstein", "Isaac Newton", "Nikola Tesla"],
    answer: "Thomas Edison"
  },
  {
    id: 2,
    type: "single",
    // CONTOH MEMASUKKAN GAMBAR KE DALAM SOAL:
    q: "Perhatikan gambar hewan di bawah ini!<br><br><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Felis_silvestris_catus_portrait.jpg/800px-Felis_silvestris_catus_portrait.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Hewan apakah ini?",
    options: ["Kucing", "Anjing", "Harimau", "Singa"],
    answer: "Kucing"
  }
  // Tambahkan soal lainnya di sini...
];