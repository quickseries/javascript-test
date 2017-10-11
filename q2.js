/*

Create a function that can find the Nth smallest number in an array.
The array can be very very big, so you are not allowed using the Array.sort() method.
Try to build a function that would perform fast.

Also, explain why using Array.sort() isn't a good idea when sorting large arrays.

*/

let nth = 5;
let list = [4, 10, 3, 0, 2, 12, 19];

console.time('smallest');
console.log(smallest(nth, list));
console.timeEnd('smallest');

console.time('findNthSmallest');
console.log(findNthSmallest(nth, list));
console.timeEnd('findNthSmallest');

function smallest(n, list) {
    let sm = Number.MAX_SAFE_INTEGER;
    let pivot = Number.MIN_SAFE_INTEGER;
    let i = 0;

    while (i < n) {
        sm = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < list.length; i++) {
            if (list[i] < sm && list[i] > pivot) {
                sm = list[i];
            }
        }

        pivot = sm;
        i++;
    }
    return sm;
}

function findNthSmallest(n, list) {
    let sortedList = qSort(list);
    return sortedList[n-1];
}

/* qSort function is taken from a book : "Data Structures & Algorithms with JavaScript, O'Reilly, 2014." */
function qSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return qSort(left).concat(pivot, qSort(right));
}
