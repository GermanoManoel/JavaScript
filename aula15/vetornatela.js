let valores  = [3,2,8,1,4,5,];
console.log(valores)
valores.sort()
// for(let pos=0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

//          OU          //

for (let pos in valores){
// O in a gente ler como: Dentro ou Em
// For a gente ler : Equanto
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}