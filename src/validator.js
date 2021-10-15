const validator = {

  isValid: function (cardn) {
    // eslint-disable-next-line no-console
    //console.log(cardn);
    //divide el numero por digitos y lo almacena en un array de strings, con map lo transforma en array de numeros
    let char = cardn.split("").map(Number);
    //reversa el array char
    let charReverse = char.reverse();
    //busca las posiciones pares (index impar) del array y lo multiplica x 2
    //
    for (var i = 0; i < charReverse.length; i++) {
      if (i % 2 !== 0) {
        charReverse[i] = charReverse[i] * 2;
        // condicional para separar (split) y sumar (reduce) los digitos convertidos en numero (map) del valor si son mayor o igual a 10
        if (charReverse[i] >= 10) {
          charReverse[i] = String(charReverse[i])
            .split("")
            .map(Number)
              .reduce(function (a, b) {
                return a + b;
            });
            
        }
        //si no son mayor o igual a 10 *1 para que queden igual
      } else {
        charReverse[i] = charReverse[i] * 1;
      }
    }
  // suma a+b si el numero es mayor de 10 
  let valid = charReverse.reduce(function (a, b) {
    return a + b;
  });

    if (valid % 10 == 0) {
      //tarjeta valida
      return true;
    } else {
      //tarjeta invalida
      return false;
    }
  }
}
export default validator;
