function addNumber(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log(num);
}

function addHandlebar(num1: number, num2: number, cb: (a: number) => void) {
  const result = num1 + num2;
  return cb(result);
}

addHandlebar(3, 4, printResult);
