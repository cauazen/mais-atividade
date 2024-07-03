function saudacao() {
    let frase = document.getElementById('frase')
    let genero = document.getElementById('generoSelect').value
    if (genero === "feminino") {
        frase.textContent = "Olá, moça"
    }
    else if (genero === "nao-binario") {
        frase.textContent = "Olá, moçe"
    }
    else if (genero === "masculino") {
        frase.textContent = "Olá, moço"
    }
    else {
        frase.textContent = "Olá!"
    }
}