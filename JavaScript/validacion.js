function validacion() {
    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var contraseña1 = document.getElementById("contraseña1").value;
    var contraseña2 = document.getElementById("contraseña2").value;
    var casilla = document.getElementById("casilla").checked;
    var datosregistros = {"usuario": usuario, "email": email, "contraseña1": contraseña1, "contraseña2": contraseña2};
    var patternContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$@!%.&*?\s])[a-zA-Z0-9#$.@!%&*?\s]{8,16}$/;
    var patternEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

    if (usuario !== "" && email !== "" && contraseña1 !== "" && contraseña2 !== "" && contraseña1 !== contraseña2) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas no coinciden.'
        });
    }
    else if (usuario === "" || email === "" || contraseña1 === "" || contraseña2 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pueden dejar campos vacíos'
        });
    }
    else if (!patternContraseña.test(contraseña1)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña no cumple con el formato requerido.'
        });
    }
    else if (!patternEmail.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El email no cumple con el formato requerido.'
        });
    }
    else if (usuario !== "" && email !== "" && contraseña1 !== "" && contraseña2 !== "" && contraseña1 === contraseña2 && !casilla) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes leer y aceptar nuestra política de privacidad'
        });
    }
    else {
        var jsonregistro = JSON.stringify(datosregistros);
        Swal.fire({
            icon: 'success',
            text: jsonregistro
        });
    }
}
