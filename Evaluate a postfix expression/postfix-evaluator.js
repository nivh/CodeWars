// @ts-check
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
function StackNode(value, next = null) {
    this.value = value;
    this.next = next;
}

/**
 * Stack constructor
 */
function Stack() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
}

/**
 * Push value on top of the stack
 * @param {any} value The value to push to the stack
 */
Stack.prototype.push = function (value) {
    let newNode = new StackNode(value, this.top);
    if (this.size === 0) this.bottom = newNode; // was empty list
    this.top = newNode;
    this.size++;
    return this; // for chaining
}

/**
 * Pop a value from top of list
 */
Stack.prototype.pop = function () {
    if (this.top === null) return null; // empty stack
    let val = this.top.value;
    this.top = this.top.next;
    if (!this.top) this.bottom = null; // was last node
    this.size--;
    return val;
}

/**
 * simple evaluation function. 
 * return: evaluation of: (operand1 operator operand2)
 * example: (5 * 4) = 9
 * @param {number} operand1 First operand
 * @param {number} operand2 Second opreand
 * @param {string} operator Operator (can handle: + - * /)
 */
function simpleEval (operand1, operand2, operator) {
    switch (operator) {
        case '+': return operand1 + operand2;
        case '-': return operand1 - operand2;
        case '*': return operand1 * operand2;
        case '/': return operand1 / operand2;
        default: return `Error: Operator ${operator} is not supported`;
    }
}

/**
 * evaluate postfix string
 * @param {string} string postfix to evaluate
 */
function postfixEvaluator(string) {
    let stack = new Stack();
    string.split(' ').forEach(item=>{
        if (item==='+' || item==='-' || item==='*' || item==='/') {
            // Oprerator found. pop 2 items from the stack, evaluate them and push them back to the stack
            let operand1=parseInt(stack.pop());
            let operand2=parseInt(stack.pop());
            stack.push(simpleEval(operand2, operand1, item));
        }
        else {
            // Operand found. push it to the stack
            stack.push(item);
        }
    });
    return stack.pop(); // should be the last item, and the result of all expression
}


/**
 * This function console.log's all the values in the stack.
 */
Stack.prototype.print = function () {
    let n=this.top;
    while (n!=null) {
        console.log(n.value);
        n=n.next;
    }
}
// Debug

// check stack
// let s=new Stack();
// s.push(5).push(6).push(7);
// s.print();

//console.log(simpleEval(5,3,'+'));
let check='2 3 +';
console.log(`${check} = ${postfixEvaluator(check)}`);
check='12 4 /';
console.log(`${check} = ${postfixEvaluator(check)}`);
check='12 4 -';
console.log(`${check} = ${postfixEvaluator(check)}`);
check='20 40 + 60 *';
console.log(`${check} = ${postfixEvaluator(check)}`);
check='20 40 60 + *';
console.log(`${check} = ${postfixEvaluator(check)}`);

// best1 from CodeWars.com:
function postfixEvaluator_1(string) {
    let ops = {
      '+': (a, b) => b + a,
      '-': (a, b) => b - a,
      '*': (a, b) => b * a,
      '/': (a, b) => b / a | 0
    };
    return string.split(/\s/).reduce((stack, el) => {
      if (el in ops) {
        stack.push(ops[el](stack.pop(), stack.pop()));
      } else {
        stack.push(+el);
      }
      return stack;
    }, []).pop();
  }

  //best2 from CodeWars.com:
  function postfixEvaluator_2(s) {
    while(!/^-?\d+$/.test(s)) s=s.replace(/(-?\d+) (-?\d+) ([-+\*\/])/,(_,a,b,op)=>~~(eval(a+op+b)))
    return +s
  }