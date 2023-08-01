let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function mostrarContenido() {
    var contenido = document.getElementById("contenido");
    var boton = document.getElementById("boton-leer");

    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        boton.textContent = "Leer Menos";
    } else {
        contenido.style.display = "none";
        boton.textContent = "Leer Más";
    }
}