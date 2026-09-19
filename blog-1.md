# Why `unknown` Is Safer Than `any` in TypeScript

## Introduction

TypeScript is designed to make JavaScript applications safer by checking types during development. However, using the `any` type can remove many of these safety benefits. This is why `any` is often described as a "type safety hole."

When working with unpredictable data, such as API responses or user input, `unknown` is usually a safer choice because TypeScript requires us to check the value before using it.

## Why Is `any` a Type Safety Hole?

The `any` type tells TypeScript that we can use a value in almost any way without checking its type.

```ts
let value: any = "Hello";

value.toUpperCase();
value.toFixed();
value.someRandomMethod();