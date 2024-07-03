
function saudacao(genero){
if(genero === "feminino"){
    frase = "Legal, moça"
}
else if(genero === "nao-binário"){
    frase = "Legal, moçe"
}else if(genero === "masculino:"){
    frase = "Legal, moço"
}else {
    frase = "Legal, ser vivo"
}
return(frase)
}
let genero1 = "feminino"
let genero2 = "nao-binario"
let genero3 = "masculino"
let genero4 = "outro"

console.log(`Genero: ${genero1}, ${saudacao(genero1)}`)
console.log(`Genero: ${genero2}, ${saudacao(genero2)}`)
console.log(`Genero: ${genero3}, ${saudacao(genero3)}`)
console.log(`Genero: ${genero4}, ${saudacao(genero4)}`)