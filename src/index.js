module.exports = function check(str, bracketsConfig) {
  var stackOpenings = [];
  var isCorrect = true;

  outerloop:
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0] && !(stackOpenings[stackOpenings.length - 1] == str[i] && bracketsConfig[j][0] == bracketsConfig[j][1])) {
        stackOpenings.push(str[i]);
        break;
      }
      if (str[i] == bracketsConfig[j][1]) {
        var bracket = stackOpenings.pop();
        isCorrect = bracket == bracketsConfig[j][0];
        if (!isCorrect) {
          break outerloop;
        }
      }
    }
  }

  return isCorrect && stackOpenings.length == 0;
}
