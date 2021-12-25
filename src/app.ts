function merge<name,age>(objectA:name,objectB:age) {
    return Object.assign(objectA,objectB)
}

const data =merge({data:'data'},{name:'one'});
console.log(data);

