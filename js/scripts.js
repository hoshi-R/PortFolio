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

// アニメーション
const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function() {

    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].
        getBoundingClientRect().top ; targetElement[i].clientHeight * 0.3
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("lookMe");
        }
    }

    var scroll = document.documentElement.scrollTop;
    
    console.log(scroll)
});

// ロード画面

// function loaded() {
//     document.getElementById("loading").classList.remove("active")
// }
// window.addEventListener("load", function() {
//     this.setTimeout(loaded, 1200)
// });
// setTimeout(loaded, 5000);

// ナビゲーション

const responsiveNav = document.getElementById("menuButton");
document.addEventListener("DOMContentLoaded", function() {
    
    responsiveNav.addEventListener("click", function() {
        this.classList.toggle("on")
    });
    responsiveNav.addEventListener("click", function() {
        document.getElementById("navbarResponsive").classList.toggle("on")
    });
});

// 時間表記

function set2fig(num) {
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}
function showClock2() {
    var nowTime = new Date();
    var nowHour = set2fig( nowTime.getHours() );
    var nowMin  = set2fig( nowTime.getMinutes() );
    var nowSec  = set2fig( nowTime.getSeconds() );
    var msg = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById("RealTimeClock").innerHTML = msg;
}
setInterval('showClock2()',1000);

var msg1 = "Good Morning.";
var msg2 = "Good Afternoon.";
var msg3 = "Good Evening";
var hour = new Date().getHours();
if(hour >= 0 && hour <= 9){
	document.getElementById("nowTime").innerHTML = msg1;
}
else if(hour >= 10 && hour <= 17){
	document.getElementById("nowTime").innerHTML = msg2;
}
else if(hour >= 18 && hour <= 23){
	document.getElementById("nowTime").innerHTML = msg3;
}



// jQuery試運転

$(function() {
    $('#test').click(function() {
        $('#kieru').slideUp();
    });

});

