//random no generation for left dice.........

var randomNumber1 = Math.floor(6 * Math.random()) + 1;

console.log(randomNumber1);


var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src",randomImageSource1);

 

//random no generation for right dice.........

var randomNumber2 = Math.floor(6 * Math.random()) + 1;

console.log(randomNumber2);

var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src",randomImageSource2);


//changing the h1 element.................

if(randomNumber1 === randomNumber2){

    document.querySelector("h1").textContent = "Draw!";
}

else if(randomNumber1 > randomNumber2){

    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";

}else{

    document.querySelector("h1").textContent = " Player 2 Wins! 🚩";


}

