var twoSum = function (nums, target) {
    let x, y;
    let index = 0;
    let result;
    while (index < nums.length) {
        x = nums[index];
        y = target - x;
        if (nums.includes(y)) {
            let indexY = nums.indexOf(y);

            if (indexY !== -1) {
                if (indexY !== index) {
                    result = [index, nums.indexOf(y)];
                }
            }
            if (result) {
                index = nums.length;
            } else {
                index++;
            }
        } else {
            index++;
        }
    }
    return result;
};