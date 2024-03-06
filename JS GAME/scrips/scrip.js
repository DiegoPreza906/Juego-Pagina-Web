let numeroRandom=Math.floor(Math.random()*100)+1

let intentosrestante=10
let intentos=[]

resultado =document.getElementById("resultado")

botonRes=document.getElementById("submit")

botonRestar=document.getElementById("resetButton")


function ingame()
{
    let numeroElegido=parseInt(document.getElementById("numero").value, 10);
    
    if(isNaN(numeroElegido)||numeroElegido>100||numeroElegido<1)   //isNan ignifica que no tiene tipo
    {
        alert("Por favor introduce un número valido")
        return
    }   

    intentos.push(numeroElegido)    
    intentosrestante--

    spanIntentos=document.getElementById("intentos").textContent= intentos.join()  //para que se actualice y no se borre, para recorrerlos es join

    

    var rangoProximidad = 20;


    var diferencia = Math.abs(numeroElegido - numeroRandom);

    var porcentajeProximidad = (rangoProximidad - diferencia) / rangoProximidad * 100

    if(intentosrestante==0)
    {
        alert("Te quedaste sin intentos! La respuesta era:"+numeroRandom)
        botonRes.style.display="none"
    }

    if(numeroElegido==numeroRandom)
    {
        resultado.style.display="block"
        resultado.style.backgroundColor="green"
        botonRes.style.display="none"

        resultado.innerHTML='<p style="padding:20px"; color:white>Felicidades acertaste</p>' //agregar algo al html
    }

    else if(numeroElegido<numeroRandom)
    {
        if(porcentajeProximidad>75)
        {   
            resultado.style.display="block"
            resultado.style.backgroundColor="#45214A"

        }

        else if(porcentajeProximidad>50)
        {
            resultado.style.display="block"
            resultado.style.backgroundColor="#323050"

        }

        else if(porcentajeProximidad>25)
        {
            resultado.style.display="block"
            resultado.style.backgroundColor="#21445B"

        }
        else if(porcentajeProximidad>5)
        {
            resultado.style.display="block"
            resultado.style.backgroundColor="#1A6566"

        }
        else
        {
            resultado.style.display="block"
            resultado.style.backgroundColor="#5D8A66"
        }

        resultado.innerHTML='<p style="padding:20px"; color:white>Wups es más alto</p>' //agregar algo al html
    }

    
    else if(numeroElegido>numeroRandom)
    {


        if(porcentajeProximidad>75)
        {   
            resultado.style.display="block"
            resultado.style.backgroundColor="#042940"

        }

        else if(porcentajeProximidad>50)
        {
            resultado.style.display="block"
            resultado.style.backgroundColor="#005C53"

        }

        else if(porcentajeProximidad>25)
        {
            resultado.style.display="block"
            resultado.style.backgroundColor="#9FC131"

        }

        else if(porcentajeProximidad>5)
        {
            resultado.style.display="block"
            resultado.style.backgroundColor="#DBF227"
        }

        else
        {       
            resultado.style.display="block"
            resultado.style.backgroundColor="#D6D58E"
        }
        
        resultado.innerHTML='<p style="padding:20px"; color:white>Wups es más bajo</p>' //agregar algo al html
    }




}

function reset_game() 
{

    botonRes.style.display="block"

    numeroRandom=Math.floor(Math.random()*100)+1
 
    intentosrestante=10

    intentos=[]
    document.getElementById("resultado").style.display = "none"
    document.getElementById("submit").disabled = false
    document.getElementById("intentos").innerHTML = ''
}