"use strict";
// Imagine you are in a universe where you can just perform the following arithematic operations. 
// Addition(+), Subtraction(-), Multiplication(*), Division(/). 
// You are given given a postfix expression. 
// Postfix expression is where operands come after operator. 
// Each operator and operand are seperated by a space. 
// You need to evaluate the expression.

// For example: 
// 25 45 + is equivalent of 25 + 45, hence the answer would be 70. 
// 20 40 + 60 *, it is equivalent of (20+40) * 60, hence the answer should be 3600. 
// 20 40 60 + * is equivalent of 20 * (40 + 60) = 2000.

// Create a method 'evaluate' that takes a string as input and returns a long resulted in the evaluation. 
// Just concentrate on happy paths. 
// Assume that expression is always valid and division is always an integer division.

/**
 * 
 * @param {any} value value of the StackNode
 * @param {StackNode} next (optional) next StackNode
 */
function StackNode(value, next=null){
    this.value=value;
    this.next=next;
}

/**
 * Stack constructor
 */
function Stack(){
    this.top=null;
    this.bottom=null;
    this.size=0;
}

/**
 * Push value on top of the stack
 * @param {any} value The value to push to the stack
 */
Stack.prototype.push = function (value){
    
}

/**
 * evaluate postfix string
 * @param {string} string postfix to evaluate
 */
function postfixEvaluator(string) {
    let arr = string.split(' ');
    if (arr.length === 1) return arr[0]; // in case there is only 1 item in the array. thought: maybe needed to end recursion, needed?
    // find left most operand

}

// Debug
console.log(postfixEvaluator('2 3 +'));