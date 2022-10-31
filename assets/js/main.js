const btnCheck = document.getElementById("btnCheck");
const S1 = document.getElementById("S1");
const S2 = document.getElementById("S2");
const S3 = document.getElementById("S3");

const parrafo = document.getElementById("parrafo");
// Solo positivos, sin decimales, 
btnCheck.addEventListener("click", () => {
    let sum = parseInt(S1.value)+parseInt(S2.value)+parseInt(S3.value);
    if (sum <= 10) {
        parrafo.innerHTML = `Llevas ${sum} sticker`;
    }
    
    else {
        parrafo.innerHTML = "Llevas demasiados Stickers"
    }
}) 