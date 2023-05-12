let num = [5,8,2,9,3];
num.push(1)

console.log(num)
console.log(`O tamanho do seu vetor é ${num.length}`)
console.log(`O primeiro valor do veto é ${num[0]}`)
let pos = num.indexOf(11)
if( pos == -1){
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(`O valor está na posição ${pos}`)
}
