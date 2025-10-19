randint = Math.random();
randint = randint * 6;
randint = Math.floor(randint) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randint + ".png");

randint2 = Math.random();
randint2 = randint2 * 6;
randint2 = Math.floor(randint2) + 1;    

document.querySelector(".img2").setAttribute("src", "images/dice" + randint2 + ".png");

if (randint > randint2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randint2 > randint) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}