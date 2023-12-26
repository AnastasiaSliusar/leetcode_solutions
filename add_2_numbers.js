/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = sumResult(l1, l2, 0);
    return result;

};

var sumResult = function (l1, l2, additionalNumber) {
    let result = getSum(l1?.val, l2?.val, additionalNumber);
    if (!l1?.next && !l2?.next && !result?.additional) {
        return {
            val: result?.sum,
            next: null
        };
    } else {
        return {
            val: result?.sum,
            next: sumResult(l1?.next, l2?.next, result?.additional)
        }
    }
}

var getSum = function (a, b, additional) {
    let newA = a ? a : 0;
    let newB = b ? b : 0;

    let additionalNew = additional ? additional : 0;

    let result = {
        sum: 0,
        additional: 0
    };
    var sum = newA * 1 + newB * 1 + additionalNew * 1;

    if (sum >= 10) {
        let strSum = sum + '';
        result.additional = strSum[0];
        result.sum = strSum[1];
    } else {
        result.sum = sum;
        result.additional = 0;
    }
    return result;
}