const validator = {

  isValid: function (cardn) {
    
    //divide el numero por digitos y lo almacena en un array de strings, con map lo transforma en array de numeros
    let luhn = cardn.split("").map(Number);
    //reversa el array 
    let luhnReverse = luhn.reverse();
    //busca las posiciones pares del array y lo multiplica x 2
    for (let i = 0; i < luhnReverse.length; i++) {
      if (i % 2) { // si i es un numero par diferente de 0 se multiplica x 2
        luhnReverse[i] = luhnReverse[i] * 2;
      if (luhnReverse[i] >= 10) { // condicion para cumplir si los numeros son igual o mayor de 10
          luhnReverse[i] = String(luhnReverse[i])
            .split("") //condicional para separar en un array
            .map(Number) //condicional para convertir el "string" en numero
              .reduce(function (a, b) { // suma los digitos de la funfion 1 y 2
                return a + b;
            });
            
        }
        
      } else {
        luhnReverse[i] = luhnReverse[i] * 1;
      }
    }
  // suma los valores
  let valid = luhnReverse.reduce(function (a, b) {
    return a + b;
  });

    if (valid % 10 == 0) {
      //tarjeta valida
      return true;
    } else {
      //tarjeta invalida
      return false;
    }
  },

  maskify: function (maskNum) {
    if (maskNum.length >= 5) { // si la longitud es igual o mayor de 5
      const regexp = /.(?=.{4})/g; //atrapar cualquier caracter menos 4
      const mask = "#";
      return maskNum.replace(regexp, mask); // reemplaza 
    } 
    else return maskNum
    
  },
};
export default validator;



let number = 5;
number = 10

console.log(number);



