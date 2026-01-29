let arr = [10 , 3, 11, 4 , 2]

let n = arr.length
for(let i = 0 ; i < arr.length ; i++) {
    for( let j = 0 ; j < n-1-i ; j++) {
        if(arr[j] > arr[j+1] ) {
            [arr[j+1] , arr[j] ] = [arr[j] , arr[j+1]]
        }
    }
}

for(let a of arr){
    console.log(a)
}