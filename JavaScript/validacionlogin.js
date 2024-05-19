function validacionlogin() {
    var usuario123 = document.getElementById("usuario123").value;
    var contraseña123 = document.getElementById("contraseña123").value;
    if (usuario123 === "" || contraseña123 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pueden dejar campos vacíos'
        });
    }
    else {
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Bienvenido de nuevo'
        });
    }
}