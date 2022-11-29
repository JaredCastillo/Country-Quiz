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
//funcion para randomizar pequeño
  function getRandomButton(max) {
    return Math.floor(Math.random() * max);
  }

//funcion que selecciona el pais 
function search(grupo) {

    const decidir = getRandomInt(2);
    console.log(decidir);

    const random = getRandomInt(53);

    const paisran1 = getRandomInt(40);

    const paisran2= getRandomInt(10);
    const paisran3 = getRandomInt(20);



    const seleccion = grupo[random];
    
    const paisfalso1 = grupo[paisran1];
    const paisfalso2 = grupo[paisran2];
    const paisfalso3 = grupo[paisran3];

    comparacion(seleccion, paisfalso1, paisfalso2, paisfalso3);
    comparacion(paisfalso1, seleccion, paisfalso2, paisfalso3);
    comparacion(paisfalso2, seleccion, paisfalso1 , paisfalso3);
    comparacion(paisfalso3, seleccion, paisfalso1, paisfalso2 );

    console.log(seleccion);

    Funseleccion(decidir, seleccion, paisfalso1, paisfalso2, paisfalso3);

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
    pregunta.textContent = "This flags is from the country of... :";
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
    pregunta.classList.add("justify-content-center")

    countryContainer.appendChild(flagContainer);
    countryContainer.appendChild(pregunta);
    BotonNext(flagContainer, pregunta);

    

}

//funcion que crea el boton correcto de flags 
function crearBotonesF(arr) {

    const boton = document.createElement("button");
    boton.classList.add("button-quiz");
    boton.classList.add("btn");
    boton.classList.add("btn-primary");
    boton.textContent = arr.name.common;
    buttonContainer.appendChild(boton);
    boton.addEventListener("click", function() {
        boton.classList.remove("btn-primary");
        boton.classList.add("btn-success");
        puntos = puntos +1;
        console.log(puntos, "Puntos del jugador");
    })

} 

//Crea botones incorrectos de flags
function crearBotonesFalsos(countryf) {
    const botonf = document.createElement("button");
    botonf.classList.add("buttonf-quiz");
    botonf.classList.add("btn");
    botonf.classList.add("btn-primary");
    botonf.textContent = countryf.name.common;
    buttonContainer.appendChild(botonf)
    botonf.addEventListener("click", function() {
        botonf.classList.remove("btn-primary");
        botonf.classList.add("btn-danger");
        botonf.classList.add("disabled")
        console.log(puntos , "Boton equivocado");

    })
    
}

//Crea Botnes de Capital
function crearBotonesC(arr) {

    const boton = document.createElement("button");
    boton.classList.add("button-quiz");
    boton.classList.add("btn");
    boton.classList.add("btn-primary");
    boton.textContent = arr.capital;
    buttonContainer.appendChild(boton)
    boton.setAttribute("id", "boton");
    boton.addEventListener("click", function() {
        boton.classList.remove("btn-primary");
        boton.classList.add("btn-success");
        puntos = puntos +1;
        console.log(puntos , "Puntos del jugador");
    })


} 

//funcion que compara numeros aleatorios
function comparacion(comp1, comp2, comp3, comp4) {
    if (comp1 = comp2) {
        comp2 = getRandomInt(40);
        return comp2;
    }
    else if (comp1 = comp3) {
        comp3 = getRandomInt(40);
        return comp3;
    }
    else if (comp1 = comp4) {
        comp4 = getRandomInt(40);
        return comp4;
    }
    
}

function Funseleccion(select, paisP, pais1, pais2,pais3 ) {

    if (select=="0"){

        createCardCapital(paisP);
        crearBotonesC(paisP);
        crearBotonesFalsos(pais1);
        crearBotonesFalsos(pais2);
        crearBotonesFalsos(pais3);
        }
        else {
            createCardFlags(paisP);
            crearBotonesF(paisP);
            crearBotonesFalsos(pais1);
            crearBotonesFalsos(pais2);
            crearBotonesFalsos(pais3);
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
//funcion para borrar html y traer de nuevo a fetch
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
                if (contador ==11){
                    contenedorMaxim.innerHTML = "GameOver";
                    contenedorMaxim.innerHTML = "Estos son tus puntos : " + puntos;

                }
            }
        
//llama la region 
fetchCountries("europe");
