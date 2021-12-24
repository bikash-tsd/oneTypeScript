function addNumber(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
function addHandlebar(num1, num2, cb) {
    var result = num1 + num2;
    return cb(result);
}
addHandlebar(3, 4, printResult);
