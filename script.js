console.log("Dette er Crayxmas-spillet");

window.addEventListener("load", showStart);

function sidenVises() {

    showStart();
}

function showStart() {
    document.querySelector("#start").classList.add("show");
    document.querySelector("#start .play").classList.add("pulse");
    document.querySelector("#start .play").addEventListener("click", hideStart);
}


function hideStart() {
    document.querySelector("#start .play").classList.remove("pulse");

    document.querySelector("#start").classList.add("hidestartscreen");
    document.querySelector("#start").addEventListener("animationend", startGame);
}


function startGame() {
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#game").classList.add("showgamescreen");


    // Alle farvekridte gøres klikbare og føres til clickCrayon funktionen
    document.querySelector("#pop-farvekridt1-upleft").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt2-upleft").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt3-upleft").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt1-upmid").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt2-upmid").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt3-upmid").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt1-upright").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt2-upright").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt3-upright").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt1-downleft").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt2-downleft").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt3-downleft").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt1-downright").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt2-downright").addEventListener("click", clickCrayon);
    document.querySelector("#pop-farvekridt3-downright").addEventListener("click", clickCrayon);

    // Alle mandler og smør gøres klikbare og føres til clickGood funktionen
    document.querySelector("#pop-almond-upleft").addEventListener("click", clickGood);
    document.querySelector("#pop-butter-upleft").addEventListener("click", clickGood);
    document.querySelector("#pop-almond-upmid").addEventListener("click", clickGood);
    document.querySelector("#pop-butter-upmid").addEventListener("click", clickGood);
    document.querySelector("#pop-almond-upright").addEventListener("click", clickGood);
    document.querySelector("#pop-butter-upright").addEventListener("click", clickGood);
    document.querySelector("#pop-almond-downleft").addEventListener("click", clickGood);
    document.querySelector("#pop-butter-downleft").addEventListener("click", clickGood);
    document.querySelector("#pop-almond-downright").addEventListener("click", clickGood);
    document.querySelector("#pop-butter-downright").addEventListener("click", clickGood);

}

// Dette anfører at counter starter på 0
let counter = 0;

function clickCrayon() {
    //Dette fortælle console log at der gives 1+ til counter(tælleren)
    console.log("click Crayon - 1+ til tælleren");
    document.querySelector("#pop-farvekridt1-upleft").classList.add("pause");
    document.querySelector("#pop-farvekridt1-upleft").classList.add("fadeoff");

    // Dette siger at antallet af tallet i "counter" skal plusses med 1.
    counter++;
    //Dette ændrer indholdet af "counter" div'et til det aktuelle tal
    document.querySelector("#counter").innerHTML = counter;

}

let life = 3;

function clickGood() {

    console.log("click good");

    // fortæller at nissehue selectoren betyder #hue + antallet af life
    let nissehue = "#hue" + life;

    // dette vælger "nissehue" som har definiret hue + antallet af liv og giver den classen .hide.
    document.querySelector(nissehue).classList.add("hide");

    // Fortæller console log om antallet
    console.log("#hue" + life);

    // dette trækker et tal ud af antallet af life
    life--;
    console.log(life);
}
