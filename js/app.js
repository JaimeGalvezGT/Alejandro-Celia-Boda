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