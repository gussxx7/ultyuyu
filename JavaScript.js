let isPlaying = false;
const musik = document.getElementById('bg-musik');
const btnMusik = document.getElementById('btn-musik');

musik.volume = 0.5;

function toggleMusik() {
    if (isPlaying) {
        musik.pause();
        btnMusik.innerHTML = "🎵 off";
        isPlaying = false;
    } else {
        musik.play().then(() => {
            btnMusik.innerHTML = "🎶 on";
            isPlaying = true;
        }).catch(error => {
            console.log("Gagal memutar audio:", error);
        });
    }
}


const originalMulaiCerita = window.mulaiCerita;
window.mulaiCerita = function() {
    if (!isPlaying) {
        musik.play().then(() => {
            btnMusik.innerHTML = "🎶 Musik: Nyala";
            isPlaying = true;
        }).catch(e => {});
    }
    originalMulaiCerita();
};
