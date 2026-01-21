// reverse array 

const arr = [3,5, 8, 9 , 10]


const size = arr.length 


for( let i = 0 ;  i <= size/2 ; i++) {
   [arr[i] , arr[size - i - 1]] = [arr[size -i - 1] , arr[i]]          
}

for (let i = 0 ; i < size ; i++ ) {
    console.log(arr[i])
}
 

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // swap
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
// Output: [5, 4, 3, 2, 1]



























































