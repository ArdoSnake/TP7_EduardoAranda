  document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("btn-menu");
    const nav = document.querySelector("nav");

    btnMenu.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", () => {

    /* ------- MENÚ RESPONSIVE ------- */
    const btnMenu = document.getElementById("btn-menu");
    const nav = document.querySelector("nav");

    btnMenu.addEventListener("click", () => {
        nav.classList.toggle("show");
    });

    /* ------- SISTEMA DE LIKES ------- */
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach(btn => {
        const id = btn.getAttribute("data-id");
        const countEl = btn.querySelector(".like-count");

        // Cargar valor guardado en localStorage
        let savedLikes = localStorage.getItem(id);
        if (savedLikes) {
            countEl.textContent = savedLikes;
            btn.classList.add("liked");
        }

        // Click para dar Like
        btn.addEventListener("click", () => {
            let current = parseInt(countEl.textContent);

            if (btn.classList.contains("liked")) {
                // Si ya está likeado, quitar like
                current--;
                btn.classList.remove("liked");
            } else {
                // Dar like
                current++;
                btn.classList.add("liked");
            }

            countEl.textContent = current;
            localStorage.setItem(id, current);
        });
    });

});
