const add = (a:number=1,b:number=1)=>{
  return a+b
}

const printOutPut = (a:number|string):void=>{
  console.log(a);
  
}

printOutPut(add(2))