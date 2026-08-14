let isPlaying = false;
const musik = document.getElementById('bg-musik');
const btnMusik = document.getElementById('btn-musik');

musik.volume = 0.3;

function toggleMusik() {
    musik.volume = 0.3;
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
    musik.volume = 0.3;
    if (!isPlaying) {
        musik.play().then(() => {
            btnMusik.innerHTML = "🎶 on";
            isPlaying = true;
        }).catch(e => {});
    }
    originalMulaiCerita();
};
