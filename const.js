const frutas = ['maçã', 'banana', 'uva', 'laranja', 'pitaya']
console.log(frutas)
console.log(frutas[2])
console.log(frutas[4])

let index = 0
while(index < frutas.lenght){
    console.log(`${index + 1}: $frutas[index]`)
    if(frutas[index] === 'uva'){
        console.log('Encontre a uva')
        break
    }
    index++
}