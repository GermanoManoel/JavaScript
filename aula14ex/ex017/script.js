function tabuada(){
  var num = window.document.getElementById("txtn"); 
  var tab = window.document.getElementById("seltab");
  if ( num.value.lenght == 0){
     window.alert("Por favor, digite um número!");
  } else{
    var n = Number(num.value); // valor
    var c = 1; //Variavel contadora 
    tab.innerHTML = ""
    while(c <= 10){
        var item = window.document.createElement("option");
        item.text = `${n} X ${c} = ${n*c}`
        tab.appendChild(item); // Adicionar um elemento filho
        c++
    }
  }
 
}