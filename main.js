const contenedorMaxim = document.querySelector(".contenedorMaximo");

const countryContainer = document.querySelector(".country-container");
    countryContainer.classList.add("bg-gradient-secondary");
    countryContainer.classList.add("text-dark");
    countryContainer.classList.add("container");
    countryContainer.classList.add("d-flex");//estilos de la el contenedor 
    countryContainer.classList.add("justify-content-center");//pone todo en medio
    countryContainer.classList.add("flex-column-reverse");// pone todo en columna 

const buttonContainer = document.querySelector(".button-container");
    buttonContainer.classList.add("d-flex");
    buttonContainer.classList.add("flex-column");
    buttonContainer.classList.add("justify-content-md-center");

 var img = document.createElement("img");
    img.classList.add("img-gameover");
    img.src = "gameover.jpg"

var contadorP = 0; 
var puntos = 0;

//llama a la api
function fetchCountries(region) {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then(res => res.json())
    .then(data => search(data))
}
//funcion random principal
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//funcion que selecciona el pais 
function search(grupo) {

    const decidir = getRandomInt(2);
    
//guardan el id de los paises seleccionados 
    const random = getRandomInt(53);
    const paisran1 = getRandomInt(40);
    const paisran2= getRandomInt(40);
    const paisran3 = getRandomInt(40);


    //guarda a los paises seleccionados 
    const seleccion = grupo[random];
    const paisfalso1 = grupo[paisran1];
    const paisfalso2 = grupo[paisran2];
    const paisfalso3 = grupo[paisran3];

    var arreglo = [seleccion, paisfalso1, paisfalso2 , paisfalso3];

    var arr = [seleccion, paisfalso1, paisfalso2, paisfalso3];
    arr = shuffle(arr);
    console.log(arr);

    Funseleccion(decidir ,arr[0], arr[1], arr[2], arr[3], seleccion);
}


//funcion que crea la carta y pregunta 
function createCardFlags(country) {
    const card = document.createElement("div");
    card.classList.add("country-block");

    const flagContainer = document.createElement("div");
    flagContainer.classList.add("img-container");
    flagContainer.classList.add("d-flex");//estilos de la el contenedor 
    flagContainer.classList.add("justify-content-center")

    const sprite = document.createElement("img");
    sprite.src = country.flags.png;

    flagContainer.appendChild(sprite);

    const pregunta = document.createElement("h2");
    pregunta.classList.add("pregunta");
    pregunta.textContent = "This flag is from the country of... :";
    pregunta.classList.add("d-flex");
    pregunta.classList.add("justify-content-center")

    countryContainer.appendChild(flagContainer);
    countryContainer.appendChild(pregunta);
    BotonNext(flagContainer, pregunta);

    

}

//crea card pregunta de capitales 
function createCardCapital(country) {
    const card = document.createElement("div");
    card.classList.add("country-block");
    card.setAttribute("id", "carta");

    const flagContainer = document.createElement("div");
    flagContainer.classList.add("img-container");
    flagContainer.classList.add("d-flex");//estilos de la el contenedor 
    flagContainer.classList.add("justify-content-center")

    const sprite = document.createElement("img");
    sprite.src = country.flags.png;

    flagContainer.appendChild(sprite);

    const pregunta = document.createElement("h2");
    pregunta.classList.add("pregunta");
    pregunta.textContent = "The capital of " + country.name.common + " is: ";
    pregunta.classList.add("d-flex");
    pregunta.classList.add("justify-content-center");

    countryContainer.appendChild(flagContainer);
    countryContainer.appendChild(pregunta);
    BotonNext(flagContainer, pregunta);

    

}

//funcion que crea el boton correcto de flags 
function crearBotonesF(arr, paisS) {

    const boton = document.createElement("button");
    boton.classList.add("button-quiz");
    boton.classList.add("btn");
    boton.classList.add("btn-primary");
    boton.textContent = arr.name.common;
    buttonContainer.appendChild(boton);
    boton.addEventListener("click", function() {
        
        if(boton.textContent == paisS.name.common)
        {
             boton.classList.remove("btn-primary");
            boton.classList.add("btn-success");
             puntos = puntos +1 ;
        }
       else{
            boton.classList.remove("btn-primary");
            boton.classList.add("btn-danger");
       }
      
        console.log(puntos, "Puntos del jugador");
    })

} 


//Crea Botnes de Capital
function crearBotonesC(arr,paisS) {

    const boton = document.createElement("button");
    boton.classList.add("button-quiz");
    boton.classList.add("btn");
    boton.classList.add("btn-primary");
    boton.setAttribute("id", "boton");
    boton.textContent = arr.capital;
    buttonContainer.appendChild(boton)
    boton.setAttribute("id", "boton");
    boton.addEventListener("click", function() {
        if(boton.textContent == paisS.capital)
        {
             boton.classList.remove("btn-primary");
            boton.classList.add("btn-success");
             puntos = puntos +1 ;
        }
       else{
            boton.classList.remove("btn-primary");
            boton.classList.add("btn-danger");
       }
        console.log(puntos , "Puntos del jugador");
    })


} 

function Funseleccion(select, pais4, pais1, pais2,pais3, paisselect) {

    if (select=="0"){

        createCardCapital(paisselect);
       
        
        crearBotonesC(pais1, paisselect);
        crearBotonesC(pais2, paisselect);
        crearBotonesC(pais3, paisselect);
        crearBotonesC(pais4, paisselect);
        }
        else {
            createCardFlags(paisselect);
            crearBotonesF(pais1, paisselect);
            crearBotonesF(pais2, paisselect);
            crearBotonesF(pais3, paisselect);
            crearBotonesF(pais4, paisselect);
            }

        }

//boton siguiente 
        function BotonNext(funcion, texto) {
            const botonNext = document.createElement("button");
            botonNext.textContent= "Next";
            botonNext.classList.add("justify-content-md-center");
            botonNext.classList.add("BotonNext");
            botonNext.classList.add("d-flex");
            botonNext.setAttribute("id", "botonNext");
            buttonContainer.appendChild(botonNext);
            botonNext.addEventListener("click", function() {
                prueba2(funcion, texto);
                fetchCountries("europe");
            } ) 
                
            }
//funcion para borrar html
            function prueba2(funcion, texto) {
                contadorP = contadorP +1;
                contador(contadorP);
                console.log(contadorP);
                borrar(funcion, texto);
            }


            function borrar(funcion,texto)
            {
                buttonContainer.innerHTML = "";
                funcion.innerHTML = "";
                texto.innerHTML = "";
            }
            
            function contador (contador){
                if (contador ==10){
                    contenedorMaxim.innerHTML = "";
                    contenedorMaxim.appendChild(img);
                    alert("Tu puntuacion es: " + puntos + "   " + "Recarga el navegador para volver a jugar <3");
                }
            }
                //prueba de la funcion shuffle
            function shuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;
              
              
                while (0 !== currentIndex) {
              
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex -= 1;
              
                  temporaryValue = array[currentIndex];
                  array[currentIndex] = array[randomIndex];
                  array[randomIndex] = temporaryValue;
                }
              
                return array;
              }
              
             
//llama la region 
fetchCountries("europe");
