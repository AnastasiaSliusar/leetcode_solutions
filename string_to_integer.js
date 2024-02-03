/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const limit_minus = Math.pow(-2, 31);
    const limit_max = Math.pow(2, 31)-1;
    let new_sting = s.replace(/\s/g,'');
    let symbol = s[0] === '+' || s[0] ==='-' ? s[0] : null;

    let number_string = new_sting.replace(/[Aa-zZ]/g, '');
    if (symbol) {
        number_string = symbol+number_string;
    }
    let number = number_string*1;
    if (number > limit_max) {
        number = limit_max;
    } else if (number < limit_minus) {
        number = limit_minus;
    }
    return number;

};