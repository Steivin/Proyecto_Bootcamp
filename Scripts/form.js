window.onload = function() {
    document.getElementById("send").addEventListener("click", function(event){
        if(!validate()) {
            event.preventDefault();
        } else {
            send_form();
            // Limpia los campos de entrada
            document.getElementById("name").value = "";
            document.getElementById("last_name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("email_two").value = "";
            // Muestra una alerta de SweetAlert
            Swal.fire({
                title: "Datos enviados",
                text: "pronto nos pondremos en contacto",
                icon: "success",
            });
        }
    });
}
function send_form() {
    // Obteniendo los valores de los campos del formulario
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let email_two = document.getElementById("email_two").value;
    let send = document.getElementById("send").value
    // Verificando si alguno de los campos está vacío
    if (name.length == 0 || last_name.length == 0 || phone.length == 0 || email.length == 0 || email_two.length == 0) {
       // Mostrando un mensaje de error si algún campo está vacío
        Swal.fire({
            title: "Cajas de Texto vacías",
            text: "Alguna de las cajas de texto se encuentra vacía",
            icon: "error"
        });
    }else {
        // Si todo está bien, se puede proceder a enviar el formulario
        document.getElementById("send").value
    }
}
// Función para validar los campos del formulario
function validate(){
    // Obteniendo los valores de los campos del formulario
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("last_name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let email_two = document.getElementById("email_two").value;
    // Validando que el nombre tenga al menos 3 caracteres
    if (name.length < 3){
        // Mostrando un mensaje de error si el nombre es demasiado corto
        Swal.fire({
            title: "Nombre inferior a 3 caracteres",
            icon: "error",
        })
        return false;
    }
    // Validando que el apellido tenga al menos 3 caracteres
    if (lastName.length < 3){
        // Mostrando un mensaje de error si el apellido es demasiado corto
        Swal.fire({
            title: "Apellido inferior a 3 caracteres",
            icon: "error",
        })
        return false;
    }
    // Validando que el teléfono tenga exactamente 10 dígitos
    if (phone.length != 10){
        // Mostrando un mensaje de error si el teléfono no tiene 10 dígitos
        Swal.fire({
            title: "Teléfono debe tener 10 dígitos",
            icon: "error",
        })
        return false;
    }
    // Validando que el correo electrónico tenga al menos 5 caracteres
    if (email.length < 5){
        // Mostrando un mensaje de error si el correo electrónico es inválido
        Swal.fire({
            title: "Correo electrónico no válido",
            icon: "error",
        })
        return false;
    }
    // Validando que los dos correos electrónicos ingresados sean iguales
    if (email !== email_two){
        // Mostrando un mensaje de error si los correos electrónicos no coinciden
        Swal.fire({
            title: "Los correos electrónicos no coinciden",
            icon: "error",
        })
        return false;
    }
    // Si todas las validaciones pasan, la función retorna true
    return true;
}