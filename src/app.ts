const add = (a:number=1,b:number=1)=>{
  return a+b
}

const printOutPut = (a:number|string):void=>{
  console.log(a);
  
}

printOutPut(add(2));

const hobby = ['sport','cooking'];
const activeHobby = ['hiking'];
activeHobby.push(...hobby);
console.log(activeHobby);

const person = {
  name:'bikash',
  age:29
}
const copyPerson = {...person};
console.log(copyPerson);

