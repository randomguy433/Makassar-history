// script.js
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});

bunga_kiri_bawah = document.getElementById('bunga_kiri_bawah');
bunga_kiri_atas = document.getElementById('bunga_kiri_atas');
bunga_kanan_bawah = document.getElementById('bunga_kanan_bawah');
bunga_kanan_atas = document.getElementById('bunga_kanan_atas');
awan = document.getElementById('awan');
awan2 = document.getElementById('awan2');
awan3 = document.getElementById('awan3');


window.addEventListener('scroll', () => {
    value = window.scrollY;

    bunga_kiri_bawah.style.left = value * -0.03 + '%';
    bunga_kiri_atas.style.left = value * -0.02 + '%';
    bunga_kanan_bawah.style.right = value * -0.03 + '%';
    bunga_kanan_atas.style.right = value * -0.04 + '%'; 
    awan.style.left = value * -0.03 + '%'; 
    awan2.style.left = value * -0.04 + '%';
    awan3.style.right = value * -0.07 + '%';
    

    nav = document.getElementById('nav');
    if(value > 0){
        nav.classList.add('nav');
    } else {
        nav.classList.remove('nav');
    }
})
