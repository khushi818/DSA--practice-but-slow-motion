let arr = [ 1, 1, 3, 4 , 4, 5, 6]

let result = []
let dict = {}
for( let i = 0 ; i < arr.length ; i++) {
    if( arr[i] in dict) {
        dict[arr[i]] += 1;   
    }
    else {
        dict[arr[i]] = 1;
        result.push(arr[i]);
    }
}



// count frequency
for( let j in dict) {
    console.log(j , dict[j])
}