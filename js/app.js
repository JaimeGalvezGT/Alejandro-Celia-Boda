const params = new URLSearchParams(window.location.search);

const id = params.get("id") || "001";

const guest = guests[id];

const enterButton =
document.getElementById("enterInvitation");

const overlay =
document.getElementById("welcomeOverlay");

enterButton.addEventListener("click",()=>{

    overlay.classList.add("hide");

});

const music =
document.getElementById("backgroundMusic");

enterButton.addEventListener("click",()=>{

    overlay.classList.add("hide");

    music.play();

});

setTimeout(()=>{

    document
        .querySelector(".hero")
        .classList.add("loaded");

},200);

document.getElementById("guestName").textContent =
    guest.name;

document.getElementById("guestSeats").textContent =
    `${guest.seats} personas`;

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".hero").style.backgroundImage =
        `url('${wedding.heroImage}')`;

    document.getElementById("groom").textContent =
        wedding.groom;

    document.getElementById("bride").textContent =
        wedding.bride;

    const date = new Date(wedding.weddingDate);

    document.getElementById("date").textContent =
        date.toLocaleDateString("es-GT", {

            day: "numeric",

            month: "long",

            year: "numeric"

        });

});