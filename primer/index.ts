function sum(first: number, second: number | string) {
    return first + (second as any);
}

let result = sum(10, "10");

console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, 10);

console.log(`Result value: ${result}, Result type: ${typeof result}`);

// 类型不容易推断的情况；
// 函数参数和返回值；
// 需要明确表达设计意图的地方。