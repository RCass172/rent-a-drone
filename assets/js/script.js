// image slideshow example taken from w3schools.com - https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = [1,1];
let slideId = ["firstSlide", "secondSlide"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
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