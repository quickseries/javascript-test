function selectionSort(nums, nth) { 
	for (var i = 0; i < nth; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if(parseInt(nums[i]) > parseInt(nums[j])) {
				var temp = nums[i];
				nums[i] = nums[j];
				nums[j] = temp;
			}
		}
	}
	//console.log("Selection Sort: ");
	//console.log(nums);
	return nums[nth-1];
}
