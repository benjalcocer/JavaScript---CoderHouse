let notapar1 = 0
let notapar2 = 0
let rta = true


function promocion(){
let num = true
do{
    let notapar1 = parseFloat(prompt("Ingrese la nota del 1er Parcial"));
    let notapar2 = parseFloat(prompt("Ingrese la nota del 2da Parcial"));
    let notaparsum = notapar1 + notapar2
    if(notapar1>10 || notapar2>10){
        alert("Ingrese los valores correctos que son menores a 10 en ambos parciales")
    }
    else{
        if((notapar1>=8 || notapar2>=8) && (notaparsum >= 16)){
            alert("Felicitaciones usted a promocionado la materia!")
        }
        else{
            if(notapar1<6 && notapar2<6){
                alert("Debe recuperar ambos parciales")
            }
            else{
                if(notapar1<8){
                    let notdebpar1 = 16 - notapar2
                    if(notdebpar1 > 10){
                        alert("debe recuperar ambos parciales")
                    }
                    else{
                        alert("Debe recuperar el 1er parcial y sacar una nota de " +notdebpar1+ " para promocionar")
                    }
                }
                else{
                    let notdebpar2 = 16 - notapar1
                    if (notdebpar2 > 10){
                        alert("debe recuperar ambos parciales")
                    }
                    else{
                        alert("Debe recuperar el 2do parcial y sacar una nota de " +notdebpar2+ " para promocionar")
                    }
                        
                }
            }
        }
        num = false
    }
    
}while(num)
}


function parc(){

    let notapar1 = prompt ("Ingrese la nota del 1er Parcial")

    if(notapar1 >= 6){
        let notdebpar1 = 16 - notapar1
        alert("Si quiere promocionar la materia debe sacarse una nota de " +notdebpar1)
    }
    else{
        alert("debe recuperar el 1er parcial")
    }
}


do{
    alert("Buenas! ¿Usted rindio los 2 parciales?")
        let respuesta = prompt("Ingrese 1 o 2")
        if(respuesta > 2)
        {
            alert("No existe tal cantidad de parciales")
        }
        else{
            if(respuesta=="2"){
                promocion();
                rta = false
            }
            else{
                parc();
                rta = false
            }
        }

    }while(rta)