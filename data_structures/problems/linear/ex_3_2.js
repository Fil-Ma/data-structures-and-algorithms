"use strict";
/*
  Write a program to reverse the direction of a given singly-linked list. In
  other words, after the reversal all pointers should now point backwards. Your
  algorithm should take linear time
*/
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./utils/LinkedList");
var comparator = function (first, second) { return first === second; };
function reverseList(list) {
    var current = list.head;
    var prev = null;
    while (current !== null) {
        var next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
var list = new LinkedList_1.LinkedList(comparator);
list.append(10);
list.append(20);
list.append(30);
list.traverse();
var reversedList = reverseList(list);
console.log(reversedList);
