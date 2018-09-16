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