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


// control de botones 1
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
  b1.addEventListener("click", () => {
    S1.value--
    if (S1.value < 0) {
        S1.value = 0;
    }
  })
  b2.addEventListener("click", () => {
    S1.value++
  })
// control de botones 2
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")
  b3.addEventListener("click", () => {
    S2.value--
    if (S2.value < 0) {
        S2.value = 0;
    }
  })
  b4.addEventListener("click", () => {
    S2.value++
  })
  // control de botones 3
const b5 = document.getElementById("b5")
const b6 = document.getElementById("b6")
  b5.addEventListener("click", () => {
    S3.value--
    if (S3.value < 0) {
        S3.value = 0;
    }
  })
  b6.addEventListener("click", () => {
    S3.value++
  })