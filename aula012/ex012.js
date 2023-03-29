var idade = 20;
    console.log("Você tem "+idade+" anos");
        if(idade < 16 ){
            console.log( "não pode votar com " +idade+ " anos!");
        }else{
            if(idade < 18 || idade > 65){
                console.log("Você pode votar com "+idade+" anos, Mas não é obrigatório ainda!")
            }else{
                console.log("Já pode votar com "+idade+" anos, É obrigatório.");
            }
        }
    

        