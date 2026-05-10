// THIS SECTION RELATES TO THE BUTTON THAT DISPLAYS AND HIDES THE STATISTICS SECTION

const btn = document.getElementById("toggleStatsBtn");
// the variable "btn" stores the button element selected by it's id called "toggleStatsBtn" for toggling the statistics

const stats = document.getElementById("statsSection");
// the variable "stats" stores the statistics section selected by it's id called "statsSection"

// the variable "btn", which stores the statistics button will be monitored for a click
btn.addEventListener("click", () => {
    console.log("button clicked");
    const isVisible = stats.classList.toggle("show");
    // the .classList.toggle("show") checks if the class "show" exists in the div element called statsSection. Since the class "show" does not yet exists, the toggle() adds the class and returns the isVisible variable as true.
    btn.textContent = isVisible ? "Hide Statistics" : "See Statistics";
    // the button's text will change depending on if the statsSection is visible or not
});


// THIS SECTION RELATES TO THE BUTTON THAT ARE ACCORDIANS TO REVEAL HIDDEN PANELS IN THE FAQ SECTION

const acc = document.getElementsByClassName("question");
// the variable "acc", short for accordian, stores the buttons element selected by it's class name "question"

for (let i = 0; i < acc.length; i++) {
  // the for loop will iterate through every button element with the class name "question", which is 5 in total
    acc[i].addEventListener("click", function() {
      // the "acc" array will be monitored for a click, so each button will be monitored for a click
        this.classList.toggle("active");
        // the "this" keyword refers to the buttons with the class name "question". The .toggle() checks if the class "active" exists in the button elements with the class name "question". This is used to change the button styling and the plus and minus sign if the button is clicked.
        const panel = this.nextElementSibling;
        // the variable "panel" stores the element that is selected after the buttons, which is the sections called "panel". 
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        // if the panel is currently hidden, when the button is clicked, the panel is visible
    });
}


// THIS SECTION RELATES TO THE ELEMENT IN THE NAV SECTION THAT REVEALS A DROPDOWN MENU WHEN CLICKED ON

// the function is used to open or close the dropdown menu
function myFunction() {
  document.getElementById("d-c").classList.toggle("show");
  // the element with the id name "d-c" is selected and is checked for the existance of the class "show". Since the class "show" does not yet exists, the toggle() adds the class "show" when the element "d-c" is clicked on
}

// if a click is detected on the web page, the following happens:
window.onclick = function(e) {
  if (!e.target.matches('.dropdown-btn')) {
  const myDropdown = document.getElementById("d-c");
  // the variable "myDropdown" stores the element with the id "d-c"
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
// if the div element with the name "dropdown-btn" is not clicked on, meaning if the click was not on the div element "dropdown-btn", and the dropdown menu is currently displayed, the dropdown menu will be hidden

