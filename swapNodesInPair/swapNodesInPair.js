/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let first = head;

    while(first !== null && first.next !== null){
        let second = first.next;
        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;
        first = first.next;
    }
    head = dummy.next;
    return head;
};