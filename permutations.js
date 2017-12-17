var getPermutations = function() {
  var argumentsArray = Array.from(arguments);
  if (argumentsArray.length < 2) {
    return argumentsArray;
  }
  var resultArray = [];
  var used = [];
  var permute = function(array) {
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
      array.splice(i, 1);
      used.push(element);
      if (array.length > 0) {
        permute(array);
      } else {
        resultArray.push(parseInt(used.join('')));
      }
      array.splice(i, 0, element);
      used.pop();
    }
    return resultArray;
  };
  return permute(argumentsArray);
};

console.log(getPermutations(2, 3, 1, 5));
