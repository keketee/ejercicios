// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';




//Escribe una función que reciba un número y lo devuelva sumando 2.

const suma = number =>{
    return number + 2
}
 const resultado = suma(8)
 console.log(resultado)

//Escribe una función que reciba un número y devuelva el doble de ese número.

 const multiplicar = number =>{
    return number * 2
}
 const dobleNumber = multiplicar(8)
 console.log(dobleNumber)


//Escribe una función que reciba una palabra y devuelva su longitud.

 const oneWord = word =>{

 return word.length
 }

 const newWord = oneWord('caballo')
 console.log(newWord)

//Escribe una función que reciba una palabra y la imprima en mayúsculas.

 const upperCase = word =>{

    return word.toUpperCase()
    }
   
    const upperWord = upperCase('caballo')
    console.log(upperWord)

//Escribe una función que reciba dos palabras e imprima si son iguales o no


    const twoWords = (wordA, wordB) =>{
if( wordA === wordB) {
    console.log(`son la misma palabra`)
} else{
    console.log(`no son la mismo palabra`)
}
}

twoWords('perro', 'gato')

//Crea una función que tome dos números como parámetro y devuelva su multiplicación.


const twoNumber = (numberA, numberB)=>{
return numberA * numberB
}

const multiply = twoNumber(6,7)

console.log(`el resultado es ${multiply}`)


//Crea una función llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus dígitos.

const sumDigits = (number) =>{

    const operacion = Number(number.charAt(0)) +
                      Number(number.charAt(1)) + 
                      Number(number.charAt(2))

return operacion

}
console.log(sumDigits('345'))


//Crea una función llamada longestWord que reciba 2 palabras como parámetro y devuelva la palabra más larga.


const longestWord = (wordA, wordB) =>{

if(wordA.length > wordB.length){
    console.log(`${wordA} es mas largo que ${wordB}`)
} else {
    console.log(`${wordA} no es mas largo que ${wordB}`)
}
}
longestWord('coche', 'camion')


//Escribe una función llamada getfirstElement que reciba un array y devuelva la primera posición del array.


const getfirstElement = array =>{

 return array[0]

}
const resultadoGetfirstElement = getfirstElement(['coche', 'perro', 'casa'])
console.log(resultadoGetfirstElement)

//Escribe una función llamada getArrayElement que reciba un array y una posición y devuelva el valor de esa posición en el array, por ejemplo, si recibe (['a', 'b', 'c'], 2) devolverá 'c'

const getArrayElement = (array, position) =>{

    return array[position]
}

const newArray = getArrayElement(['a','b','c'], 1)
console.log(newArray)

//Crea una función llamada shortestWord que reciba 2 palabras como parámetro y devuelva la palabra más corta.


const shortestWord = (wordA,wordB) =>{


    if(wordA.length < wordB.length){
        console.log(`la palabra corta es ${wordA}`)
    } else {
        console.log(`la palabra corta es ${wordB}`)
    }
}
shortestWord('coche', 'camion')

//CON RETURN

// if(wordA.length < wordB.length){
//     return wordA
// } else {
//     return wordB
// }
// const newShortestWord = shortestWord('coche', 'camion')


//- Crea una función llamada onlyEven que reciba 3 números e imprima sólo los números pares.

const onlyEven  = (numberA,numberB,numberC)=>{

    if(numberA % 2 === 0){
        console.log(`${numberA} es par`)
    }else{
        console.log(`${numberA} no es par`)
    }


    if(numberB % 2 ===0){
        console.log(`${numberB} es par`)
    }else{
        console.log(`${numberB} no es par`)
    }
    

    if(numberC%2===0){
        console.log(`${numberC} es par`)
    }else{
        console.log(`${numberC} no es par`)
    }
}
onlyEven(6,11,37)


//Crea una función que reciba un número y devuelva su cuadrado y su cubo. El objeto Math tiene el método pow que sirve para calcular potencias, Math.pow(base, exponente)

