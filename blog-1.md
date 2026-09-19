# Why `unknown` Is Safer Than `any` in TypeScript

## Introduction

One of the main reasons developers use TypeScript is to catch errors before the code runs. TypeScript gives us type checking so that we can write safer and more predictable code.

However, the `any` type can remove a lot of these benefits. When we use `any`, TypeScript basically stops checking the value. This is why `any` is often called a "type safety hole".

For situations where we do not know the type of a value beforehand, `unknown` is usually a better option.

## What Is `any`?

The `any` type means that a variable can contain any type of value. We can also perform almost any operation on it without getting a TypeScript error.

For example:

```ts
let value: any = "Hello";

value.toUpperCase();
value.toFixed();