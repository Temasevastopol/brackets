module.exports = function check(str, bracketsConfig) {
  // your solution
  let getArray = Array.from(str)  
  console.log(getArray)
  let resArr = []
  
  // console.log(checkArr)    
  for (let i = 0; i < getArray.length; i++){
      resArr.push(getArray[i])      

      for(let j = resArr.length; j >= 0; j--){
           if((')' == resArr[j] && '(' == resArr[j-1]) ||
              ('}' == resArr[j] && '{' == resArr[j-1]) ||
              (']' == resArr[j] && '[' == resArr[j-1]) ||
              ('|' == resArr[j] && '|' == resArr[j-1]) ||
              ('2' == resArr[j] && '1' == resArr[j-1]) ||
              ('4' == resArr[j] && '3' == resArr[j-1]) ||
              ('6' == resArr[j] && '5' == resArr[j-1]) ||
              ('7' == resArr[j] && '7' == resArr[j-1]) ||
              ('8' == resArr[j] && '8' == resArr[j-1])){
     
                resArr.pop()
                resArr.pop() 
            }   
        
        } 

    }  

  console.log(resArr)

  if (resArr.length == 0){
      return true
  } else {
      return false
  }
}
