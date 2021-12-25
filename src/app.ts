interface admin  {
    name:string
    privilege:string[]
}
interface employee  {
    name:string;
    startDate:Date;
}

interface Bird  {
    flyingSpeed :number
}
interface Horse {
    runningSpeed : number
}
 
type Animal = Bird | Horse;

function moveAnimal(animal:Animal) {
    if('flyingSpeed' in animal) console.log('fly'+animal.flyingSpeed );
    if('runningSpeed' in animal) console.log('run'+animal.runningSpeed );    
}

const para = document.getElementById('test1')! as HTMLElement ;
para.innerHTML = 'test'

interface ErrorInterface {

    [props:string] : string;
}

const errorBeg:ErrorInterface = {
    error :"not a valid emil"
}