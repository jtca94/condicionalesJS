const imagen = document.getElementById("img");
//cambio de borde en imagen
imagen.addEventListener("click", () => {
    let clase = imagen.className;
    
    if(clase == "w-50 h-50 first") {
        imagen.className = "w-50 h-50 second" ;
        return
    }
    if (clase == "w-50 h-50 second") {
        imagen.className = "w-50 h-50 first" ;
    }
})