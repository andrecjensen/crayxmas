console.log("Dette er Crayxmas-spillet");

window.addEventListener("load", showStart);

function sidenVises() {
    console.log("Siden er loadet");

    showStart();
}

function showStart() {
    console.log("Startskærm vises");

    document.querySelector("#start .play").classList.add("pulse");
    document.querySelector("#start .play").addEventListener("click", hideStart);

    document.querySelector("#ui-settings-start").addEventListener("click", showSettings);
}

function showSettings() {

    console.log("showSettings");

    document.querySelector("#start").classList.add("hide");
    document.querySelector("#settings").classList.remove("hide");

    document.querySelector(".soundstoggle").addEventListener("click", toggleSound);

    document.querySelector(".musictoggle").addEventListener("click", toggleMusic);

    document.querySelector(".close").addEventListener("click", showStart);
}


function toggleSound() {
    console.log("toggleSound");
    document.querySelector(".soundon").classList.toggle("hide");
    document.querySelector(".soundoff").classList.toggle("hide");

}

function toggleMusic() {
    console.log("toggleMusic");
    document.querySelector(".musicon").classList.toggle("hide");
    document.querySelector(".musicoff").classList.toggle("hide");

}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);

}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);

}

function musicOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);

}

function musicOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);

}

function hideStart() {
    document.querySelector("#startsound").play();

    document.querySelector("#start .play").classList.remove("pulse");

    document.querySelector("#start").classList.add("hidestartscreen");
    document.querySelector("#start").addEventListener("animationend", startGame);
}


function startGame() {
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#game").classList.add("showgamescreen");


    document.querySelector("#mymusic").play();

    // dette anfører at der gives 30 sekunder til at udføre spillet og at når tiden er løbet tør, vises gameover skærmen
    setTimeout(gameOver, 300000);

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

    document.querySelector("#ui-settings-game").addEventListener("click", showSettings);
}

// Dette anfører at counter starter på 0
let counter = 0;

function clickCrayon() {
    //Dette fortælle console log at der gives 1+ til counter(tælleren)
    console.log("click Crayon - 1+ til tælleren og forsvinde-lyd spilles");

    if (counter < 1) {

        // Lyd fil startes
        document.querySelector("#crayonclick").play();


        console.log(this);
        var thisPosition = this.getBoundingClientRect().top;
        var heightHalf = 21 / 2;

        console.log(thisPosition);

        this.classList.add("animationpause");
        document.querySelector("#pop-farvekridt1-upleft").style.top = "calc(" + thisPosition + "px + " + heightHalf + "vw)";


        setTimeout(function () {
            //            document.querySelector("#pop-farvekridt1-upleft").classList.remove("pop");

            //            document.querySelector("#pop-farvekridt1-upleft").classList.add("explode");

        }, 500)

        // Dette siger at antallet af tallet i "counter" skal plusses med 1.
        counter++;
        //Dette ændrer indholdet af "counter" div'et til det aktuelle tal
        document.querySelector("#counter").innerHTML = counter;

    } else {
        levelComplete();
    }

}

let life = 3;

function clickGood() {

    console.log("click good");

    if (life > 0) {
        document.querySelector("#goodclick").play();

        // fortæller at nissehue selectoren betyder #hue + antallet af life
        let nissehue = "#hue" + life;

        // dette vælger "nissehue" som har definiret hue + antallet af liv og giver den classen .hide.
        document.querySelector(nissehue).classList.add("hide");

        // Fortæller console log om antallet
        console.log("#hue" + life);

        // dette trækker et tal ud af antallet af life
        life--;
        console.log(life);

        // her prøver jeg at sige, at hvis life er lig med 0 (nul liv), så skal game over skærmen vises
    } else {
        gameOver();
    }
}

function gameOver() {
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#gameover").classList.remove("hide");

    document.querySelector("#replay-go").addEventListener("click", startOver);
}

function levelComplete() {
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#levelcomplete").classList.remove("hide");

    document.querySelector("#replay-lc").addEventListener("click", startOver);
}

function startOver() {
    console.log("Click replay");
    window.location.reload(false);
}
