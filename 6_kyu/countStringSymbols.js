/*
The main idea is to count all the occurring characters in a string.
you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/


function count(string) {
    if(string.length === 0) return {}
    const result = {}

    string
        .split('')
        .forEach(item =>{
            if(result[item]) {
                result[item] += 1;
            } else {
                result[item] = 1;
            }
        })
    return result
}

console.log(count('aab'))

//Good solution
/*function count (string) {
    var count = {};
    string.split('').forEach(function(s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}*/
