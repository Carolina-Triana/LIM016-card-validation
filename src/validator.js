const validator = {

  isValid: function (cardn) {
    // eslint-disable-next-line no-console
    //console.log(cardn);
    //divide el numero por digitos y lo almacena en un array de strings, con map lo transforma en array de numeros
    let luhn = cardn.split("").map(Number);
    //reversa el array char
    let luhnReverse = luhn.reverse();
    //busca las posiciones pares (index impar) del array y lo multiplica x 2
    //
    for (var i = 0; i < luhnReverse.length; i++) {
      if (i % 2 !== 0) {
        luhnReverse[i] = luhnReverse[i] * 2;
        // condicional para separar (split) y sumar (reduce) los digitos convertidos en numero (map) del valor si son mayor o igual a 10
        if (luhnReverse[i] >= 10) {
          luhnReverse[i] = String(luhnReverse[i])
            .split("")
            .map(Number)
              .reduce(function (a, b) {
                return a + b;
            });
            
        }
        //si no son mayor o igual a 10 *1 para que queden igual
      } else {
        luhnReverse[i] = luhnReverse[i] * 1;
      }
    }
  // suma a+b si el numero es mayor de 10 
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
    if (maskNum.length >= 5) {
      const regexp = /.(?=.{4})/g;
      const substr = "#";
      return maskNum.replace(regexp, substr);
    } else {
      return maskNum;
    }
  },
};
export default validator;
