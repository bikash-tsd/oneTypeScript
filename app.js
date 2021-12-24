function combine(input1, input2, addType) {
    var result;
    if (addType === 'on-text') {
        result = input1.toString() + input2.toString();
    }
    if (addType === 'on-number') {
        result = +input1 + +input2;
    }
    return result;
}
