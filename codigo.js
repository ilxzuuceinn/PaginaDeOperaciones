let pantalla = document.getElementById("pantalla");

function Agregar(dato) {
    pantalla.value += dato;
}

function Eliminar(){
    pantalla.value = "";
}

function Calcular() {
    pantalla.value = eval(pantalla.value);
}