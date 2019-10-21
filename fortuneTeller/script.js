// Getting which element in which to display the answer.
var fortuneDisplayElem = document.getElementById("fortuneDisplay");
var questions = document.getElementById("questions");

var nameElem = document.getElementById("name");
var ageElem = document.getElementById("age");
var movieElem = document.getElementById("movie");
var hobbyElem = document.getElementById("hobby");

function readFortune() {

  // Creating the "fortune" variable.
  var fortune;
  
  // Combining our variables into a single message.
  fortune = "<p>Well, well, " + nameElem.value + "...</p>";
  
  fortune += "<p>Next year when you turn " + (Number(ageElem.value) + 1) + ", you'll meet the protagonist of <i>" + movieElem.value + "</i>, your favorite movie.</p>";
  
  fortune += "<p>Together, you'll spend the day " + hobbyElem.value.toLowerCase() + ".</p>"    

  // You can check the user's input, and adjust variables accordingly.
  if (movieElem.value == "Twilight") {
    fortune += "I won't be joining you two; I hate <i>Twilight</i>."
  }
  
  // Updating the html of our "fortuneDisplayElem" to show our fortune message.
  fortuneDisplayElem.innerHTML = fortune;
  
  // Hiding the element that holds all our questions.
  questions.style.display = "none";
    
}        