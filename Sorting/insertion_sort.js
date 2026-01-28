// How Insertion Sort Works

// The algorithm starts with the second element of the array, assuming the first element is already sorted.

// It compares the current element with the elements before it.

// If the current element is smaller, it is shifted left by moving larger elements one position to the right.

// This process continues until the correct position for the current element is found.

// The element is then inserted at that position.

// Steps 2–5 are repeated for all elements until the entire array is sorted.

// Example

// Given an array:
// [5, 3, 4, 1]

// Pass 1: [3, 5, 4, 1]

// Pass 2: [3, 4, 5, 1]

// Pass 3: [1, 3, 4, 5]
let arr = [10 , 3, 11, 4 , 2]


for(let i = 0 ;  i <= arr.length ; i++) {
    for(let j = 0 ; j < i ; j++){
        
        if(arr[j] > arr[i]) {
            let temp = arr[j] 
            arr[j] = arr[i] 
            arr[i] = temp
        }
    }
}

for(let a of arr){
    console.log(a)
}

// Worst Case

// Time Complexity: O(n²)

// When: The array is sorted in reverse order.

// Why: Every element must be compared and shifted across the entire sorted portion.