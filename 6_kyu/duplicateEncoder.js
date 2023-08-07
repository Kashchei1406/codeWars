/*
The goal of this exercise is to convert a string to a new string where each character in the new string is
 "(" if that character appears only once in the original string, or ")" if that character appears more than
 once in the original string. Ignore capitalization when determining if a character is a duplicate.

    Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
Notes

Assertion messages may be unclear about what they display in some languages. If you read
"...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
    const arr = word.toLocaleLowerCase().split('');
    let result = '';

    for (let i = 0; i <arr.length ; i++) {
        let count = -1;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) count++
        }
        if (count === 0) result += ')'
        if (count > 0) result += '(';
        count = -1;
    }
    return result
}

console.log(duplicateEncode('Hello'))

/*
function duplicateEncode(word){
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}*/
