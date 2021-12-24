function combine(input1:number | string , input2:number|string, addType:'on-text'|'on-number') {
  let result;
  if(addType==='on-text'){
    result = input1.toString()+ input2.toString()
  }

  if(addType==='on-number'){
    result = +input1 + +input2
  }
  
  
  return result;
}


