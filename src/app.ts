function Logger(constructor:Function) {
    console.log('login....');
    console.log(constructor);
    
}
@Logger
class Parson {
    name = 'Max'
    constructor(){
        console.log('creating a person');
        
    }
}

