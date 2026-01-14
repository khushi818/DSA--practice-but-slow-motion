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

// a = 12, b = 18
// HCF = 6

// LCM = (12 × 18) / 6 = 36
// Multiples of 4 → 4, 8, 12, 16
// Multiples of 6 → 6, 12, 

// ✅ LCM = 12

// 🔹 Methods to Find LCM
// 1️⃣ Listing Method (for small numbers)

// List multiples of each number and find the first common one.

// 2️⃣ Prime Factorization Method

// Example: LCM of 12 and 18

// 12 = 2² × 3
// 18 = 2 × 3²

// Take highest powers of each prime:
// LCM = 2² × 3² = 36
// a = 12, b = 18
// HCF = 6

// LCM = (12 × 18) / 6 = 36 a*b/HCF 


function GCD(a,b) {

  //  if( a = 1) return 1
  //  if( b <= 1) return 1
   while( a > 0 && b > 0) {
    if(a>b) {
      a = a % b
    }
    else {
      b = b % a 
    }

   }

    if ( a === 0) return b
    if( b === 0) return a 
}

console.log("LCM" , (6*12)/GCD(6,12))
