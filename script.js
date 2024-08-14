
function botonEncriptar() {
    const textoEncriptado = encriptar(document.getElementById("text_area").value)
    document.getElementById("text_area_1").value = textoEncriptado || '';
}
function encriptar(stringEncriptada){
    // Se remplaza () con [] 
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "over"], ["u", "ufat"]];
    // pasa de tolowerCase a toLowerCase
    stringEncriptada = stringEncriptada.toLowerCase()
 
    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
 
}


function botonDecencriptar() {
    const textoDecencriptado = decencriptar(document.getElementById("text_area").value)
    document.getElementById("text_area_1").value = textoDesencriptado || '';
}
function decencriptar(stringDecencriptada){
    // Se remplaza () con [] 
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "over"], ["u", "ufat"]];
    // pasa de tolowerCase a toLowerCase
    stringEncriptada = stringDecencriptada.toLowerCase()
 
    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringDecencriptada.includes(matrizCodigo[i][0])){
            stringDecencriptada = stringDecencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDecncriptada
 
}