const squareAndCube = number =>{

    return `El cuadrado de ${number} es ${Math.pow(number,2)} y el cubo de ${number} es  ${Math.pow(number,3)}`
}
const results = squareAndCube(5)
console.log(results)

//Crea una función que reciba una palabra de 5 letras e imprima por consola las 5 letras separadas por comas.


const fiveLetter = word =>{
 console.log(`${word.charAt(0)}, ${word.charAt(1)}, ${word.charAt(2)}, ${word.charAt(3)}, ${word.charAt(4)} `)
}

fiveLetter('coche')

//Crea una función que reciba un array de 3 números y lo imprima con los números duplicados, por ejemplo, si recibe [1,2,3] deberá imprimir [1,2,3,1,2,3]

const trheeNumber = array =>{

array.push(array[0], array[1], array[2])
console.log(array)

}
trheeNumber([5,3,9])

//Crea una función que reciba un array de 5 números y que lo imprima sin el primer y el último valor, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir [2,3,4]

const fiveLetterArray = array =>{

    array.pop()
    array.shift()
console.log(array)

}

fiveLetterArray([5,6,8,7,6])

//Crea una función que reciba un array con 5 letras y que imprima las 5 letras unidas en una sola palabra


const fivesLetter = letter=>{

    console.log(`${letter[0]}${letter[1]}${letter[2]}${letter[3]}${letter[4]}`)

}

fivesLetter(['c','o','c','h','e'])

//Crea una función llamada longestWordArray que reciba un array con 3 palabras y devuelva la palabra más larga del array.

const longestWordArray = trheeWords =>{

if(trheeWords[0].length > trheeWords[1].length && trheeWords[1].length > trheeWords[2].length){
    console.log(`${trheeWords[0]} es mayor`)
}else if(trheeWords[1].length > trheeWords[0].length && trheeWords[1].length > trheeWords[2].length){
    console.log(`${trheeWords[1]} es mayor`)
}else{
    console.log(`${trheeWords[2]} es mayor`)
}

}

longestWordArray(['casa', 'perro', 'alfombre'])

//Crea una función que reciba un array con 3 números y un array con 3 letras e imprima los números y las letras intercaladas, por ejemplo, si recibe ([1,2,3],['a','b','c']) deberá imprimir 1,a,2,b,3,c


const numbersAndLetter = (numbers,letter)=>{

console.log(`${numbers[0]}${letter[0]}${numbers[1]}${letter[1]}${numbers[2]}${letter[2]}`)

}
numbersAndLetter([5,4,8],['a','b','c'])

//Crea una función que reciba un array con un número impar de elementos e imprima por consola el valor de la posición central, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir 3, pero si recibe [1,2,3] deberá imprimir 2, si el número de elementos no es impar deberá imprimir "el array no es válido"

// 5 -> 2
// 7 -> 3
// 9 -> 4
// 11 ->

const printMiddleArray = numbers => {
    if (numbers.length % 2 === 0) {
      console.log('El array no es válido');
      return;
    }
    const middleValue = numbers[Math.floor(numbers.length / 2)];
    console.log(middleValue);
  };
  
  printMiddleArray([1, 2, 3, 4, 5]);


  //Crea una función que reciba una palabra de 5 letras e imprima sólo las vocales, por ejemplo, si recibe "hola" deberá imprimir "oa"

  const onlyVowels = word => {
    const vowels = 'aeiou';
    let newString = '';
  
    if (vowels.includes(word.charAt(0))) {
      // newString = newString + word.charAt(0)
      newString += word.charAt(0);
    }
    if (vowels.includes(word.charAt(1))) {
      newString += word.charAt(1);
    }
    if (vowels.includes(word.charAt(2))) {
      newString += word.charAt(2);
    }
    if (vowels.includes(word.charAt(3))) {
      newString += word.charAt(3);
    }
    if (vowels.includes(word.charAt(4))) {
      newString += word.charAt(4);
    }
  
    console.log(newString);
  };
  
  onlyVowels('Celia');