window.cipher = {
  /*Cifrar texto */
  encode : (infonumero, infotext ) => {
       
    let resultadoLetras= "";
    let palabra;

  for(let i=0; i < infotext.length; i++){
    let resultadoNumero;
    palabra = infotext.charCodeAt(i);//numero de la letra en ASCII 
   
    //condicion para que muestre las mayusculas 
   if(palabra >=65 && palabra <= 90 ){
       
     resultadoNumero = (palabra - 65 + parseInt(infonumero))% 26 + 65;
     resultadoLetras = resultadoLetras + String.fromCharCode(resultadoNumero);
     }
   
     //Condicion para que lleve un espacio
    if (palabra === 32){
      resultadoLetras += " ";
    }
    //condicion para que muestre las minusculas
    if (palabra >= 97 && palabra <= 122 ){

    resultadoNumero = (palabra - 97 + parseInt(infonumero))% 26 + 97;
    resultadoLetras = resultadoLetras + String.fromCharCode(resultadoNumero);
   }
   //condicion para que muestre numeros
    if (palabra >= 48 &&  palabra <= 57) {
     
    resultadoNumero = (palabra - 48 + parseInt(infonumero))% 10 + 48;
    resultadoLetras = resultadoLetras + String.fromCharCode(resultadoNumero);

    }
    }

  //console.log(resultadoLetras)
  return resultadoLetras;
  
  
  },

  /*Decifrar texto */
  decode: (infonumero,infotext) => {
      
    let resultadoLetras= "";
    let palabra;

  for(let i=0; i < infotext.length; i++){
    let resultadoNumero;
    palabra = infotext.charCodeAt(i);//numero de la letra en ASCII 

   // Condicion para que muestre las letras Mayusculas
   if(palabra >=65 && palabra <= 90 ){
       
     resultadoNumero = (palabra + 65 - parseInt(infonumero))% 26 + 65;
     
     resultadoLetras += String.fromCharCode(resultadoNumero);
      
    }
    
    // Condicion para que muestre espacios entre las palabras
    if (palabra === 32){
      resultadoLetras += " ";
    }

    //Condicion para que muestre minusculas
    if (palabra >=97 && palabra <= 122){

      resultadoNumero = (palabra - 122 - parseInt(infonumero))% 26 + 122 ;
      resultadoLetras += String.fromCharCode(resultadoNumero);

    }
     //condicion para que muestre numeros
   if (palabra >= 48 && palabra <= 57) {
   
    resultadoNumero = (palabra - 57- parseInt(infonumero))% 10 + 57;
    resultadoLetras  += String.fromCharCode(resultadoNumero);

   }

    
  }
  
    return resultadoLetras ;

  }

}
