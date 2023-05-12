function clicou(){
var num = window.document.getElementById("inum");
var butao = window.document.getElementById("butao");
butao.addEventListener("click",clicou);
    if(num.value.length == 0){
        window.alert("Por favor, digite um número acima de 0")
    }
    
}