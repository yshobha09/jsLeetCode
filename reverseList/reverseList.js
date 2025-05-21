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
var reverseList = function(head) {
    let before = null;
    let current = head;
    let after ;

    while(current !== null){
        after = current.next;

        current.next = before;
        before = current;
        current = after;
    }
    return before;
};


