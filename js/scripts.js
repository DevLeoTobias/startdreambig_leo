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


document.addEventListener("DOMContentLoaded", function () {
  // Seleção de elementos
  const navbarToggler = document.getElementById("navbar-toggler");
  const navbarCollapse = document.getElementById("navbar-collapse");
  const dropdowns = document.querySelectorAll(".dropdown-toggle");

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
        setTimeout(updateCount, 50); // Ajuste no tempo de delay
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  // Garante que o menu não feche ao clicar nos dropdowns no mobile
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", function (event) {
      if (window.innerWidth <= 992) {
        event.preventDefault();
        let menu = this.nextElementSibling;
        menu.classList.toggle("show");
        event.stopPropagation(); // Impede que o clique feche o menu principal
      }
    });
  });

  // Fecha os dropdowns ao clicar fora da navbar
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar")) {
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.classList.remove("show");
      });
    }
  });

  // Impede que o menu feche ao clicar dentro do navbarCollapse
  navbarCollapse.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Controla a abertura e fechamento do menu hambúrguer
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", function () {
      navbarCollapse.classList.toggle("show"); // Adiciona/Remove a classe show no menu
    });
  }
});
