function mergeSort(nums){
		if (nums.length < 2)
				return nums;

		var middle  = Math.ceil(nums.length / 2),
				left    = nums.slice(0, middle),
				right   = nums.slice(middle);

		return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
		var result    = [],
				leftIndex   = 0,
				rightIndex  = 0;

		while (leftIndex < left.length && rightIndex < right.length){
				if (left[leftIndex] < right[rightIndex]){
						result.push(left[leftIndex++]);
				} else {
						result.push(right[rightIndex++]);
				}
		}
		return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
