let surahs = [
  "Al-Fatihah",
  "Al-Baqarah",
  "Al-Imran",
  "An-Nisa",
  "Al-Maidah",
  "Al-An'am",
  "Al-A'raf",
  "Al-Anfal",
  "At-Tawbah",
  "Yunus",
  "Hud",
  "Yusuf",
  "Ar-Ra'd",
  "Ibrahim",
  "Al-Hijr",
  "An-Nahl",
  "Al-Isra",
  "Al-Kahf",
  "Maryam",
  "Ta-Ha",
  "Al-Anbiya",
  "Al-Hajj",
  "Al-Mu'minun",
  "An-Nur",
  "Al-Furqan",
  "Ash-Shu'ara",
  "An-Naml",
  "Al-Qasas",
  "Al-Ankabut",
  "Ar-Rum",
  "Luqman",
  "As-Sajdah",
  "Al-Ahzab",
  "Saba",
  "Fatir",
  "Ya-Sin",
  "As-Saffat",
  "Sad",
  "Az-Zumar",
  "Ghafir",
  "Fussilat",
  "Ash-Shura",
  "Az-Zukhruf",
  "Ad-Dukhan",
  "Al-Jathiyah",
  "Al-Ahqaf",
  "Muhammad",
  "Al-Fath",
  "Al-Hujurat",
  "Qaf",
  "Adh-Dhariyat",
  "At-Tur",
  "An-Najm",
  "Al-Qamar",
  "Ar-Rahman",
  "Al-Waqi'ah",
  "Al-Hadid",
  "Al-Mujadilah",
  "Al-Hashr",
  "Al-Mumtahanah",
  "As-Saff",
  "Al-Jumu'ah",
  "Al-Munafiqun",
  "At-Taghabun",
  "At-Talaq",
  "At-Tahrim",
  "Al-Mulk",
  "Al-Qalam",
  "Al-Haqqah",
  "Al-Ma'arij",
  "Nuh",
  "Al-Jinn",
  "Al-Muzzammil",
  "Al-Muddaththir",
  "Al-Qiyamah",
  "Al-Insan",
  "Al-Mursalat",
  "An-Naba",
  "An-Nazi'at",
  "'Abasa",
  "At-Takwir",
  "Al-Infitar",
  "Al-Mutaffifin",
  "Al-Inshiqaq",
  "Al-Buruj",
  "At-Tariq",
  "Al-A'la",
  "Al-Ghashiyah",
  "Al-Fajr",
  "Al-Balad",
  "Ash-Shams",
  "Al-Lail",
  "Ad-Duha",
  "Al-Inshirah",
  "At-Tin",
  "Al-'Alaq",
  "Al-Qadr",
  "Al-Bayyinah",
  "Az-Zalzalah",
  "Al-'Adiyat",
  "Al-Qari'ah",
  "At-Takathur",
  "Al-Asr",
  "Al-Humazah",
  "Al-Fil",
  "Quraish",
  "Al-Ma'un",
  "Al-Kauthar",
  "Al-Kafirun",
  "An-Nasr",
  "Al-Lahab",
  "Al-Ikhlas",
  "Al-Falaq",
  "An-Nas",
];

let all_sura = document.getElementById("all_sura");

for (let i = 1; i <= surahs.length; i++) {
  all_sura.innerHTML += `
<div class="wrapper">
    <div style="margin:10px; width:220px;" class="aud_name btn btn-primary btn-lg">${
      i + ". "
    }${surahs[i - 1]}</div>
</div>   
`;
}

let wrapper = document.querySelectorAll(".wrapper");
let audtg = document.querySelector("#audtg");

wrapper.forEach((e, i) => {
  i = i + 1;

  if (i < 10) {
    i = `00${i}`;
  } else if (10 <= i && i < 100) {
    i = `0${i}`;
  }

  e.addEventListener("click", () => {
    audtg.setAttribute("src", `https://server8.mp3quran.net/afs/${i}.mp3`);
    audtg.play();
  });
});

let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("strt");

stopBtn.addEventListener("click", () => {
  audtg.pause();
});

startBtn.addEventListener("click", () => {
  if (audtg.src == "") {
    audtg.setAttribute("src", `https://server8.mp3quran.net/afs/001.mp3`);
  }

  audtg.play();
});
