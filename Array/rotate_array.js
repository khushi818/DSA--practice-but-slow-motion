// rotate array 

const arr = [1,2,3,4,5,6]
// right  [6, 1 , 2, 3, 4, 5]

const size = arr.length 

let left = arr[0]
for( let i = 0 ; i < size ; i++) {
   arr[i ] = arr[i + 1]
}

arr[size -1] = left

for (let i = 0 ; i < size ; i++ ) {
    console.log(arr[i])
}
 

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function leftRotate(arr, k) {
  const n = arr.length;
  k = k % n;

  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);

  return arr;
}

console.log(leftRotate([1,2,3,4,5], 2));


// 🔹 Why do we do k = k % n in array rotation?
// Short answer:

// Because rotating an array n times gives the same array back.

// So any rotation greater than n is redundant.

// 🔹 Intuition First (Very Important)

// Let:

// arr = [1, 2, 3, 4, 5]
// n = 5

// Left rotations
// k	Result
// 1	[2,3,4,5,1]
// 5	[1,2,3,4,5] (same array)
// 6	same as rotating 1 time
// 7	same as rotating 2 times

// So:

// k = 7  ➜  7 % 5 = 2


// ✔️ Rotating 7 times = rotating 2 times