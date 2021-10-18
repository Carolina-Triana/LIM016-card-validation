import validator from './validator.js';
const fromCard = document.getElementById("valueCard");
let numMk ;
let cardNumber;


//agregando un evento para que se ejecute cuando 'keyup' se levante la tecla
fromCard.cardOcult.addEventListener( 'keyup' ,  ( e )  =>  {
//(e)creando el evento para acceder a el, con .target que es donde se encuentra el input .value acceder al valor
    let cardOcult = e.target.value;
//volviendo a declarar la misma variable para agregar el metodo .replace y agregar expresiones regulares
fromCard.cardOcult.value = cardOcult
    .replace(/\D/g, '') //elimina las letras al levantar la tecla
    .replace(/\s/g, '')//elimina los espacios en blanco que el usuario ingrese
    .replace(/(.{4})/g, '$1 ') //agrega un espacio en blanco cada 4 digitos
    .trim(); //elimina el ultimo caracter de una cadena, en este caso el ultimo espacio en blanco
    numMk = validator.maskify(fromCard.cardOcult.value);
    cardNumber = fromCard.cardOcult.value.replace(/\s/g, '');
    
}) 

     

const ocult = document.getElementById("cardNumber");
const container = document.getElementById("buttonValidar");
const visible = document.getElementById("ValidCard");
const cerrar = document.getElementById("close");
const modal = document.getElementById("modalValidate");
const open = document.getElementById("modalopen");




container.addEventListener('click', () => {
  visible.style.display = "block";
  ocult.style.display = "none";
     
  const isValid = validator.isValid(fromCard.cardOcult.value.replace(/\s/g, ''))
  alerta(isValid)
})

cerrar.addEventListener('click',() => {
    modal.style.display = "none";
    location.reload()// reinicia de nuevo la pagina
})

 
//Muestra un display de numero de tarjeta valido o invalido
function alerta(resultValidation) {
    const resultHTML = document.getElementById("validate");
    if (resultValidation) {
      resultHTML.innerHTML = "Tarjeta valida<br>" + numMk;
    
    } else {

        resultHTML.innerHTML = "Tarjeta no valida<br>" + numMk;
             
    }
  }



open.addEventListener('click',() =>{
    modal.style.display = "block";
    
})




     fromCard.buttonValidar.addEventListener('click', (e) => {
         e.preventDefault();
    
        validator.isValid(cardNumber)
    

        
     })

  //alert(validator.isValid());