//Split camelCase

function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2')

}

//  return(string.replace(/([A-Z])/g, ' $1'));

console.log(solution('camelCaseCaseCamel'))
