/*!
* Start Bootstrap - Grayscale v7.0.1 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
//

// ロード画面

function loaded() {
    document.getElementById("loading").classList.remove("active")
}
window.addEventListener("load", () => {
    this.setTimeout(loaded, 1200)
});
setTimeout(loaded, 5000);

// アニメーション
const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", () => {

    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].
        getBoundingClientRect().top + targetElement[i].clientHeight * 0.3;
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("lookMe");
        }
    }

    let scroll = document.documentElement.scrollTop;
    if (scroll != 0) {
        document.getElementById("mainNav").classList.add("kage");
    }
    else if(scroll == 0) {
        document.getElementById("mainNav").classList.remove("kage");
    }
});

// ナビゲーション
let menuButton = document.getElementById("menuButton");
let navMaskLight = document.getElementById("navMaskLight");

document.addEventListener("DOMContentLoaded", () => {
    
    menuButton.addEventListener("click", function() {
        menuButton.classList.toggle("on");
        document.getElementById("navbarResponsive").classList.toggle("on");
        document.getElementById("navbarResponsiveMask").classList.toggle("on");
    });

    navMaskLight.addEventListener("click", function() {
        menuButton.classList.toggle("on");
        document.getElementById("navbarResponsive").classList.toggle("on");
        document.getElementById("navbarResponsiveMask").classList.toggle("on");
    });
    

});

// 時間表記

function set2fig(num) {
    let ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}
function showClock2() {
    let nowTime = new Date();
    let nowHour = set2fig( nowTime.getHours() );
    let nowMin  = set2fig( nowTime.getMinutes() );
    let nowSec  = set2fig( nowTime.getSeconds() );
    let msg = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById("RealTimeClock").innerHTML = msg;
}
setInterval('showClock2()',1000);

let msg1 = "Good Morning.";
let msg2 = "Good Afternoon.";
let msg3 = "Good Evening";
let hour = new Date().getHours();
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
    $('#test-toggle').click(function() {
        $('#test-toggleTarget').slideToggle();
    });

});

