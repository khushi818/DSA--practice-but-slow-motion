
// Find the smallest element in the unsorted part.

// Swap it with the first element of the unsorted part.

// Move the boundary of the sorted part one step to the right.

// Repeat until the entire array is sorted.

let arr = [10 , 3, 11, 4 , 2]

for( let i = 0 ; i < arr.length ; i++) {
    let min = i
    for( let j = i +1 ; j < arr.length ; j++){
        if(arr[min] > arr[j]) {
            min = j
        }
    }

    if( min !== i ) { // extra step to avoid 
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
    }
}


for(let a of arr){
    console.log(a)
}
