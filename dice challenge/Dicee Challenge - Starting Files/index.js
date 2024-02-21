// //for first dice
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// //random number generator
// var randomDice = "dice" + randomNumber1 + ".png";
// //changing our image to random images
// var randomImageSource = "images/" + randomDice;
// //finally changed it to a random image  
// var image1 = document.querySelectorAll("img")[0];
// //getting the first image tag 
// image1.setAttribute("src", randomImageSource);
// //giving the tag the random image source to allow us get random pictures 

// //for second dice
// var randomNumber2 = Math.floor(Math.random()* 6) + 1;
// //random number generator
// var randomImageSource2 = "images/dice" + randomNumber2 +".png";
// //change the images to random images
// var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// //getting and setting the other image to random

// //if first player wins!
// if (randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerHTML = "🚩Player1 wins!";
// }
// //if second player wins!
// else if(randomNumber1 < randomNumber2){
//     document.querySelector("h1").innerHTML = "Player2 wins!🚩";
// }
// //last argument 
// else{
//     document.querySelector("h1").innerHTML = "Draw!";
// }





var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDice = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDice);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDice);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="No one wins";
}



































