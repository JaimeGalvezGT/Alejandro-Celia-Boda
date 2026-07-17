const params = new URLSearchParams(window.location.search);

const id = params.get("id") || "001";

const guest = guests[id];

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