// For numbers 12 and 18:

// Factors of 12 → 1, 2, 3, 4, 6, 12
// Factors of 18 → 1, 2, 3, 6, 9, 18

// ✅ Common factors → 1, 2, 3, 6
// 👉 Greatest / Highest = 6

// So,
// GCD(12, 18) = HCF(12, 18) = 6

//Euclidean Algorithm 
// if( a > b ) gcd(a-b, b) so we can do this
// gcd(a, b) = gcd( a % b , b)
// until b || a = 0


function findGCD(a, b) {
     if (a <= 1) return a 
     if(b <= 1)  return b 
     let gcd = 0
     
     for ( let i = 0 ; i <= Math.min(a,b) ; i++){
        if( (a%i ==0) && (b%i ==0) ) {
            gcd = i
        } 
    }

    return gcd
}
//0(min(m,n)
  console.log(findGCD(3,4))

  let a = 12
  let b = 6
  while(a > 0 && b > 0 ) {
    if( a > b ) a= a % b
    else b = b % a

    if( a === 0 ) {
       
        console.log(b)
         break;
    } 
    if ( b === 0 ) {
      
        console.log(a)
          break;
    }
   
  }

//   O(log fi(mm(a,b)) )