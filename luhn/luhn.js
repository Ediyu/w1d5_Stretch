


function isLuhn(number){
  var result = 0;
  number = String(number);
  number = number.split("");

  number.forEach(function(element, index){
    element = Number(element);
    if (index % 2 === 0) {
      result += element;
    } else {
      element = element * 2
      if (element > 10) {
        result += (element - 9)
      } else {
        result += element;
      }
    }
  })

  // for (var i = 0; i <number.length; i++) {
  //   number[i] = Number(number[i]);

  //   if (i % 2 === 0) {
  //     result += number[i]
  //   } else {
  //     number[i] = number[i] * 2 
  //     if (number[i] > 10) {
  //       result += (number[i] -0)
  //     } else {
  //       result += number[i];
  //     }
  //   }
  // }



  return result % 10 === 0;
}

console.log(isLuhn(743801011));
