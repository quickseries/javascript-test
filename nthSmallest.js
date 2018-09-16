/* 
    notes:
    1- There's generally no best algorithm for all cases, particularly in the case of sorting, and it would depend
    on factors like the size of dataset (large), type of elements (numbers), the data structure of the dataset (array),
    whether or not the items are already almost sorted, wheather or not the hardware is multicore to benefit
    from parallel computing, etc.
    2- Array.sort() is a function that has different implementations in each runtime environment, some of which
    might not be optimal for this certain usecase.
    3- Although QuickSort has a worst-case time complexity of O(n^n), it is unlikely to happen in practice.
    4- To further improve the sorting performance even the event of the unlikely occurance of that worst case,
    hybrid algorithms such as Introsort could be utilized to automatically switch to heap sort when recursing depth
    of quick sort exceeds a certain level
*/

const quickSortAsc = (arr) => {
    const arrLength = arr.length;
    if (arrLength <= 1) return arr;

    const pivot = arr[arrLength - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arrLength - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quickSortAsc(left).concat([pivot], quickSortAsc(right));
};

const nthSmallest = (arr, n) => quickSortAsc(arr)[n - 1];

module.exports = nthSmallest;
