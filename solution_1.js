function allCombinations(){
  // convert arguments object into an array
  const args = Array.from(arguments);

  // if there is only one argument, there is only one combination
  if (args.length == 1) return [
    args[0].toString()
  ];

  // if there are two arguments, there are only two combinations
  if (args.length == 2) {
    return [
      args.join(''),
      [args[1], args[0]].join('')
    ]
  }

  var combinations = [];

  for (var i = 0; i < args.length; i++){
    let argsCopy = args.slice();

    // remove the argument that's currently being iterated over from the
    // arguments
    let arg = argsCopy.splice(i, 1)[0];

    // find all possible combinations of the remaining arguments
    let remainingCombinations = allCombinations(...argsCopy);

    // add to the list of possible combinations that begin with the argument
    // being iterated over
    for (let remainingCombination of remainingCombinations) combinations.push(
      arg + remainingCombination
    )
  }

  return combinations;
}
