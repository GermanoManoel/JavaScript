function clicou(){
    var numero = window.document.getElementById("inum");
    var tab = window.document.getElementById("seltab");
        if(numero.value.length == 0){
            window.alert("Por favor, digite um número acima de 0");
        }else{
            var n = Number(numero.value);
            var c = 1;
            tab.innerHTML = ""
            for(var c = 1; c <= 10; c++){
                var item = window.document.createElement("option");
                item.text = `${n} X ${c} = ${n*c}`
                item.value = `tab${c}`
                tab.appendChild(item); // Adicionar um elemento filho
            }
        }
}