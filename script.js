window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    document.querySelector(".menu").classList.add("hidden");

    document.querySelector(".menuknap").addEventListener("click", toggleMenu);

}



function toggleMenu() {
    console.log("toggle menu");

    document.querySelector(".menu").classList.toggle("hidden");

    let erSkjult = document.querySelector(".menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector(".menuknap").textContent = "☰";
    } else {
        document.querySelector(".menuknap").textContent = "X";
    }
}
