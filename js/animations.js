/*=========================================
   Aparición suave de secciones y adornos
=========================================*/
(function () {

    document.documentElement.classList.add("js-anim");

    const targets = [];

    // Adornos entre secciones
    document.querySelectorAll(".section-divider").forEach((el) => {
        el.classList.add("reveal-up");
        targets.push(el);
    });

    // Contenido principal de cada sección
    document.querySelectorAll("section .container").forEach((el) => {
        el.classList.add("reveal-up");
        targets.push(el);
    });

    // Adornos pequeños bajo los títulos
    document.querySelectorAll(".title-sprig").forEach((el) => {
        el.classList.add("reveal-up");
        targets.push(el);
    });

    if (!("IntersectionObserver" in window)) {
        targets.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

})();
