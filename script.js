document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const mobileIcon = mobileBtn.querySelector('i');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle icon between list and x
        if (navLinks.classList.contains('active')) {
            mobileIcon.classList.remove('ph-list');
            mobileIcon.classList.add('ph-x');
        } else {
            mobileIcon.classList.remove('ph-x');
            mobileIcon.classList.add('ph-list');
        }
    });

    // Close mobile menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileIcon.classList.remove('ph-x');
                mobileIcon.classList.add('ph-list');
            }
        });
    });
});
