function carregar(){
    var msg = window.document.getElementById("mensagem");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    // var hora = 19;
    msg.innerText = `Agora são ${hora} horas.`
        if(hora >= 5 && hora < 12){
            img.scr="imagens/manha.png"
            document.body.style.background ="#e2cs9f"
            img.style.width= "380px"
            msg.innerText =`Agora são ${hora} horas, Bom Dia!`
        }
        else if(hora >= 12 && hora < 19){
            img.src="imagens/tarde.png"
            img.style.width= "300px"
            document.body.style.background ="#b9846f"
            msg.innerText =`Agora são ${hora} horas, Boa Tarde!`
        }
        else{
            img.src="imagens/noite.png"
            img.style.width="300px"
            img.style.height="220px"
            document.body.style.background ="#483d8b"
            msg.innerText =`Agora são ${hora} horas, Boa Noite!`
        }
            
    
}
