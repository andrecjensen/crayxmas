console.log("Dette er Crayxmas-spillet. Musik af No room at the inn by TRG Banks");

window.addEventListener("load", showStart);

let showSettingsEffektSound = true;
let showSettingsMusic = true;

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

    document.querySelector("*").classList.add("animationpause");
    document.querySelector("#settings").classList.toggle("hide");

    document.querySelector("#ui-settings-start").classList.toggle("hide");
    document.querySelector(".soundstoggle").addEventListener("click", toggleSound);

    document.querySelector(".musictoggle").addEventListener("click", toggleMusic);

    document.querySelector(".close").addEventListener("click", hideSettings);
}

function hideSettings() {

    console.log("hideSettings");

    document.querySelector("*").classList.remove("animationpause");

    document.querySelector("#settings").classList.toggle("hide");

    document.querySelector("#ui-settings-start").classList.toggle("hide");
}


function toggleSound() {
    console.log("toggleSound");
    document.querySelector(".soundon").classList.toggle("hide");
    document.querySelector(".soundoff").classList.toggle("hide");

    if (showSettingsEffektSound == false) {
        //her klikker vi lyden på
        showSettingsEffektSound = true;
        soundsOn();

        //        soundsOff();
    } else {
        //her kikker vi lyden af - slukker den
        showSettingsEffektSound = false;
        soundsOff();
        //        soundsOn();
    }

}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);

    //    her slukkes for sfx
    document.querySelector(".sfx").muted = true;

}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector(".sfx").muted = false;
}

function toggleMusic() {
    console.log("toggleMusic");
    document.querySelector(".musicon").classList.toggle("hide");
    document.querySelector(".musicoff").classList.toggle("hide");

    if (showSettingsMusic == false) {
        //her klikker vi lyden på
        showSettingsMusic = true;
        musicOn();

        //        soundsOff();
    } else {
        //her kikker vi lyden af - slukker den
        showSettingsMusic = false;
        musicOff();
        //        soundsOn();
    }

}

function musicOff() {
    console.log("musicOff function værdi er " + showSettingsMusic);
    document.querySelector("#mymusic").pause();

}

function musicOn() {
    console.log("musicOff function værdi er " + showSettingsMusic);
    document.querySelector("#mymusic").play();
}

function hideStart() {
    document.querySelector("#startsound").play();

    document.querySelector("#start .play").classList.remove("pulse");

    document.querySelector("#start").classList.add("hidestartscreen");
    document.querySelector("#start").addEventListener("animationend", startGame);
}


function startGame() {
    console.log("Spillet startes");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#game").classList.add("showgamescreen");


    // Denne if/else fortæller console om musikken i settings er slået til eller ikke. Hvis den er slået fra (if) så startes musikken ikke. Hvis den er slået til (else) så startes musikken
    if (showSettingsMusic == false) {

        console.log("Musik startes ikke");


    } else {
        console.log("Musik startes");
        document.querySelector("#mymusic").play();
    }

    // dette anfører at der gives 30 sekunder til at udføre spillet og at når tiden er løbet tør, vises gameover skærmen
    setTimeout(gameOver, 30000);

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
    console.log("click Crayon");


    // if/else funktionen herunder fortæller, at hvis lyd er slået fra (if) så afspilles ingen lyd (funktionen findes ikke). Men hvis lyd er slået til, så afspilles lyd (else)

    if (showSettingsEffektSound == false) {
        console.log("Lyd er slået fra = ingen lyd");

    } else {

        console.log("Lyd afspilles");
        document.querySelector("#crayonclick").play();
    }

    if (counter < 14) {


        console.log(this);
        this.classList.remove("pop");
        this.classList.remove("delay");
        this.classList.add("explode");


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


        console.log(this);
        this.classList.remove("pop");
        this.classList.remove("delay");
        this.classList.add("explode");

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
