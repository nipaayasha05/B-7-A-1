- Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

- Why is any labeled a "type safety hole"
- In TypeScript, the type 'any' is called a "type safety hole" because it disables type checking. When we use 'any', TypeScript allows any kind of value, so we lose the benefit of catching errors at compile time.

We use TypeScript to find errors before runtime, but using 'any' can lead to runtime errors.

Example:
let data: any;

data = "hello";
data.toUpperCase(); // works

data = 5;
data.toUpperCase(); // runtime error: toUpperCase is not a function

- Why is unknown safer than any?
- unknown is safer than any because it does not allow us to use the value directly. We must first check the type before performing any operation.

Example:

let value: unknown = "hello";

if (typeof value === "string") {
console.log(value.toUpperCase()); // safe
}

- type narrowing
- Type narrowing means checking the type of a variable and making it more specific before using it.

Example:

function check(x: string | number) {
if (typeof x === "string") {
return x.length;
}
return x.toFixed(2);
}

Here, we check the type of x before using it. This is called type narrowing
