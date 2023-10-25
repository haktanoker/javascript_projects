const img = document.querySelector("#music-image");
const audio = document.querySelector("#audio");
const title = document.querySelector(".title");
const singer = document.querySelector(".singer");
const songMin = document.querySelector("#progress-bar");
const instantTime = document.querySelector("#current-time");
const duration = document.querySelector("#duration");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const volBtn = document.querySelector("#volume");
const volBar = document.querySelector("#volume-bar");

var musicList = [
    {
        "title": "Boşver",
        "singer": "Nilüfer",
        "img": "img/1.jpeg",
        "music": "mp3/1.mp3"
    },
    {
        "title": "Bu da geçer mi sevgilim",
        "singer": "Yalın",
        "img": "img/2.jpeg",
        "music": "mp3/2.mp3"
    },
    {
        "title": "Aramızda Uçurumlar",
        "singer": "Suat Suna",
        "img": "img/3.jpeg",
        "music": "mp3/3.mp3"
    },
]

// Hangi index'e ait sayıyı çekeceğimizi belirlemek için count
var count = 0;
// Mute atıp açmak için son ses seviyesini kaydettiğim değişken
var mevcutVol = 0.5;
// Sayfa ilk yüklenince default olarak %50 ses seviyesinde olması
volBar.value = 50;

// Şarkıyı ekranda gösterme ve gerekli atamalar
function showMusic(index) {
    title.textContent = `${musicList[index].title} - ${musicList[index].singer}`;
    singer.textContent = musicList[index].singer;
    img.src = `img/${index + 1}.jpeg`;
    audio.src = `mp3/${index + 1}.mp3`;
}

// Sayfa yüklenince ilk müzik bilgilerini ekrana getirmek
window.addEventListener("load", () => {
    showMusic(count);
})

// Şarkı çalmayı başlatma
playBtn.addEventListener("click", function () {
    if (playBtn.classList.contains("fa-play")) {
        playBtn.classList.replace("fa-play", "fa-pause");
        audio.play();
    } else {
        playBtn.classList.replace("fa-pause", "fa-play");
        audio.pause();
    }
})

// Sıradaki buton
nextBtn.addEventListener("click", function next() {
    if (count == musicList.length - 1) {
        count = 0;
    } else {
        count++;
    }
    showMusic(count);
    audio.play();
    playBtn.classList.replace("fa-play", "fa-pause");
})

// Önceki buton
prevBtn.addEventListener("click", function () {
    if (count == 0) {
        count = musicList.length - 1;
    } else {
        count--;
    }
    showMusic(count);
    audio.play();
    playBtn.classList.replace("fa-play", "fa-pause");
})

// Mute atmak
volBtn.addEventListener("click", function () {
    if (volBtn.classList.contains("fa-volume-high")) {
        volBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        audio.volume = 0;
        volBar.value = 0;
    } else {
        volBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
        audio.volume = mevcutVol;
        volBar.value = mevcutVol * 100;
    }
});

// Volume değiştir
volBar.addEventListener("input", (e) => {
    mevcutVol = e.target.value / 100;
    if (mevcutVol == 0) {
        volBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        audio.volume = 0;
        console.log(audio.volume);
    } else if (mevcutVol != 0 && volBtn.classList.contains("fa-volume-xmark")) {
        volBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    }
    audio.volume = mevcutVol;
});

// Gelen audio'dan dakika ve saniye verilini çekip gösterme
var anlikSure = (audio) => {
    const Adakika = Math.floor(audio.currentTime / 60);
    const Asaniye = Math.floor(audio.currentTime % 60);
    const guncelSaniye = Asaniye < 10 ? `0${Asaniye}` : Asaniye;
    const Asonuç = `${Adakika}:${guncelSaniye}`;
    instantTime.textContent = Asonuç;
};

// Sesin süresi değiştikçe anlikSure fonksiyonunu sürekli çağırmak
audio.addEventListener("timeupdate", function showTime() {
    songMin.value = Math.floor(audio.currentTime);
    anlikSure(audio);
    // Eğer şarkı bittiyse sonraki şarkıya geçiş
    if (audio.ended) {
        nextBtn.click();
    }
});

// Ses yüklendiği zaman verilerini çekip total süreyi göstermek
audio.addEventListener("loadedmetadata", () => {
    songMin.max = Math.ceil(audio.duration);
    let Tdakika = Math.floor(audio.duration / 60);
    let Tsaniye = Math.ceil(audio.duration % 60);
    duration.textContent = `${Tdakika}:${Tsaniye}`;
});

// Şarkının süresini değiştirmek
songMin.addEventListener("input", (e) => {
    audio.currentTime = e.target.value;
    songMin.value = e.target.value;
});