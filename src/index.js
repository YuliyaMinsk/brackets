module.exports = function check(str, bracketsConfig) {
  let stackToCheck = [];
  let strArray = str.split("");

  let openBrackets = [];
  let closeBrackets = [];

  for (let j = 0; j < bracketsConfig.length; j++) {
    openBrackets.push(bracketsConfig[j][0]);
    closeBrackets.push(bracketsConfig[j][1]);
  }

  for (let i = 0; i < strArray.length; i++) {
    if (closeBrackets.includes(strArray[i])) {
      if (stackToCheck.includes(openBrackets[closeBrackets.indexOf(strArray[i])])) {
        //console.log('POP - ' + strArray[i]);
        stackToCheck.pop();
        continue;
      }
    }

    if (openBrackets.includes(strArray[i])) {
      //console.log('PUSH[' + i + '] - ' + strArray[i]);
      stackToCheck.push(strArray[i]);
      continue;
    }
    return false;
  }

  if (stackToCheck.length > 0) return false;
  else return true;
}
