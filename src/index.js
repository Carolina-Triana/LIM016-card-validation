import validator from './validator.js';
const fromCard = document.getElementById("valueCard");
//const cardOcult = document.getElementById("cardOcult");

// eslint-disable-next-line no-console
//console.log(cardOcult);


//agregando un evento para que se ejecute cuando 'keyup' se levante la tecla
fromCard.cardOcult.addEventListener( 'keyup' ,  ( e )  =>  {
//(e)creando el evento para acceder a el, con .target que es donde se encuentra el input .value acceder al valor
    let cardOcult = e.target.value;
    validator.isValid(cardOcult)
//volviendo a declarar la misma variable para agregar el metodo .replace y agregar expresiones regulares
fromCard.cardOcult.value = cardOcult
    .replace(/\D/g, '') //elimina las letras al levantar la tecla
    .replace(/\s/g, '')//elimina los espacios en blanco que el usuario ingrese
    .replace(/(.{4})/g, '$1 ') //agrega un espacio en blanco cada 4 digitos
    .trim(); //elimina el ultimo caracter de una cadena, en este caso el ultimo espacio en blanco
    
}) 

     

const ocult = document.getElementById("CardNumber");
const container = document.getElementById("buttonValidar");
const visible = document.getElementById("ValidCard");
const cerrar = document.getElementById("close");
const modal = document.getElementById("modalValidate");
const open = document.getElementById("modalopen");



container.addEventListener('click', () => {
  visible.style.display = "block";
  ocult.style.display = "none"; 
    
})

cerrar.addEventListener('click',() => {
    modal.style.display = "none";
})

open.addEventListener('click',() =>{
    modal.style.display = "block";
    
})
 









     fromCard.addEventListener('submit', (e) => {
         e.preventDefault()
     })

  //alert(validator.isValid());