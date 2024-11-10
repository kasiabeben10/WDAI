function toggleMenuMain() {
    const menu = document.getElementById("nav-menu");
    const animation = document.getElementById("animation-1");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        animation.style.display = "block";
    } else {
        menu.style.display = "flex";
        animation.style.display = "none";
    }
}

function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    const animation = document.getElementById("title");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        animation.style.display = "block";
    } else {
        menu.style.display = "flex";
        animation.style.display = "none";
    }
}

function goToContactForm(){
    window.location.href = 'kontakt.html'
}
function goToGallery(){
    window.location.href = 'galeria.html'
}
function goToSpecification(){
    window.location.href = 'specyfikacja.html'
}

function clock() {
    let data = new Date();
    let hour = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    if (hour < 10) {hour = "0" + hour}
    if (min < 10) {min = "0" + min}
    if (sec < 10) {sec = "0" + sec}
    let clockDiv = document.querySelector(".clock")
    clockDiv.innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(clock, 1000);
}
window.onload = clock;


const $panels = document.querySelectorAll('.panel');
$panels.forEach(($panel) => {
    $panel.addEventListener(
        'mouseover',
        () => {
            // removeActiveClasses();
            $panel.classList.add('active');
        },
    );
    $panel.addEventListener(
        'mouseout',
        () => {
            $panel.classList.remove('active');
        }
    )
});

document.getElementById("model-X").onclick = function () {
    location.href = "https://www.autocentrum.pl/tesla/model-x/";
};
document.getElementById("model-Y").onclick = function () {
    location.href = "https://www.autocentrum.pl/tesla/model-y/";
};
document.getElementById("model-S").onclick = function () {
    location.href = "https://www.autocentrum.pl/tesla/model-s/";
};
document.getElementById("model-3").onclick = function () {
    location.href = "https://www.autocentrum.pl/tesla/model-3/";
};
document.getElementById("cybertruck").onclick = function () {
    location.href = "https://www.autocentrum.pl/tesla/cybertruck/";
};