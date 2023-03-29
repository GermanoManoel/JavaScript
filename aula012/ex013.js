var agora = new Date()
var hora = agora.getHours()
  console.log("A hora é "+hora+" horas");
        if (hora > 6 && hora < 12){
            console.log("Bom Dia!");
        }else{
            if(hora > 12 && hora <= 18){
                console.log("Boa tarde!");
            }
                else if(hora >=19 && hora <=00){
                    console.log("Boa Noite!");
                    }else{
                        console.log("Boa Madrugada!");
                }
        }
            
 