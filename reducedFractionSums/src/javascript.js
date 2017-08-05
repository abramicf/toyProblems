reducedFractionSums = (expressions) => {
 let result = [];

 for (let i = 0; i < expressions.length; i++) {
   let separators = ['+', '\\/'];
   let tokens = expressions[i].split(new RegExp('[' + separators.join('') + ']', 'g'));
   let commonDen = tokens[1] * tokens[3];
   let num1 = tokens[0] * tokens[3];
   let num2 = tokens[2] * tokens[1];
   let commonNum = num1 + num2;

   for (let j = commonDen; j > 1; j--) {
     if (commonDen % j === 0 && commonNum % j === 0) {
       commonNum = commonNum / j;
       commonDen = commonDen / j;
     }
   }
   let fractionToAdd = commonNum + '/' + commonDen;
   result.push(fractionToAdd);
 }
  return result;
};



