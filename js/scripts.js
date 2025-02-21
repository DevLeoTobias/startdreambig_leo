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
function changeImage(src) {
    document.getElementById('modalImage').src = src;
}

// Script para animação de contagem 

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      let count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count); // arredonda para o inteiro mais próximo
        setTimeout(updateCount, 50); // o delay pode ser ajustado para um efeito mais suave
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});





  
// Lógica de dropdown
dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      if (window.innerWidth <= 992) {
        event.preventDefault();
        let menu = this.nextElementSibling;
        if (menu.style.display === "block") {
          menu.style.display = "none";
        } else {
          // Fecha todos os dropdowns antes de abrir o novo
          document.querySelectorAll(".dropdown-menu").forEach(function (el) {
            el.style.display = "none";
          });
          menu.style.display = "block";
        }
      }
    });
  });

  // Fecha os dropdowns quando o menu hambúrguer é fechado
  navbarToggler.addEventListener("click", function () {
    if (!navbarCollapse.classList.contains("show")) {
      document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
        menu.style.display = "none";
      });
    }
  });

  // Fecha os dropdowns ao clicar fora da navbar
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar")) {
      document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
        menu.style.display = "none";
      });
    }
  });
 // Agora o fechamento da função está correto