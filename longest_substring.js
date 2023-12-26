/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let tableChars = {};
    let result = 0;
    let leftWindow = 0;
    for(let rightWindow = 0; rightWindow<s.length; rightWindow++) {
        if(!tableChars[s[rightWindow]]){
            tableChars[s[rightWindow]] = 0;
        }
        tableChars[s[rightWindow]] += 1;

        if (Object.values(tableChars).some((element) => element > 1)) {
            tableChars[s[leftWindow]] -= 1;
            leftWindow += 1;
        }

        result = Math.max(result, rightWindow - leftWindow + 1);
    }
    return result;
};