function capitalize(string) {
  let newstring = ''
  newstring += string[0].toUpperCase()
  newstring += string.slice(1)

  return newstring
}

function reverse(string) {
  let newstring = ''
  for(let i = 0; i < string.length ; i++){
    newstring += string[string.length - i - 1]
  }
  return newstring
}
function calculator(operator, a,b) {
  if (operator == 'add') {
    return a + b;
  } else if (operator == 'subtract') {
    return a - b;
  } else if (operator == 'multiply') {
    return a * b;
  } else if (operator == 'divide') {
    return a / b;
  }
}

function caesarCipher(string, shift) { 
  let newstring = '';
  for( let i = 0 ; i < string.length ; i++) {
    if(string[i] == " ") {
      newstring += " "
    } else {
      let shiftvalue = string.charCodeAt(i)
      if (shiftvalue >= 65 && shiftvalue <= 90) {
        if(shiftvalue + shift > 90) {
          let over = shiftvalue + shift - 91;
          newstring += String.fromCharCode(over + 65);
        } else {
          newstring += String.fromCharCode(shiftvalue + shift)
        }
      } else if (shiftvalue >= 97 && shiftvalue <= 122) {
        if (shiftvalue + shift > 122) {
          let over = shiftvalue + shift - 123
          newstring += String.fromCharCode(over + 97);
        } else {
          newstring += String.fromCharCode(shiftvalue + shift)
        }
      }
    }
    
  }
  return newstring;
}

function analyzearray(array) {
  let mincount = 10000;
  let maxcount = 0;
  let average = 0;
  for(let i = 0 ; i < array.length; i++) {
    if(maxcount < array[i]) {
      maxcount = array[i]
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (mincount > array[i]) {
      mincount = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    average += array[i]/array.length
  }

  const result = {
    average: average,
    min: mincount,
    max: maxcount,
    length: array.length,
  };
  return result
}
export {capitalize}
export {reverse}
export {calculator}
export {caesarCipher}
export {analyzearray}