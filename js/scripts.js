/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
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
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


//galeria 
document.addEventListener("DOMContentLoaded", function () {
  // Inicialização de variáveis
  const dropdowns = document.querySelectorAll('.dropdown');
  const navbarToggler = document.getElementById('navbar-toggler');
  const navbarCollapse = document.getElementById('navbar-collapse');



  // Animação de contagem
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      let count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 60); // ajuste no tempo de delay
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
  document.addEventListener('click', function(event) {
    const navbarCollapse = document.getElementById('navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Verifica se o clique foi fora da navbar
    if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); // Simula um clique no menu para fechá-lo
        }
    }

  });

 });
  
 // modal da imagem 
 function changeImage(imagePath) {
  const modalImage = document.getElementById('modalImage');
  modalImage.src = imagePath;
}

  