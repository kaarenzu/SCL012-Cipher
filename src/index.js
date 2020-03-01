// boton para Cifrar
    let infotextdeci= document.getElementById("textodescifrado");// Resultado texto cifrado
    let botonCifrar = document.getElementById("botonCifrar");//Hacer el click para cifrar
    botonCifrar.addEventListener("click", llamarEncode); 

//BOTON PARA DESCIFRAR
    let botonDescifrar = document.getElementById("botonDescifrar");//Hacer el click para descifrar
    botonDescifrar.addEventListener("click", llamarDecode); 
    
    // Boton para limpiar
    let botonBorrar= document.getElementById("borrar");
    botonBorrar.addEventListener("click", limpiarTodo);     

   function limpiarTodo (){
    let infotextdeci= document.getElementById("textodescifrado");   
    var espacio=' ';
    infotextdeci.innerHTML= espacio;
   }

   // Codigo para cifrar
function llamarEncode(){
    let infotext= document.getElementById("ingresartexto").value; //Ingresa texto a cifrar
    let infonumero= document.getElementById("number").value; // Numero de offset 
    let resultado= cipher.encode(infonumero, infotext); // resultado de cifrado en Cipher.js

    infotextdeci.innerHTML=  resultado; // Mostrar el resultado del Cifrado en el html inpt infotextdeci 
    }
// Codigo para descifrar 

function llamarDecode () {

    let infotext= document.getElementById("ingresartexto").value; //Ingresa texto a cifrar
    let infonumero= document.getElementById("number").value; // Numero de offset 
    let resultadoDescifrado= window.cipher.decode(infonumero, infotext);// resultado de descifrado en Cipher.js
  
    infotextdeci.innerHTML=  resultadoDescifrado;// Mostrar el resultado del Descifrado en el html inpt infotextdeci

}


