// Fibbonacci is the series of numbers where each number is the sum of two previous numbers
// Starting from 0 and 1, the series goes like 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// Formula to find the nth term in the series is: F(n) = F(n-1) + F(n-2)

// Function to generate Fibonacci series up to n terms


// iterative method
//Time Complexity -0(n)
// space complexity - 0(n) // array
function iterativeFibbonacciSeries(n) {
    if (n <= 0) return []
    if (n === 1) return [0]

    const result = [0,1]
    for(i = 2 ; i < n ; i++) {
      result.push(result[i-1] + result[i-2])
    }

    return result
}

const iterativeresult = iterativeFibbonacciSeries(7)
console.log(iterativeresult)  



// recursive method 
//Time Complexity - (2 exp(n)) (very slow)

function fibbo(n) {
    if(n == 0 ) return 0
    if( n == 1) return 1

    return fibbo(n-1) + fibbo(n-2)

}

function recursiveFibbonacci(n) {
    let result = []

    for ( let i = 0 ; i < n ; i++) {
        result.push(fibbo(i))
    }
    
    return result
}

const recursiveResult = recursiveFibbonacci(7)

console.log(recursiveResult)


// remove time complexity 

function printFibbonacci(n) {
    let a = 0 , b = 1
    let temp = 0
    for ( i = 0 ; i < n ; i++) {
        console.log(a)
        temp = a
        a = b
        b = temp+b  //  in python just do [a,b] = [a , a+b]
    }
}

printFibbonacci(7)