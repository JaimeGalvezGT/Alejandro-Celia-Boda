document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Configuración del invitado
    // ===========================

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "001";
    const guest = guests[id] || {
        name: "Invitado Especial",
        seats: 1
    };

    document.getElementById("guestName").textContent = guest.name;
    document.getElementById("guestSeats").textContent = `${guest.seats} personas`;

    // ===========================
    // Configuración de la boda
    // ===========================

    document.querySelector(".hero").style.backgroundImage =
        `url('${wedding.heroImage}')`;

    document.getElementById("groom").textContent = wedding.groom;
    document.getElementById("bride").textContent = wedding.bride;

    const date = new Date(wedding.weddingDate);

    document.getElementById("date").textContent =
        date.toLocaleDateString("es-GT", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    // ===========================
    // Elementos
    // ===========================

    const overlay = document.getElementById("welcomeOverlay");
    const heroContent = document.querySelector(".hero-content");
    const music = document.getElementById("backgroundMusic");
    music.src = wedding.music;
    const enterButton = document.getElementById("enterInvitation");

    // ===========================
    // Hero Animation
    // ===========================

    setTimeout(() => {

        document.querySelector(".hero").classList.add("loaded");

    }, 200);

    // ===========================
    // Abrir invitación
    // ===========================

enterButton.addEventListener("click", async () => {

    overlay.classList.add("hide");

    setTimeout(async () => {

        heroContent.classList.add("show");

        try {

            music.src = wedding.music;

            await music.play();

        } catch (error) {

            console.error(error);

        }

    }, 500);

});

startCountdown(new Date(wedding.weddingDate));

});