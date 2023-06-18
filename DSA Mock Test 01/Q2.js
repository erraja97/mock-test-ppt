/**
 * 
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0] Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] Output: [8,9,9,9,0,0,0,1]

 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */



function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
  
    while (l1 || l2 || carry) {
      let sum = carry;
      if (l1) {
        sum += l1.val;
        l1 = l1.next;
      }
      if (l2) {
        sum += l2.val;
        l2 = l2.next;
      }
  
      carry = Math.floor(sum / 10);
      sum = sum % 10;
  
      current.next = new ListNode(sum);
      current = current.next;
    }
  
    return dummy.next;
  }
  
  // Example usage
  
  // Example 1
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  let result = addTwoNumbers(l1, l2);
  let output = [];
  while (result) {
    output.push(result.val);
    result = result.next;
  }
  console.log(output); // Output: [7, 0, 8]
  
  // Example 2
  const l3 = new ListNode(0);
  const l4 = new ListNode(0);
  
  result = addTwoNumbers(l3, l4);
  output = [];
  while (result) {
    output.push(result.val);
    result = result.next;
  }
  console.log(output); // Output: [0]
  
  // Example 3
  const l5 = new ListNode(9);
  l5.next = new ListNode(9);
  l5.next.next = new ListNode(9);
  l5.next.next.next = new ListNode(9);
  l5.next.next.next.next = new ListNode(9);
  l5.next.next.next.next.next = new ListNode(9);
  l5.next.next.next.next.next.next = new ListNode(9);
  
  const l6 = new ListNode(9);
  l6.next = new ListNode(9);
  l6.next.next = new ListNode(9);
  l6.next.next.next = new ListNode(9);
  
  result = addTwoNumbers(l5, l6);
  output = [];
  while (result) {
    output.push(result.val);
    result = result.next;
  }
  console.log(output); // Output: [8, 9, 9, 9, 0, 0, 0, 1]
  