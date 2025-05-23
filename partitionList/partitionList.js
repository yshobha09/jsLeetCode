/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let dummy1 = new ListNode(0);
    let dummy2 = new ListNode(0);
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = head;

    while (current !== null) {
        if (current.val < x) {
            prev1.next = current;
            prev1 = prev1.next;
        } else {
            prev2.next = current;
            prev2 = prev2.next;
        }
        current = current.next;
    }
    prev2.next = null;
    prev1.next = dummy2.next;
    return dummy1.next;
};