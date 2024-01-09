/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let arr = x.toString();
    let reverseArr = [];
    let newNumber = 0;
    const test1 = Math.pow(2, 31) - 1;
    const test2 = Math.pow(-2, 31);
    let minus = null;

    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    console.log(`reverseArr_before-${reverseArr}`);
    if (reverseArr[0] === 0) {
        reverseArr.shift();
    }
    if (reverseArr[reverseArr.length - 1] === '-') {
        minus = reverseArr.pop();
        reverseArr.unshift(minus)

    }

    newNumber = reverseArr.join('');
    if (newNumber > test2 && newNumber < test1) {
        return newNumber;
    } else {
        return 0;
    }

};