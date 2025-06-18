/*! 
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale) 
* Copyright 2013-2023 Start Bootstrap 
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE) 
*/ 

//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Form submission handling for contact form
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Mencegah reload halaman setelah kirim
            
            let formData = new FormData(contactForm);
            let emailInput = contactForm.querySelector("input[type='email']");

            // Validasi email sederhana
            if (!emailInput.value.includes("@")) {
                alert("Harap masukkan email yang benar!");
                return;
            }

            fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: { "Accept": "application/json" }
            }).then(response => response.json())
            .then(data => {
                alert("Pesan berhasil dikirim!");
                contactForm.reset();
            }).catch(error => {
                alert("Terjadi kesalahan, coba lagi nanti.");
            });
        });
    }

    // Form submission handling for signup section
    const signupForm = document.querySelector("#signupForm"); // Pastikan ID formulir signup sesuai dengan HTML
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Mencegah reload halaman setelah kirim
            
            let formData = new FormData(signupForm);
            let emailInput = signupForm.querySelector("input[name='email']");

            // Validasi email sederhana
            if (!emailInput.value.includes("@")) {
                alert("Harap masukkan email yang benar!");
                return;
            }

            fetch(signupForm.action, {
                method: signupForm.method,
                body: formData,
                headers: { "Accept": "application/json" }
            }).then(response => response.json())
            .then(data => {
                document.querySelector("#submitSuccessMessage").classList.remove("d-none"); // Tampilkan pesan sukses
                signupForm.reset();
            }).catch(error => {
                document.querySelector("#submitErrorMessage").classList.remove("d-none"); // Tampilkan pesan error
            });
        });
    }

});