var moveZeroes = function(nums) {
    let last = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[last++] = nums[i] //starting from the beginning, puts in the values
        }
    }

    for (let i = last; i < nums.length; i++) { //fill in last part of array
        nums[i] = 0
    }
};
