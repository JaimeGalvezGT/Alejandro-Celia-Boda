document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Configuración del invitado
    // ===========================
    document.body.classList.add("locked");
    document.documentElement.style.overflow = "hidden";
document.body.style.overflow = "hidden";

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "001";
    const guest = ((typeof guests !== "undefined") && guests[id]) || {
        name: "Invitado Especial",
        seats: 1
    };

    const guestNameEl = document.getElementById("guestName");
    const guestSeatsEl = document.getElementById("guestSeats");
    if (guestNameEl) guestNameEl.textContent = guest.name;
    if (guestSeatsEl) guestSeatsEl.textContent = `${guest.seats} personas`;

    // ===========================
    // Configuración de la boda
    // ===========================

    if (typeof wedding !== "undefined") {

        const heroEl = document.querySelector(".hero");
        if (heroEl) heroEl.style.backgroundImage = `url('${wedding.heroImage}')`;

        const groomEl = document.getElementById("groom");
        const brideEl = document.getElementById("bride");
        if (groomEl) groomEl.textContent = wedding.groom;
        if (brideEl) brideEl.textContent = wedding.bride;

        const date = new Date(wedding.weddingDate);

        const dateEl = document.getElementById("date");
        if (dateEl) dateEl.textContent =
            date.toLocaleDateString("es-GT", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });

    }

    // ===========================
    // Elementos
    // ===========================

    const overlay = document.getElementById("welcomeOverlay");
    const heroContent = document.querySelector(".hero-content");
    const music = document.getElementById("backgroundMusic");
    const enterButton = document.getElementById("enterInvitation");

    // ===========================
    // Control de música
    // ===========================

    const musicToggle = document.getElementById("musicToggle");

    function syncMusicIcon(){
        if (musicToggle && music) musicToggle.classList.toggle("paused", music.paused);
    }

    if (musicToggle && music) {

        musicToggle.addEventListener("click", () => {
            if (music.paused) {
                music.play().catch(() => {});
            } else {
                music.pause();
            }
            syncMusicIcon();
        });

        music.addEventListener("play", syncMusicIcon);
        music.addEventListener("pause", syncMusicIcon);

    }

    // ===========================
    // Hero Animation
    // ===========================

    setTimeout(() => {

        const heroEl2 = document.querySelector(".hero");
        if (heroEl2) heroEl2.classList.add("loaded");

    }, 200);

    // ===========================
    // Abrir invitación
    // ===========================

if (enterButton) {

enterButton.addEventListener("click", () => {

    if (overlay) overlay.classList.add("hide");

    setTimeout(() => {

        if (heroContent) heroContent.classList.add("show");

        document.body.classList.remove("locked");
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";

        if (music) {
            if (typeof wedding !== "undefined" && !music.src) music.src = wedding.music;
            music.play().catch(() => {});
        }

        if (musicToggle) musicToggle.classList.add("show");
        syncMusicIcon();

    }, 500);

});

}

/*=========================================
            RSVP WHATSAPP
=========================================*/

const whatsappButton=document.getElementById("confirmWhatsapp");

if(whatsappButton){

const message=`Hola Alejandro y Celia.

Soy ${guest.name}.

Confirmamos la asistencia de ${guest.seats} persona${guest.seats>1?"s":""}.

¡Nos vemos el 30 de octubre! 🪷`;

whatsappButton.href=`https://wa.me/${wedding.whatsapp}?text=${encodeURIComponent(message)}`;

}

/*=========================================
                REGALOS
=========================================*/

const openGift = document.getElementById("openGift");
const closeGift = document.getElementById("closeGift");
const giftModal = document.getElementById("giftModal");

if(openGift){

    openGift.addEventListener("click",()=>{

        giftModal.classList.add("show");

    });

}

if(closeGift){

    closeGift.addEventListener("click",()=>{

        giftModal.classList.remove("show");

    });

}

giftModal.addEventListener("click",(e)=>{

    if(e.target===giftModal){

        giftModal.classList.remove("show");

    }

});

if (typeof startCountdown === "function" && typeof wedding !== "undefined") {
    startCountdown(new Date(wedding.weddingDate));
}

});
