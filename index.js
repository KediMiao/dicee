var randomNumber1 = Math.floor(Math.random() * 6 + 1);
// (0 - 0.99) * 6 + 1= 1 - 6.99

//1. change left image

// Method 1
// var image = "images/dice" + randomNumber1 + ".png";
// document.querySelector(".left-image").src = image;

// Method 2
var image1 = "images/dice" + randomNumber1 + ".png";
var imageAttribute1 = document.querySelector(".left-image");
imageAttribute1.setAttribute("src", image1);

//2. change the right image
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var image2 = "images/dice" + randomNumber2 + ".png";
var imageAttribute2 = document.querySelector(".right-image");
imageAttribute2.setAttribute("src", image2);

//compare two players, who win?
if (randomNumber1 == randomNumber2) {
  document.querySelector(".winnerTitle").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector(".winnerTitle").innerHTML = "🚩 Play 1 Wins!";
} else {
  document.querySelector(".winnerTitle").innerHTML = " Play 2 Wins 🚩!";
}
