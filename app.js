function add(n1, n2, printResult) {
    if (printResult)
        return n1 + n2;
}
var number1 = '5';
var number2 = 2.5;
var printResult = true;
var result = add(+number1, +number2, printResult);
console.log(result);
