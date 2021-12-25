

function countAndPrint<O extends object,K extends keyof O>(object:O,key:K) {
    return object[key]
}

console.log(countAndPrint({name:'bikash'},'name'));
