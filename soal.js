// --- FILE: soal.js ---
const questionBank = [
  // --- SOAL PILIHAN GANDA (SINGLE) ---
  {
    id: 1,
    type: "single",
    q: "Data dalam bentuk apa yang lebih cocok digunakan untuk membuat prediksi tentang kebiasaan tidur seseorang?",
    options: [
      "Data tinggi badan dan berat badan",
      "Data warna mata dan warna rambut",
      "Data waktu tidur dan aktivitas harian",
      "Data warna pakaian yang dikenakan"
    ],
    answer: "Data waktu tidur dan aktivitas harian"
  },
  {
    id: 2,
    type: "single",
    q: "Jika sebuah penelitian menggunakan data suhu ruangan untuk menentukan jenis pakaian yang sesuai, apakah penggunaan data tersebut sudah tepat? Jelaskan alasannya.",
    options: [
      "Tidak tepat, karena suhu ruangan tidak dapat mengukur ketebalan pakaian",
      "Tepat, karena suhu ruangan mempengaruhi kenyamanan dalam beraktivitas",
      "Tepat, karena suhu ruangan adalah indikator utama pakaian yang harus dikenakan",
      "Tidak tepat, karena suhu ruangan tidak ada hubungannya dengan pakaian"
    ],
    answer: "Tepat, karena suhu ruangan mempengaruhi kenyamanan dalam beraktivitas"
  },
  {
    id: 3,
    type: "single",
    q: "Mengapa menggunakan data yang tidak relevan dapat menyebabkan kesimpulan yang tidak akurat?",
    options: [
      "Data yang tidak relevan dapat menyebabkan kesimpulan yang cepat dan mudah",
      "Data yang tidak relevan hanya akan memperburuk analisis dan menyesatkan",
      "Data yang tidak relevan membuat kesimpulan menjadi lebih menarik",
      "Data yang tidak relevan dapat menghemat waktu dalam pengolahan data"
    ],
    answer: "Data yang tidak relevan hanya akan memperburuk analisis dan menyesatkan"
  },
  {
    id: 4,
    type: "single",
    q: "Berikut adalah grafik yang menunjukkan kapasitas memori komputer yang semakin naik dari tahun ke tahun. Apa yang bisa kamu simpulkan dari grafik tersebut?<br><br><img src='memori-naik.png' style='max-width: 100%; border-radius: 8px;'><br>",
    options: [
      "Kapasitas memori komputer terus menurun seiring waktu",
      "Kapasitas memori komputer naik secara konstan dari waktu ke waktu",
      "Kapasitas memori komputer tidak berubah dari tahun ke tahun",
      "Kapasitas memori komputer hanya meningkat sekali setiap dekade"
    ],
    answer: "Kapasitas memori komputer naik secara konstan dari waktu ke waktu"
  },
  {
    id: 5,
    type: "single",
    q: "Mengapa penting untuk tidak menggunakan data yang tidak relevan dalam analisis untuk menarik kesimpulan yang valid?",
    options: [
      "Agar hasil analisis dapat diprediksi lebih mudah",
      "Agar kesimpulan yang dihasilkan memiliki dasar yang kuat dan akurat",
      "Agar data lebih mudah diorganisir",
      "Agar kesimpulan lebih cepat didapatkan tanpa banyak analisis"
    ],
    answer: "Agar kesimpulan yang dihasilkan memiliki dasar yang kuat dan akurat"
  },
  {
    id: 6,
    type: "single",
    q: "Apa yang bisa terjadi jika sebuah analisis data menggunakan jumlah sampel yang sangat sedikit, misalnya hanya memilih beberapa orang dalam survei yang bertujuan untuk memprediksi hasil pemilu?",
    options: [
      "Hasilnya dapat memberikan gambaran yang akurat tentang populasi yang lebih besar",
      "Hasilnya dapat mempengaruhi keputusan, tetapi tidak dapat diandalkan",
      "Hasilnya akan sangat akurat karena sampel kecil lebih mudah dianalisis",
      "Hasilnya akan tidak berguna sama sekali"
    ],
    answer: "Hasilnya dapat mempengaruhi keputusan, tetapi tidak dapat diandalkan"
  },
  {
    id: 7,
    type: "single",
    q: "Jika kamu memiliki data tinggi badan dan warna rambut dari beberapa orang, data apa yang akan lebih efektif untuk melakukan analisis kesamaan karakteristik dalam kelompok?",
    options: [
      "Tinggi badan, karena dapat dibandingkan secara numerik",
      "Warna rambut, karena bersifat kualitatif dan lebih mudah dipahami",
      "Keduanya, karena memberikan informasi yang berbeda namun relevan",
      "Tidak ada, karena keduanya tidak memiliki hubungan yang signifikan"
    ],
    answer: "Tinggi badan, karena dapat dibandingkan secara numerik"
  },
  {
    id: 8,
    type: "single",
    q: "Apa yang harus diperhatikan ketika menginterpretasikan grafik yang menunjukkan kenaikan kapasitas memori komputer dari tahun ke tahun?",
    options: [
      "Hanya memperhatikan jumlah data yang tercatat",
      "Memahami pola kenaikan dan perbedaan antara setiap tahun",
      "Memastikan grafik tersebut hanya mencatat data kapasitas memori di satu negara",
      "Mengabaikan tahun-tahun yang tidak relevan"
    ],
    answer: "Memahami pola kenaikan dan perbedaan antara setiap tahun"
  },
  {
    id: 9,
    type: "single",
    q: "Jika kamu ingin menganalisis seberapa efektif penggunaan energi dalam sebuah rumah tangga berdasarkan data penggunaan listrik, langkah pertama yang harus kamu lakukan adalah?",
    options: [
      "Mengumpulkan data penggunaan listrik rumah tangga selama satu bulan",
      "Menyusun laporan tentang penggunaan listrik yang sudah ada",
      "Menganalisis biaya listrik per bulan",
      "Membandingkan data penggunaan listrik antar rumah tangga"
    ],
    answer: "Mengumpulkan data penggunaan listrik rumah tangga selama satu bulan"
  },
  {
    id: 10,
    type: "single",
    q: "Jika kamu ingin menganalisis hubungan antara dua variabel yang berhubungan, seperti tinggi badan dan berat badan, data apa yang harus digunakan?",
    options: [
      "Data kualitatif untuk membandingkan kualitas",
      "Data kuantitatif yang dapat dihitung atau diukur, seperti angka",
      "Data visual yang menggambarkan perbedaan secara langsung",
      "Data yang disimpan dalam bentuk tabel"
    ],
    answer: "Data kuantitatif yang dapat dihitung atau diukur, seperti angka"
  },
  {
    id: 11,
    type: "single",
    q: "1 Terabyte (TB) setara dengan berapa byte?",
    options: [
      "1.024 bytes",
      "1.048.576 bytes",
      "1.073.741.824 bytes",
      "1.099.511.627.776 bytes"
    ],
    answer: "1.099.511.627.776 bytes"
  },
  {
    id: 12,
    type: "single",
    q: "Perhatikan gambar berikut ini.<br><br><img src='fill1.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Untuk dapat memberikan warna pada contoh tabel di atas, maka tools yang tepat untuk kita gunakan adalah ikon...<br>A. <img src='border.jpg' style='vertical-align: middle; height: 20px;'><br>B. <img src='colour.jpg' style='vertical-align: middle; height: 20px;'><br>C. <img src='colour2.jpg' style='vertical-align: middle; height: 20px;'><br>D. <img src='merge.jpg' style='vertical-align: middle; height: 20px;'>",
    options: [
      "A",
      "B",
      "C",
      "D"
    ],
    answer: "B"
  },
  {
    id: 13,
    type: "single",
    q: "Untuk dapat mengubah warna tulisan, manakah tools yang harus kita gunakan?<br>A. <img src='border.jpg' style='vertical-align: middle; height: 20px;'><br>B. <img src='colour.jpg' style='vertical-align: middle; height: 20px;'><br>C. <img src='colour2.jpg' style='vertical-align: middle; height: 20px;'><br>D. <img src='merge.jpg' style='vertical-align: middle; height: 20px;'>",
    options: [
      "A",
      "B",
      "C",
      "D"
    ],
    answer: "C"
  },
  {
    id: 14,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel1.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah hasil dari <code>=H15+I19+K16</code>",
    options: ["10", "25", "20", "14"],
    answer: "14"
  },
  {
    id: 15,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel1.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=I16+I17+I18+J19+I20</code>",
    options: ["39", "33", "41", "28"],
    answer: "39"
  },
  {
    id: 16,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel1.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=G21+H20*I19+J18</code>",
    options: ["79", "24", "33", "47"],
    answer: "24"
  },
  {
    id: 17,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel1.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=G15+H15-I15+J15-K15</code>",
    options: ["1", "10", "7", "5"],
    answer: "1"
  },
  {
    id: 18,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel2.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=SUM(E3:H3)</code>",
    options: ["51", "56", "49", "67"],
    answer: "49"
  },
  {
    id: 19,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel2.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=COUNT(D3:F7)</code>",
    options: ["15", "10", "5", "20"],
    answer: "15"
  },
  {
    id: 20,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel2.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=SUM(C6;J7;G1;H9)</code>",
    options: ["41", "45", "25", "33"],
    answer: "45"
  },
  {
    id: 21,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel2.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=COUNT(C7:K7)</code>",
    options: ["2", "18", "8", "9"],
    answer: "9"
  },
  {
    id: 22,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel2.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=SUM(I3:J4)</code>",
    options: ["50", "57", "55", "60"],
    answer: "55"
  },
  {
    id: 23,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel3.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=SUMIF(W73:W78;\"&lt;5\";W73:W78)</code>",
    options: ["12", "25", "21", "10"],
    answer: "12"
  },
  {
    id: 24,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel3.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=SUMIF(Q75:Q79;\"&gt;3\";P75:P79)</code>",
    options: ["9", "26", "11", "19"],
    answer: "9"
  },
  {
    id: 25,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel3.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=COUNTIF(T73:T83;\"&lt;5\")</code>",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    id: 26,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel3.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=Q79+U76+S76+P77+U74+Q82+S81</code>",
    options: ["16", "9", "20", "13"],
    answer: "13"
  },
  {
    id: 27,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel3.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah nilai dari <code>=S74/P76+T80-U74</code>",
    options: ["5", "1", "7", "3"],
    answer: "5"
  },
  {
    id: 28,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel4.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Formula yang tepat untuk mengisi cell G5 adalah",
    options: [
      "<code>=AVERAGE(C5:F5)</code>", 
      "<code>=AVERAGE(C5:E5)</code>", 
      "<code>=SUM(C5:E5)</code>", 
      "<code>=SUM(C5:F5)</code>"
    ],
    answer: "<code>=AVERAGE(C5:E5)</code>"
  },
  {
    id: 29,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel4.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Diketahui formula berikut ini <code>=AVERAGE(E2:E11)</code><br>Formula tersebut digunakan untuk mencari nilai...",
    options: [
      "Total Nilai Pelajaran IPS",
      "Total Nilai mata Pelajaran IPA",
      "Rata-rata mata pelajaran IPS",
      "Rata-rata mata pelajaran matematika"
    ],
    answer: "Rata-rata mata pelajaran matematika"
  },
  {
    id: 30,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel4.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Hasil dari formula <code>=MAX(D2:D11)</code> adalah...",
    options: ["92", "91", "90", "86"],
    answer: "90"
  },
  {
    id: 31,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel4.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Hasil dari formula <code>=MIN(C4:E6)</code> adalah...",
    options: ["70", "75", "73", "65"],
    answer: "75"
  },
  {
    id: 32,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel4.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Hasil dari formula <code>=SMALL(C2:C11;3)</code> adalah...",
    options: ["65", "72", "76", "80"],
    answer: "76"
  },
  {
    id: 33,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel4.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Hasil dari formula <code>=LARGE(E2:E11;2)</code> adalah...",
    options: ["92", "91", "78", "88"],
    answer: "92"
  },
  {
    id: 34,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel4.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Formula yang tepat untuk mengisi cell F10 adalah",
    options: [
      "<code>=SUM(B10:E10)</code>", 
      "<code>=SUM(C10:G10)</code>", 
      "<code>=SUM(C10:F10)</code>", 
      "<code>=SUM(C10:E10)</code>"
    ],
    answer: "<code>=SUM(C10:E10)</code>"
  },
  {
    id: 35,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel4.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Hasil dari formula <code>=SMALL(D2:E11;10)</code> adalah...",
    options: ["90", "82", "88", "75"],
    answer: "82"
  },
  {
    id: 36,
    type: "single",
    q: "Perhatikan tabel berikut ini<br><br><img src='tabel1.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berapakah hasil dari <code>=G21+H21+I20+J20-L20</code> ?",
    options: ["22", "20", "30", "32"],
    answer: "20"
  },
  {
    id: 37,
    type: "single",
    q: "Untuk dapat mengubah format angka dari 1000000 menjadi Rp. 1.000.000, maka tools yang kita butuhkan adalah...",
    options: [
      "Format Cell -> Number -> Currency",
      "Format Cell -> Number -> General",
      "Format Cell -> Alignment -> Indent",
      "Format Cell -> Border -> Style"
    ],
    answer: "Format Cell -> Number -> Currency"
  },

  // --- SOAL BENAR / SALAH (TF) ---
  {
    id: 38,
    type: "tf",
    q: "1 Kilobyte (KB) sama dengan 1.000 bytes.",
    options: ["Benar", "Salah"],
    answer: "Salah"
  },
  {
    id: 39,
    type: "tf",
    q: "1 Petabyte (PB) lebih besar dari 1 Terabyte (TB).",
    options: ["Benar", "Salah"],
    answer: "Benar"
  },

  // --- SOAL KOTAK CENTANG (MCMA) ---
  {
    id: 40,
    type: "mcma",
    q: "Manakah penulisan email di bawah ini yang benar? <br><i>(Pilih semua jawaban yang benar)</i>",
    options: [
      "i.kadek829282@smp.belajar.id",
      "ni.komang37052@smp.belajar.id",
      "i.wayan20305@smp.belajar.id",
      "i.putu43377@smp,belajar.id"
    ],
    answer: [
      "i.kadek829282@smp.belajar.id",
      "ni.komang37052@smp.belajar.id",
      "i.wayan20305@smp.belajar.id"
    ]
  }
];