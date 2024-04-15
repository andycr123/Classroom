document.addEventListener("DOMContentLoaded", function() {
    const contenido = document.getElementById("contenido");

    // Datos simulados de las clases
    const clases = [
        { nombre: "Clase de Matemáticas", profesor: "Profesor A" },
        { nombre: "Clase de Historia", profesor: "Profesor B" },
        { nombre: "Clase de Ciencias", profesor: "Profesor C" }
    ];

    // Función para cargar la página de clases
    function cargarClases() {
        contenido.innerHTML = "";
        const section = document.createElement("section");
        section.classList.add("classroom");
        const h2 = document.createElement("h2");
        h2.textContent = "Mis Clases";
        section.appendChild(h2);
        clases.forEach(clase => {
            const div = document.createElement("div");
            div.classList.add("class-card");
            div.innerHTML = `
                <h3>${clase.nombre}</h3>
                <p>Profesor: ${clase.profesor}</p>
                <button>Ir a la Clase</button>
            `;
            section.appendChild(div);
        });
        contenido.appendChild(section);
    }

    // Cargar clases al iniciar la página
    cargarClases();

    // Manejador de eventos para los enlaces de navegación
    document.querySelectorAll("nav a").forEach(enlace => {
        enlace.addEventListener("click", function(event) {
            event.preventDefault();
            const pagina = this.getAttribute("id");
            switch (pagina) {
                case "inicio":
                    // Aquí podrías cargar el contenido de la página de inicio si lo deseas
                    contenido.innerHTML = "<h2>Bienvenido a Google Classroom</h2>";
                    break;
                case "clases":
                    cargarClases();
                    break;
                case "tareas":
                    // Aquí podrías cargar el contenido de la página de tareas si lo deseas
                    contenido.innerHTML = "<h2>Tus Tareas</h2>";
                    break;
                case "calificaciones":
                    // Aquí podrías cargar el contenido de la página de calificaciones si lo deseas
                    contenido.innerHTML = "<h2>Tus Calificaciones</h2>";
                    break;
                default:
                    break;
            }
        });
    });
});
