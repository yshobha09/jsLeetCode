/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const openToClose = { ')' : '(', '}' : '{', ']' : '['}

    for(let p of s){
        if(p === '(' || p === '{' || p === '['){
            stack.push(p);
        } else if(p === ')' || p === '}' || p === ']'){
            if(stack.length === 0 || stack[stack.length-1] !== openToClose[p]){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("({{[]}})"));
console.log(isValid("[()"));
console.log(isValid("{[(])}"));