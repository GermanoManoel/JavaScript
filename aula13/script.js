function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = window.document.getElementById("txtano");
    var resultado = window.document.querySelector("div#res");
    if(fAno.value.lenght == 0 || Number(fAno.value) > ano){
        window.alert("[ERRO] sVerifique os dados e tente novamente!");
    }else{
        var sexo = window.document.getElementsByName("sexo");
        var idade = ano - Number(fAno.value);
        resultado.innerHTML= `Idade calculada ${idade}`;
        var genero =""
        var imagem = window.document.createElement("img");
        imagem.setAttribute("id","foto")
        if(sexo [0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 10){
                //Criança
                imagem.setAttribute("src", "imagens/bbM.png");
                imagem.style.height="200px"
            }else if (idade < 21){
                //Jovem
                imagem.setAttribute("src","imagens/jovemM.png");
                imagem.style.height="200px"
            }else if (idade < 50){
                //Adulto
                imagem.setAttribute("src","imagens/adultoM.png");
                imagem.style.height="200px"
            }else{
                //Idoso
                imagem.setAttribute("src","imagens/idoso.png");
                imagem.style.height="200px"
            }
        }else if (sexo[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                //Criança
                imagem.setAttribute("src","imagens/bbmulher.png");
                imagem.style.height="200px"
            }else if (idade < 21){
                //Jovem
                imagem.setAttribute("src","imagens/adultoF.png");
                imagem.style.height="200px"
            }else if (idade < 50){
                //Adulto
                imagem.setAttribute("src","imagens/adultoF.png");
                imagem.style.height="200px"
            }else{
                //Idoso
                imagem.setAttribute("src","imagens/idosa.png");
                imagem.style.height="200px"
            }
        }
        resultado.style.textAlign = "center";
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resultado.appendChild(imagem);
    }
}