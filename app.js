// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo(){
        /*if (inputAmigo.value == ""){
        alert("Debes ingresar un nombre");
        } 
        es lo mismo que hacer: */
        if(!inputAmigo.value){
            alert("Debes ingresar un nombre");
        } else if (!isNaN(parseFloat(inputAmigo.value))){
            alert("No debes ingresar un numero, ingresa un nombre");
        } else {
            listaAmigos.push(inputAmigo.value);
        //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
        }
    }
    
    function sortearAmigo(){
        const numAleatorio =  Math.floor(Math.random() * listaAmigos.length);
        const amigoSecreto = listaAmigos[numAleatorio];
        ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    }


    
