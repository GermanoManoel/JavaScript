                                //Primeita Possibilidade//
var c = 1;
/*Primeiro o teste lógico depois faz o bloco. Essa estrutura de repetição é chamada de teste lógico no inicio.
( While = Enquanto )*/

/*while (c <= 7){
    console.log(`Passo ${c}`);
    c++ // ou c = c + 1
}*/

//---------------------------------
                                //Segunda Possibilidade//
/*Oque vai mudar é que nessa segunda, o bloco vem primeiro e depois o teste lógico. Essa estrutura de repetição é chamada de teste lógico no final. 
( Do = Faça ) */ 

/*do{
    console.log(`Passo ${c}`);
    c++
}while(c <= 7);*/

//----------------------------------
                        //Estrutura de repetição Hexágono irregular//
                        
console.log("Vai começar...");
for(var c = 2;c <= 7;c++){ 
    console.log(c);
}
console.log("FIM!");

/* Primeiro vem a inicialização: var c = 1; Segundo o teste lógico: c <= 7; e em terceiro vem o incremento: c++. Lembrando que primerio ele vai fazer a inicialização e teste lógico ao exercutar o código, se bloco for verdadeiro,ele vai voltar(fazendo o LOOP) e enquanto estiver voltando ele faz o incremento fazendo de novo o teste lógico*/