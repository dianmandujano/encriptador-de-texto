// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar() {
    let texto = document.getElementById("input").value;
    let textoEncriptado = texto
        .replace("e", "enter")
        .replace("i", "imes")
        .replace("a", "ai")
        .replace("o", "ober")
        .replace("u", "ufat");
    
    document.getElementById("output").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("input").value;
    let textoDesencriptado = texto
        .replace("enter", "e")
        .replace("imes", "i")
        .replace("ai", "a")
        .replace("ober", "o")
        .replace("ufat", "u");
    
    document.getElementById("output").value = textoDesencriptado;
}

function copiar() {
    let resultado = document.getElementById("output").value;
    navigator.clipboard.writeText(resultado);
}