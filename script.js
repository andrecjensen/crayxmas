console.log("Dette er Crayxmas-spillet");

window.addEventListener("load", showStart);

function sidenVises() {

    showStart();
}

function showStart() {
    document.querySelector("#start").classList.add("show");
    document.querySelector("#start .play").classList.add("pulse");
}

document.querySelector("#start .play").addEventListener("click", hideStart);

function hideStart() {
    document.querySelector("#start").classList.add("hidestartscreen");

    document.querySelector("#game").classList.add("showgamescreen");

    document.querySelector("#start").addEventListener("animationend", startGame);

}




function startGame() {
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#start").classList.add("hide");
}
