
# How Generics Make TypeScript Code Reusable and Strictly Typed

## Introduction

Generics are one of the most powerful features of TypeScript. They allow developers to create reusable functions, classes, and components that work with different types while maintaining type safety.

Instead of writing the same logic separately for different data types, generics allow us to write the logic once and reuse it with many types.

## The Problem Without Generics

Suppose we want a function that returns the first item of an array.

Without generics, we might write separate functions:

```ts
function getFirstString(items: string[]): string {
  return items[0];
}

function getFirstNumber(items: number[]): number {
  return items[0];
}