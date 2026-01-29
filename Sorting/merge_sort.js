let arr = [10 , 3, 11, 4 , 2]

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let n = arr.length 

    let mid = Math.floor(n/2)

    const left = mergeSort(arr.slice(0,mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left , right)
}


function merge(left , right) {
   let i = 0 
   let j = 0
   let result = []

   while(i < left.length && j < right.length) {
     if(left[i] > right[j]) {
         result.push(right[j])
         j++;
     }
     else {
        result.push(left[i])
        i++
     }
   }
 
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(arr));
