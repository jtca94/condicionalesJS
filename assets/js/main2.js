const imagen = document.getElementById("img");
//cambio de borde en imagen
imagen.addEventListener("click", () => {
    let clase = imagen.className;
    // no es escalable pero para la tarea funciona
    if(clase == "w-25 mt-5 h-50 first") {
        imagen.className = "w-25 mt-5 h-50 second" ;
        return
    }
    if (clase == "w-25 mt-5 h-50 second") {
        imagen.className = "w-25 mt-5 h-50 first" ;
    }
})
