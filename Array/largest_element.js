// largest_element 

 

let arr = [0, 1, 2, 7, 3, 4, 9]

let max = arr[0]
for( let i = 0 ; i < arr.length ; i++) {
    if( max < arr[i]){
        max = arr[i]
    }
}
console.log(max)

let min = arr[0]


for( let i = 0 ; i < arr.length ; i++) {
    if( min > arr[i]){
        min = arr[i]
    }
}

console.log(min)