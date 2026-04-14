/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while(l1 !==null || l2 !== null || carry !== 0){
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;

        let sum = x + y + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if(l1 !== null){
            l1 = l1.next;
        }
        if(l2 !== null){
            l2 = l2.next;
        }
    }
    return dummy.next
};

// Key idea

// We move through both linked lists at the same time:

// take value from l1
// take value from l2
// add carry
// create a new node with the last digit
// keep the carry for the next step
// Time and space complexity
// Time: O(max(m, n))
// Space: O(max(m, n))

// If you want, I can also give you:

// a dry run step by step
// a very easy beginner version
// or the same solution with comments on every line