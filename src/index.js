module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let temp = [];
  
  for (let i = 0; i < arr.length; i++) {
      let isExists = false;
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (arr[i] === bracketsConfig[j][0]) {
             isExists = true;             
             if (temp.slice(-1)[0] === bracketsConfig[j][0]) {
                temp.pop();                
                break;
              }            
              temp = [...temp,(bracketsConfig[j][1])];
              break;
          }
      }
      if (!isExists) {
          if (arr[i] === temp.slice(-1)[0]) {
              temp.pop(); 
          }
          else {
            return false;
          }          
      }
  }
  return temp.length ? false : true;
}
