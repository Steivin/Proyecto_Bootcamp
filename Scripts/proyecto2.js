let cursos = [
    { titulo: "Curso de JavaScript", descripcion: "Aprende JavaScript desde cero.", duracion: "4 semanas" },
    { titulo: "Curso de HTML y CSS", descripcion: "Domina el desarrollo web.", duracion: "3 semanas" },
    { titulo: "Curso de Python", descripcion: "Introducción a la programación en Python.", duracion: "5 semanas" },
    { titulo: "Curso de JAVA", descripcion: "Introducción a la programación en JAVA.", duracion: "5 semanas" }
];

let listaCursos = document.getElementById("listaCursos");

cursos.forEach(curso => {
    let li = document.createElement("li");
    li.innerHTML = `<h3>${curso.titulo}</h3><p>${curso.descripcion}</p><p>Duración: ${curso.duracion}</p>`;
    listaCursos.appendChild(li);
});

// Variables
let usuarios = [];
const modal = document.getElementById('modalRegistro');
const btnAbrirModal = document.getElementById('btnAbrirModal');
const cerrarModal = document.getElementById('cerrarModal');
const formRegistro = document.getElementById('formRegistro');
const usuarioRegistrado = document.getElementById('usuarioRegistrado');
const errorNombre = document.getElementById('errorNombre');

// Abrir modal
btnAbrirModal.addEventListener('click', () => {
    modal.style.display = 'block';
    errorNombre,innerHTML('');
});

// Cerrar modal
cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Registrar usuario
formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const errorNombre = document.getElementById("errorNombre");

    const email = document.getElementById('email').value.trim();
    console.log(errorNombre);
    let esValido = true;
    if (nombre === "") {
        errorNombre.innerHTML = "El usuario no puede estar vacío";
        esValido = false
    } else if (nombre.length < 2) {
        errorNombre.innerHTML = "El usuario debe tener al menos 3 caracteres";
        esValido = false
    }

    // Obtener los cursos seleccionados
    const cursosSeleccionados = Array.from(document.querySelectorAll('.curso-interes:checked'))
        .map(checkbox => checkbox.value);
    console.log(cursosSeleccionados[0]);


    // Mostrar nombre del usuario en la parte superior
    if (usuarioRegistrado) {
        alert(`${ nombre }, estos son los cursos seleccionados: ${cursosSeleccionados.join(', ')}`)
        usuarioRegistrado.innerHTML = `Bienvenido, ${ nombre }`;
        usuarioRegistrado.style.fontWeight = 'bold';
    }
    if (esValido) {
        alert("Formulario enviado con éxito");
        registrarUsuario(nombre, email, cursosSeleccionados);
        guardarEnLocalStorage();

        // Cerrar modal
        modal.style.display = 'none';

        // Limpiar formulario
        formRegistro.reset();
    }


});

function registrarUsuario(nombre, email, cursosInteres) {
    let usuario = { nombre, email, cursos: cursosInteres };
    usuarios.push(usuario);
    console.log(usuarios);
}


// Guardar datos en Local Storage
function guardarEnLocalStorage() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Cargar datos desde Local Storage
function cargarDesdeLocalStorage() {
    const datos = localStorage.getItem('usuarios');
    if (datos) {
        usuarios = JSON.parse(datos);
    }
}

// Al cargar la página, recuperar los datos guardados
document.addEventListener('DOMContentLoaded', () => {
    cargarDesdeLocalStorage();
    if (usuarios.length > 0) {
        // Mostrar al último usuario registrado (opcional)
        const ultimoUsuario = usuarios[usuarios.length - 1];
        if (usuarioRegistrado) {
            usuarioRegistrado.innerHTML = `Bienvenido, ${ ultimoUsuario.nombre }`;
            usuarioRegistrado.style.fontWeight = 'bold';
        }
    }
});

document.getElementById('borrarDatos').addEventListener('click', () => {
    localStorage.removeItem('usuarios');
    usuarios = [];
    usuarioRegistrado.innerHTML = '';
    alert('Datos borrados.');
});