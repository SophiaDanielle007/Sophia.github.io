// THIS SECTION REFERS TO THE SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);
// the variable slideIndex is created and stores slide number 1, the current slide number. When the function showSlides will be used, it will start with the slideIndex 1.

function plusSlides(n) {
  // the values -1 or 1 from the prev and next button goes into the function plusSlides(n) and is assigned to the variable n.
  showSlides(slideIndex += n);
  // the variable n is then used in the showSlides function to determine if the slide displayed will be the next or previous img
}

function showSlides(n) {
  let i;
  // the variable i acts as a counter for the loop below

  let slides = document.getElementsByClassName("mySlides");
  // the variable slides stores all the elements with the class name "mySlides"
  
  if (n > slides.length) {slideIndex = 1}
  // if the slide number, taken from the variable n first used in the function plusSlides, becomes larger than the number of slides, the slideIndex returns to one, creating a looped slidehsow

  if (n < 1) {slideIndex = slides.length}
  // if the slideIndex is less than 1, the user will go backwards past the first slide

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // the for loop iterates through all the slides and hides them first because only one should apear at a time
  }

  slides[slideIndex-1].style.display = "block";
  // only the first slideIndex will be display. Arrays start at 0 but the slideIndex starts at 1, so the -1 is to make the array start from 0 instead of 1
}

function myFunction() {
  document.getElementById("d-c").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropdown-btn')) {
  const myDropdown = document.getElementById("d-c");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}