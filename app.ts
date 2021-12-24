type Combinable =  number | string;
type AddTypeAliases ='on-text'|'on-number';


function combine(input1:Combinable , input2:Combinable, addType:AddTypeAliases) {
  let result;
  if(addType==='on-text'){
    result = input1.toString()+ input2.toString()
  }

  if(addType==='on-number'){
    result = +input1 + +input2
  }
  
  
  return result;
}


