document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;

    if (validarDatos(nombre, email, contraseña)) {
        Swal.fire({
            text: "Tu registro fue realizado correctamente",
            icon: "success"
        });

        document.getElementById('registroForm').reset();
    }
});

function validarDatos(nombre, email, contraseña) {
    if (nombre.trim() === '' || email.trim() === '' || contraseña.trim() === '') {
        Swal.fire({
            text: "Debes completar todos los campos",
            icon: "warning"
        });
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            text: "Debes ingresar un email válido",
            icon: "warning"
        });
        return false;
    }

    if (contraseña.length < 6) {
        Swal.fire({
            text: "La contraseña debe tener al menos 6 caracteres",
            icon: "warning"
        });
        return false;
    }
    return true;
}



