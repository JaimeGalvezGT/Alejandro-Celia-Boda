const params = new URLSearchParams(window.location.search);

const id = params.get("id") || "001";

const guest = guests[id] || { name: "Invitado", seats: 1 };

const enterButton = document.getElementById("enterInvitation");

const overlay = document.getElementById("welcomeOverlay");

const music = document.getElementById("backgroundMusic");

const heroContent = document.querySelector(".hero-content");

// Bloquear scroll al inicio
document.body.classList.add("locked");

// Mostrar datos del invitado
document.getElementById("guestName").textContent = guest.name;

document.getElementById("guestSeats").textContent =
    `${guest.seats} persona${guest.seats > 1 ? "s" : ""}`;

// Abrir invitación
enterButton.addEventListener("click", async () => {

    overlay.classList.add("hide");

    document.body.classList.remove("locked");

    heroContent.classList.add("show");

    try {

        music.src = wedding.music;

        await music.play();

    } catch (error) {

        console.log("La reproducción automática fue bloqueada", error);

    }

});

// Configurar portada
document.addEventListener("DOMContentLoaded", () => {

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

    // Animación del hero
    setTimeout(() => {
        document.querySelector(".hero").classList.add("loaded");
    }, 200);

    // =========================================
    // BOTÓN DE WHATSAPP
    // =========================================

    const whatsappButton = document.getElementById("confirmWhatsapp");

    const mensaje =
`Hola Alejandro y Celia 👋

Soy ${guest.name}.

Confirmo mi asistencia a su boda.

La invitación incluye ${guest.seats} persona${guest.seats > 1 ? "s" : ""}.

¡Nos vemos el 30 de octubre!`;

    const enlace = `https://wa.me/${wedding.whatsapp}?text=${encodeURIComponent(mensaje)}`;

    whatsappButton.setAttribute("href", enlace);

    // Forzar apertura en nueva pestaña
    whatsappButton.addEventListener("click", () => {
        window.open(enlace, "_blank");
    });

});