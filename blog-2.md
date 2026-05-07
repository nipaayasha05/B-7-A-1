# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

Generics allow us to create reusable functions and components that stay strictly typed for any type of data we pass in.

Normally, in TypeScript, we define specific input and output types for a function. If the input and output types do not match, TypeScript shows an error.

For example:

function getUpperCase(value: string): string {

return value.toUpperCase();

}

function doubleNumber(value: number): number {

return value \* 2;

}

These functions work, but they are not reusable for different types.
Generics allow us to write reusable functions while keeping type safety.

For example:

function identity<T>(value: T): T {

return value;

}

If input is string, output is string. If input is number, output is number
We cannot use properties that TypeScript does not know exist.

For example:

function getLength<T>(data: T): number {

return data.length;

}

This will cause an error because TypeScript does not know if T has a length property.
To fix this, we can use a type constraint.

for example:

function getLength<T extends {length: number}>(data: T): number {

return data.length;

}

This case typescript knows the type of T, and it has a length property. It does not give an error.
