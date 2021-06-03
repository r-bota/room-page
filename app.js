var hamburger = document.getElementById("navhamburger")
var nav = document.getElementById("nav")
var closenav = document.getElementById("closenav")
var left = document.getElementById("left")
var right = document.getElementById("right")
var hero = document.getElementById("heropic")
var picNum = 1;

hamburger.addEventListener("click", () => {
    nav.style.visibility = "visible";
})

closenav.addEventListener("click", () => {
    nav.style.visibility = "hidden"
})

right.addEventListener("click", () => {
    picNum += 1;
    if (picNum === 4) {
        picNum = 1;
    }
    hero.style.backgroundImage = `url(images/mobile-image-hero-${picNum}.jpg)`;
})

left.addEventListener("click", () => {
    picNum -= 1;
    if (picNum === 0) {
        picNum = 3;
    }
    hero.style.backgroundImage = `url(images/mobile-image-hero-${picNum}.jpg)`;
})