document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle the 'hidden' class on the mobile menu when the button is clicked
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Initialize AOS animations
  AOS.init({
    duration: 800,
    once: true
  });
});

// Get elements for parallax effect
const bunga_kiri_bawah = document.getElementById('bunga_kiri_bawah');
const bunga_kiri_atas = document.getElementById('bunga_kiri_atas');
const bunga_kanan_bawah = document.getElementById('bunga_kanan_bawah');
const bunga_kanan_atas = document.getElementById('bunga_kanan_atas');
const awan = document.getElementById('awan');
const awan2 = document.getElementById('awan2');
const awan3 = document.getElementById('awan3');
const tumbuh_atas = document.getElementById('tumbuh_atas'); 
const tumbuh_bawah = document.getElementById('tumbuh_bawah'); 
const bangunan_bawah = document.getElementById('bangunan_bawah'); 
const wayang = document.getElementById('wayang');
const bangunan = document.getElementById('bangunan')
const awan_kiri = document.getElementById('awan_kiri')
const awan_kanan = document.getElementById('awan_kanan')
const rumput_kiri = document.getElementById('rumput_kiri')
const rumput_kanan = document.getElementById('rumput_kanan')
const payung_kiri = document.getElementById('payung_kiri')
const payung_kanans = document.getElementById('payung_kanans')
const matahari = document.getElementById('matahari')
const nav = document.querySelector('nav'); // Select your navbar element

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  // Apply parallax effects
  if (bunga_kiri_bawah) bunga_kiri_bawah.style.left = value * -0.03 + '%';
  if (bunga_kiri_atas) bunga_kiri_atas.style.left = value * -0.02 + '%';
  if (bunga_kanan_bawah) bunga_kanan_bawah.style.right = value * -0.03 + '%';
  if (bunga_kanan_atas) bunga_kanan_atas.style.right = value * -0.04 + '%';
  if (wayang) wayang.style.right = value * -0.04 + '%';
  if (bangunan_bawah) bangunan_bawah.style.left = value * -0.03 + '%';
  if (tumbuh_atas) tumbuh_atas.style.left = value * -0.02 + '%';
  if (tumbuh_bawah) tumbuh_bawah.style.right = value * -0.02 + '%';
  if (awan) awan.style.left = value * -0.03 + '%';
  if (awan2) awan2.style.top = value * -0.04 + '%';
  if (bangunan) bangunan.style.top = value * -0.04 + '%';
  if (awan_kiri) awan_kiri.style.left = value * -0.04 + '%';
  if (awan_kanan) awan_kanan.style.right = value * -0.04 + '%';
  if (rumput_kiri) rumput_kiri.style.left = value * -0.04 + '%';
  if (rumput_kanan) rumput_kanan.style.right = value * -0.04 + '%';
  if (payung_kiri) payung_kiri.style.left = value * -0.04 + '%';
  if (payung_kanans) payung_kanans.style.right = value * -0.04 + '%';
  if (matahari) matahari.style.bottom = value * -0.04 + '%';

 

  // Add/remove 'nav' class based on scroll position
  if (nav) { // Check if nav exists before manipulating its classList
    if (value > 0) {
      nav.classList.add('nav-scrolled'); // Use a more specific class name
    } else {
      nav.classList.remove('nav-scrolled');
    }
  }
});

  // --- Inisialisasi AOS (hanya sekali) ---
  AOS.init({
    duration: 800, // durasi animasi
    easing: 'ease-out-quad', // jenis easing untuk animasi
    once: true // animasi hanya berjalan sekali saat elemen muncul di viewport
});

// --- Logika Filter Galeri ---
const filterButtons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.gallery-item');

function filterGallery(category) {
    // Hapus kelas 'active' dari semua tombol filter
    filterButtons.forEach(button => button.classList.remove('active'));

    // Tambahkan kelas 'active' ke tombol yang diklik
    const clickedButton = document.querySelector(`[data-filter="${category}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    let visibleItemsCount = 0;

    galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hidden'); // Tampilkan item
            // Inisialisasi ulang atribut AOS untuk memicu animasi lagi
            item.setAttribute('data-aos', 'fade-up');
            item.setAttribute('data-aos-delay', (visibleItemsCount * 100).toString()); // Staggered delay
            visibleItemsCount++;
        } else {
            item.classList.add('hidden'); // Sembunyikan item
            item.removeAttribute('data-aos'); // Hapus atribut AOS saat disembunyikan
            item.removeAttribute('data-aos-delay');
        }
    });

    // Refresh AOS untuk menerapkan animasi pada item yang baru terlihat
    // Penundaan kecil memastikan DOM telah diperbarui sebelum AOS memindai ulang
    setTimeout(() => {
        AOS.refresh();
    }, 100);
}

// Tambahkan event listener klik ke tombol filter
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filterCategory = this.dataset.filter;
        filterGallery(filterCategory);
    });
});

// Tampilkan semua item dan picu animasinya saat halaman dimuat pertama kali
filterGallery('all'); // Panggil ini di akhir DOMContentLoaded untuk memastikan semua elemen ada

   // --- Logika Modal ---
    const imageModal = document.getElementById('imageModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalSubInfo = document.getElementById('modalSubInfo');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get data from the clicked item
            const title = item.dataset.title;
            const imageSrc = item.dataset.image;
            const description = item.dataset.description;
            const subInfo = item.dataset.subInfo;

            // Populate modal content
            modalImage.src = imageSrc;
            modalImage.alt = title; // Set alt text for accessibility
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalSubInfo.textContent = subInfo;

            // Show the modal with animation
            imageModal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling body when modal is open
        });
    });

    // Close modal when close button is clicked
    closeModalBtn.addEventListener('click', () => {
        imageModal.classList.remove('show');
        document.body.style.overflow = ''; // Restore body scrolling
    });

    // Close modal when clicking outside the modal content
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) { // Check if the click is on the overlay itself, not the content
            imageModal.classList.remove('show');
            document.body.style.overflow = ''; // Restore body scrolling
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('toggleCollapseText');
      const collapseElement = document.getElementById('collapseMoreContent');
  
      // Listen for Bootstrap collapse events
      if (collapseElement && toggleButton) { // Check if elements exist
          collapseElement.addEventListener('shown.bs.collapse', function () {
              toggleButton.textContent = 'Show less';
          });
  
          collapseElement.addEventListener('hidden.bs.collapse', function () {
              toggleButton.textContent = 'Click for more';
          });
      }
  });