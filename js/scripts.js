/*!
* Start Bootstrap - Grayscale v7.0.1 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

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

    var scroll = document.documentElement.scrollTop;
    if (scroll != 0) {
        document.getElementById("mainNav").classList.add("kage");
    }
    else if(scroll == 0) {
        document.getElementById("mainNav").classList.remove("kage");
    }
});

// ロード画面

function loaded() {
    document.getElementById("loading").classList.remove("active")
}
window.addEventListener("load", () => {
    this.setTimeout(loaded, 1200)
});
setTimeout(loaded, 5000);

// ナビゲーション
var menuButton = document.getElementById("menuButton");
var navMaskLight = document.getElementById("navMaskLight");

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
    $('#test-toggle').click(function() {
        $('#test-toggleTarget').slideToggle();
    });

});

