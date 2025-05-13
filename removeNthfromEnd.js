/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const prev = new ListNode(0, head);

    let slow = prev;
    let fast = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;

    }

    slow.next = slow.next.next;
    return prev.next;
};

