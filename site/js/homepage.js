
let phoneUser = false;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{
    // true for mobile device
    phoneUser = true;
}

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
var slideDurationSetting = 100; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $("#section").length;
console.log(totalSlideNumber)

function parallaxScroll(evt) {
    if (isFirefox) {
      //Set delta for Firefox
      delta = evt.detail * (-120);
    } else if (isIe) {
      //Set delta for IE
        delta = -evt.deltaY;
    } else {
      //Set delta for all other browsers
        delta = evt.wheelDelta;
    }
    if (ticking != true) {
        if (delta <= -scrollSensitivitySetting) {
        //Down scroll
        ticking = true;
        if (currentSlideNumber !== totalSlideNumber - 1) {
            currentSlideNumber++;
            nextItem();
        }
        slideDurationTimeout(slideDurationSetting);
        }
        if (delta >= scrollSensitivitySetting) {
        //Up scroll
        ticking = true;
        if (currentSlideNumber !== 0) {
            currentSlideNumber--;
        }
        previousItem();
        slideDurationTimeout(slideDurationSetting);
        }
    }
}

  // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
    setTimeout(function() {
        ticking = false;
    }, slideDuration);
}
  // ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

  // ------------- SLIDE MOTION ------------- //
function nextItem() {
    var $previousSlide = $(".background").eq(currentSlideNumber - 1);
    $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
    var $currentSlide = $(".background").eq(currentSlideNumber);
    $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}

function switchLanguage() {
    const isDropdownMenu = document.querySelector('.switch-language-list');
    const isDropdownButton = document.querySelector('.switch-language');

    if (isDropdownMenu) {
        if (isDropdownMenu.classList.contains("active"))
        {
            isDropdownMenu.classList.remove("active");
            isDropdownMenu.classList.add("enable");
            setTimeout(isDropdownMenu.style.display = "none", 400)
        }
        else 
        {
            isDropdownMenu.classList.remove("enable");
            isDropdownMenu.classList.add('active');
            setTimeout(isDropdownMenu.style.display = "flex", 400)
        }
    }
}

let scrollDown = document.querySelector(".scroll-down");
if (scrollDown)
{
    scrollDown.addEventListener('click', () => {
        document.querySelector('.main').scrollIntoView({block: "start", inline: "nearest"});
    });
}

const menuBar = document.querySelector(".menu-bar");
const menuBarHide = document.querySelector(".menu-hide .menu-bar");
const navBarSearch = document.querySelector(".nav-bar-search");

if (menuBar)
{
    menuBar.addEventListener('click', () =>
    {
        document.querySelector('.main').scrollIntoView({block: "start", inline: "nearest"});
        menuHide();
    });
}

if (menuBarHide)
{
    menuBarHide.addEventListener('click', () =>
        menuHide()
    );
}

function menuHide()
{
    menuBar.classList.toggle('anim-menu');
    menuBarHide.classList.toggle('anim-menu');
    document.querySelector(".menu-hide").classList.toggle("active");
    if (document.querySelector(".menu-hide").classList.contains("active"))
    {
        document.querySelector("*").style = "overflow-y:hidden; position: relative;";
    }
    else
    {
        document.querySelector("*").style = "overflow-y:visible; position: static;";
    }
};

if (navBarSearch)
{
    navBarSearch.addEventListener('click', () => 
    {
        document.querySelector(".search-hide").classList.toggle("active");
        document.querySelector(".nav-bar-right").classList.toggle("active");
        navBarSearch.classList.toggle("active");
    });
}

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

if (!phoneUser) {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".homepage",
            start: "center center",
            end: "bottom top",
            markers: false, 
            scrub: true,
            pin: true
        }
    })

    .to(".left-bar", {
        x : innerWidth * -1,
        display : "none"
    })
    .to(".logo", {
        position : "absolute",
        width : "100vw",
        right : 0,
    })
    // Animation test 
        //.to(".homepage", {y : innerHeight * -1})

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".main",
        //         start: "center center",
        //         end: "bottom top",                  // Bad anim
        //         markers: true,
        //         scrub: true,
        //         pin: true
        //     }
        // })

        // .from(".right-bar", {
        //     x : innerWidth * 1,
        // })
}
