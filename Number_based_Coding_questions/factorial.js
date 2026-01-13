//Factorial 
//The factorial of a number is the product of all positive integers less than or equal to that number.

// n! = n * n-1 * n -2
// 5 = 5 *4 *3*2*1

// iterative method
// time complexity 0(n)
// space complexity - 0(1)
const n = 5
let factorial = 1 
for( let i = 1 ; i <= n  ; i++) {
        factorial *= i 
}

console.log(factorial)

// recursive method 

function fact(n) { 
        if(n === 1) return 1

        return n * fact(n-1)
}

console.log(fact(5))
