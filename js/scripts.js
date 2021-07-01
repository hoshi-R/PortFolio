/*!
* Start Bootstrap - Grayscale v7.0.1 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     // Activate Bootstrap scrollspy on the main nav element
//     const mainNav = document.body.querySelector('#mainNav');
//     if (mainNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNav',
//             offset: 74,
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });

//
const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function() {
    for (let index = 0; index < targetElement.length; index++) {
        const getElementDistance = targetElement[index].
        getBoundingClientRect().top ; targetElement[index].clientHeight * 0.5
        if (window.innerHeight > getElementDistance) {
            targetElement[index].classList.add("lookMe");
        }        
    }
});

loading animetion
function loaded() {
    document.getElementById("loading").classList.remove("active")
}
window.addEventListener("load", function() {
    this.setTimeout(loaded, 1200)
});
setTimeout(loaded, 5000);

const responsiveNav = document.getElementById("menuButton");

document.addEventListener("DOMContentLoaded", function() {
    
    responsiveNav.addEventListener("click", function() {
        this.classList.toggle("on")
    });
    responsiveNav.addEventListener("click", function() {
        document.getElementById("navbarResponsive").classList.toggle("on")
    });

});

$(function() {
    $('#test').click(function() {
        $('#kieru').slideUp();
    });

});