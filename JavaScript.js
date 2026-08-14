let isPlaying = false;
const musik = document.getElementById('bg-musik');
const btnMusik = document.getElementById('btn-musik');

function toggleMusik() {
    if (isPlaying) {
        musik.pause();
        btnMusik.innerHTML = "🎵 Musik: Mati";
        isPlaying = false;
    } else {
        musik.play().then(() => {
            btnMusik.innerHTML = "🎶 Musik: Nyala";
            isPlaying = true;
        }).catch(error => {
            console.log("Gagal memutar audio:", error);
        });
    }
}

// Opsional: Musik otomatis menyala saat tombol "Buka Lembaran" diklik pertama kali
const originalMulaiCerita = window.mulaiCerita;
window.mulaiCerita = function() {
    if (!isPlaying) {
        musik.play().then(() => {
            btnMusik.innerHTML = "🎶 Musik: Nyala";
            isPlaying = true;
        }).catch(e => {});
    }
    originalMulaiCerita(); // Memanggil fungsi mulai cerita yang lama
};