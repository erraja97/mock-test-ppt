/**
 Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator. 

 Example 1:
Input: x = 4 Output: 2 Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8 Output: 2 Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
Constraints:

0 <= x <= 231 - 1
 */


function mySqrt(x) {
    if (x === 0) {
      return 0;
    }
  
    let left = 1;
    let right = x;
  
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
  
      if (mid * mid === x) {
        return mid;
      } else if (mid * mid < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return right;
  }
  
  // Example usage
  const x1 = 4;
  console.log(mySqrt(x1)); // Output: 2
  
  const x2 = 8;
  console.log(mySqrt(x2)); // Output: 2
  