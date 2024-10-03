/*
  A common problem for compilers and text editors is determining whether
  the parentheses in a string are balanced and properly nested. For example,
  the string ((())())() contains properly nested pairs of parentheses, which
  the string )()( and ()) do not. Give an algorithm that returns true if a string
  contains properly nested and balanced parentheses, and false if otherwise. For
  full credit, identify the position of the first offending parenthesis if the string
  is not properly nested and balanced.
*/
var tc1 = "((())())()";
var tc2 = ")()(";
var tc3 = "())";
function checkIsCorrect(value) {
    var index = 0;
    var queue = [];
    if (value[0] === ")")
        return 0;
    while (index < value.length) {
        var current = value[index];
        if (current === "(") {
            queue.push(current);
        }
        else {
            if (queue[queue.length - 1] === "(") {
                queue.pop();
            }
            else {
                return index;
            }
        }
        index++;
    }
    return null;
}
console.log(checkIsCorrect(tc1)); // null
console.log(checkIsCorrect(tc2)); // 0
console.log(checkIsCorrect(tc3)); // 2
