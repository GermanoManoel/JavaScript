let amigo = {
nome:"Germano",
sexo:"M",
peso:"68.3",
engordar(p=0){
    console.log("Engordou")
    this.peso += p
}}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)