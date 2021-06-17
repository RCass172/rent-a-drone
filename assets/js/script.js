// image slideshow example taken from w3schools.com - https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


// To show the about me section 

$(document).ready(function(){

  // hides content once page is loaded
  $(".content-box").hide(),

  // once button is clicked the content will appear
  $("#show").click(function(){
    $(".content-box").show(1000),

  // removes button once the content has been shown
  $(this).remove()
});
  
});