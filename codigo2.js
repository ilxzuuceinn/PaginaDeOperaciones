const usuarios = [];

function registrar() {
    let user = document.getElementById("nuevoUsuario").value;
    let contra = document.getElementById("nuevaContrasena").value;
    let mensaje1 = document.getElementById("mensaje1");

    if (user === "" || contra === "") {

        mensaje1.textContent = "¡Completa todos los campos!";
        mensaje1.style.color = "red";

        mensaje.textContent = "¡Completa todos los campos!";
        mensaje.style.color = "red";
        return; 
    } 

    let yaExiste = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === user) {
            yaExiste = true;
            break;
        }
    }

    if (yaExiste) {
        mensaje1.textContent = "¡El nombre de usuario ya está registrado!";
        mensaje1.style.color = "red";
    } else {
        usuarios.push({ 
            usuario: user, 
            contrasena: contra 
        });
        
        mensaje1.textContent = "¡Registro exitoso!";
        mensaje1.style.color = "purple";
    }
}

function iniciarSesion(){
    let user = document.getElementById("usuario").value;
    let contra = document.getElementById("contrasena").value;

    let mensaje2 = document.getElementById("mensaje2");
    if (user === "" || contra === "") 
        mensaje2.textContent = "¡Ingresa tu usuario y contraseña!";
        mensaje2.style.color = "red";

    let mensaje = document.getElementById("mensaje");

    if (user === "" || contra === "") {
        mensaje2.textContent = "¡Ingresa tu usuario y contraseña!";
        mensaje2.style.color = "red";
        return;

    } 

    let opcionesValidas = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === user && usuarios[i].contrasena === contra) {
            opcionesValidas = true;
            break;
        }
    }

    if (opcionesValidas) {
        mensaje2.textContent = "¡Inicio de sesión exitoso!";
        mensaje2.style.color = "purple";
    } else {
        mensaje2.textContent = "¡Usuario o contraseña incorrectos!";
        mensaje2.style.color = "red";
    }
    if (opcionesValidas) {
        window.location.href = "bienvenido.html";
    }
    else {
        mensaje2.textContent = "¡Usuario o contraseña incorrectos!";
        mensaje2.style.color = "red";
    }
}