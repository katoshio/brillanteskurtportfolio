function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function zoom(img) {
  const gallery = document.querySelector('.about-gallery');
  
  if (img.classList.contains('zoomed')) {
    // Remove zoom
    img.classList.remove('zoomed');
    gallery.classList.remove('has-zoomed');
  } else {
    // Remove zoom from all other images first
    document.querySelectorAll('.about-gallery img').forEach(i => i.classList.remove('zoomed'));
    
    // Add zoom to clicked image
    img.classList.add('zoomed');
    gallery.classList.add('has-zoomed');
    
    // Scroll the zoomed image into view with some padding
    setTimeout(() => {
      img.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }, 100);
  }
}

// Close zoom when clicking outside the image
document.addEventListener('click', function(e) {
  const gallery = document.querySelector('.about-gallery');
  const zoomedImg = document.querySelector('.about-gallery img.zoomed');
  
  // If there's a zoomed image and the click wasn't on an about gallery image
  if (zoomedImg && !e.target.closest('.about-gallery img')) {
    zoomedImg.classList.remove('zoomed');
    gallery.classList.remove('has-zoomed');
  }
});

// Close zoom with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const gallery = document.querySelector('.about-gallery');
    const zoomedImg = document.querySelector('.about-gallery img.zoomed');
    
    if (zoomedImg) {
      zoomedImg.classList.remove('zoomed');
      gallery.classList.remove('has-zoomed');
    }
  }
});

window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

// Enhanced smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});