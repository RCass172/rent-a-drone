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

// function called when first more button it clicked
function buttonClick(event) {

  // hides initial paragraph
  $(".pack-one").hide(2000);
  
  // add more detailed paragraph regarding package
  $(".pack-box1").append(`
  <p>€350 for one day hire<br>
  Drone and Pilot<br>
  Includes digital copies of all shots<br>
  Available nationwide
  </p>
  `);

  // removes button
  $(this).remove()
}

//listener for button click
let moreBtn = document.getElementById("more-btn1");
moreBtn.addEventListener('click', buttonClick);

// function called when second more button is clicked
function buttonClick2(event) {

  // hides initial paragraph
  $(".pack-two").hide(2000);

  // adds more detailed paragraph regarding package
  $(".pack-box2").append(`
  <p>€150 for one day hire<br>
  Drone only<br>
  Includes digital copies of all shots<br>
  Insurance included<br>
  Collection only
  </p>
  `);

  // removed button
  $(this).remove()
}

// listener for button click
let moreBtn2 = document.getElementById("more-btn2");
moreBtn2.addEventListener('click', buttonClick2);


// navbar collapse on clicking menu item

$('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide')
});