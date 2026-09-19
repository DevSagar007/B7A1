
---

# `blog-2.md`

```md
# How Generics Help Us Write Reusable and Type-Safe Code in TypeScript

## Introduction

When working on a project, we often write the same type of logic for different kinds of data. For example, we may need a function that works with numbers, another function that works with strings, and another one that works with objects.

Writing separate functions for every type can create unnecessary code duplication.

Generics solve this problem. They allow us to write reusable code that can work with different types while still keeping TypeScript's type safety.

## What Are Generics?

Generics allow us to create a function, class, or interface without deciding the exact type beforehand.

Instead, the type is provided when we use it.

For example:

```ts
function identity<T>(value: T): T {
  return value;
}