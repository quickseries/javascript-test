// Create a function that can find the Nth smallest number in an array. The
// array can be very very big, so you are not allowed using the Array.sort()
// method. Try to build a function that would perform fast. Also, explain why
// using Array.sort() isn't a good idea when sorting large arrays.

function quicksortSet(arr){
  // choose an item in the array to act as the pivot, then organize all other
  // items that are smaller into one group, and all larger items into another

  const firstItem = arr[0];
  const smaller = [];
  const larger = [];

  // if there are fewer than two items in the array, there's nothing to sort
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++){
    let item = arr[i];

    if (item < firstItem) smaller.push(item);
    if (item > firstItem) larger.push(item);

    // items that are equal to the firstItem are discarded
  }

  // return an array where each smaller set of items is sorted the same way,
  // with the pivot in the middle. Honestly, I don't know if this would perform
  // fast, or why Array.sort is worse.
  return [
    ...quicksortSet(smaller),
    firstItem,
    ...quicksortSet(larger)
  ]
}

function nthSmallest(arr, n){
  return quicksortSet(arr)[n +1];
}
