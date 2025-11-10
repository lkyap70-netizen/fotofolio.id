// Fungsi untuk modal galeri
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementsByClassName('close')[0];

// Ambil semua gambar galeri
const galeriItems = document.querySelectorAll('.galeri-item');

galeriItems.forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

// Tutup modal saat klik close atau di luar gambar
closeBtn.onclick = function() {
    modal.style.display = 'none';
};

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Smooth scroll untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});