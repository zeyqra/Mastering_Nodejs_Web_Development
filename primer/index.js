"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(first, second) {
    return first + second;
}
let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
// 类型不容易推断的情况；
// 函数参数和返回值；
// 需要明确表达设计意图的地方。
