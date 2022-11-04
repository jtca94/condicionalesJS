const verificar = document.getElementById("btnCheck");
const c1 = document.getElementById("1");
const c2 = document.getElementById("2");
const c3 = document.getElementById("3");
const respuesta = document.getElementById("respuesta");

verificar.addEventListener("click", () => {
    
    if(c1.value == 7 && c2.value == 1 && c3.value == 4) {
        respuesta.innerHTML = `password 2 correcto`
        
    }
    else if(c1.value == 9 && c2.value == 1 && c3.value == 1) {
        respuesta.innerHTML = `password 1 correcto`
    }
    else {
        respuesta.innerHTML = `clave incorrecta` 
    }
})