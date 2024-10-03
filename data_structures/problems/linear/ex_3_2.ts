/*
  Write a program to reverse the direction of a given singly-linked list. In
  other words, after the reversal all pointers should now point backwards. Your
  algorithm should take linear time
*/

import { LinkedList, Node } from "./utils/LinkedList";

const comparator = (first: number, second: number) => first === second;

function reverseList(list: LinkedList<number>) {
  let current = list.head;
  let prev: Node<number> | null = null;

  while(current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}


const list = new LinkedList(comparator);
list.append(10);
list.append(20);
list.append(30);
list.traverse();

const reversedList = reverseList(list);
console.log(reversedList)