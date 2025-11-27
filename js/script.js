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

        // Cargar valor guardado en localStorage, si no existe → 0
        let savedLikes = parseInt(localStorage.getItem(id));
        if (!isNaN(savedLikes)) {
            countEl.textContent = savedLikes;
            if (savedLikes > 0) btn.classList.add("liked");
        } else {
            countEl.textContent = 0; // **Evita que salga -1**
        }

        // Click para dar Like
        btn.addEventListener("click", () => {
            let current = parseInt(countEl.textContent);
            
            // Normalizar para evitar valores NaN
            if (isNaN(current)) current = 0;

            if (btn.classList.contains("liked")) {
                // quitar like
                current = Math.max(0, current - 1); // nunca baja de 0
                btn.classList.remove("liked");
            } else {
                // dar like
                current++;
                btn.classList.add("liked");
            }

            countEl.textContent = current;
            localStorage.setItem(id, current);
        });
    });

});

const nombre = "Eduardo";
const apellido = "Aranda";

const floter = document.getElementById('floter');

function actualizarFecha() {
    const fecha = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

    floter.textContent = `${nombre} ${apellido} - ${fechaFormateada}`;
}

// Ejecuta al cargar
actualizarFecha();
