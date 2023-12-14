/*
###########################################################################
## FILE      : main.js
## SUBJECT   : PortfolioSite main JS document
## PROGRAMMER: (C) Copyright 2023 by Nicholas J. Steventon
##
## Please send comments or bug reports to
##
##      Nick Steventon
##      CIS Student, Man of Interesting Tendencies
##      Vermont Technical College
##      Randolph, VT
##      njs06110@vtc.edu
###########################################################################
*/


let slideIndex = 1;

window.addEventListener("load", showInitialSlide, false);

function showOneElementOfClass(elementnametoshow, classname){
    var elements = document.querySelectorAll("."+classname);
    for (var element in elements){
        element.style.display = "none";
    }
    var elementtoshow = document.getElementById(elementnametoshow);
    elementtoshow.style.display = "block";
}





/*
------------------------------------------------------------------------
Image Viewer Code
Courtesy of https://www.w3schools.com/howto/howto_js_slideshow.asp
------------------------------------------------------------------------
*/

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("photoFullSize");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



function showInitialSlide() {
  showSlides(slideIndex);
  console.log('showing initial slide');
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/*
function toggleVisualMode() {
  let darkbackcolor = 'black';
  let darkfrontcolor = 'white';
  let lightbackcolor = 'white';
  let lightfrontcolor = 'black';
  let root = document.querySelector(':root');
  let st = getComputedStyle(root);

  console.log(st.getPropertyValue('--frontcolor'));
  if (st.getPropertyValue('--frontcolor') === lightbackcolor) {
    console.log('darkmode')
    root.style.setProperty('--frontcolor', darkfrontcolor);
    root.style.setProperty('--backcolor', darkbackcolor);
    console.log(getComputedStyle(root));
  } else if (st.getPropertyValue('--frontcolor') === darkbackcolor) {
    console.log('lightmode')
    root.style.setProperty('--frontcolor', lightfrontcolor);
    root.style.setProperty('--backcolor', lightbackcolor);
}
*/
  /*
    --sectionborder: 2px bold #ffffff; 
    --frontcolor: white;
    --backcolor: black;
  */

function toggleVisualMode() {
  let rootel = document.querySelector(':root');
  rootel.classList.toggle('darkmode');
}
