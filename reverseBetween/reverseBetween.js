/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (head === null) return;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }
    let current = prev.next;

    for (i = 0; i < right - left; i++) {
        let toMove = current.next;
        current.next = toMove.next;
        toMove.next = prev.next;
        prev.next = toMove;
    }
    head = dummy.next;
    return head;
};