### Question 1

<details>
<summary>What is TypeScript, and how does it differ from JavaScript?</summary>

TypeScript is a statically typed superset of JavaScript that adds optional type annotations to variables, functions, and other structures. It compiles to JavaScript, which means you can write TypeScript code and run it in any environment that supports JavaScript. Key differences include:

- TypeScript introduces static typing to JavaScript, which helps catch type-related errors at compile time.
- TypeScript has features like interfaces, enums, and generics, which are not available in JavaScript.
- TypeScript supports stricter checks, leading to fewer runtime errors by identifying issues early in the development cycle.

</details>

### Question 2

<details>
<summary>What are interfaces in TypeScript, and how do they differ from types?</summary>

In TypeScript, both **interfaces** and **types** are used to define custom data structures, but they have differences in usage:

- **Interfaces** are primarily used to define object shapes and class structures. They support **declaration merging**, meaning if you declare the same interface more than once, TypeScript will merge them.
- **Types** are more general and can represent a wider range of types, such as unions, intersections, or even primitive types. Types are also **immutable**, meaning they cannot be merged.

**Key differences**:
- **Interfaces** can extend other interfaces, while **types** can be used for more complex type definitions (e.g., unions, intersections).
- **Interfaces** can be declared multiple times and merged automatically, while **types** cannot be re-declared.

</details>

### Question 3

<details>
<summary>What are generics in TypeScript, and why are they useful?</summary>

Generics in TypeScript are a way to create reusable components that work with any data type. They allow you to define a placeholder for a type, which can be specified when using the function or class.

Generics provide several benefits:
- **Type safety**: Ensures that types are consistent across different uses of a function or class, preventing type mismatches.
- **Reusability**: Allows you to write functions and classes that work with any data type, without losing type safety.
- **Flexibility**: Lets you build functions, classes, and interfaces that can handle a variety of data types.

</details>

### Question 4
<details>
<summary>What is the difference between `any` and `unknown` in TypeScript?</summary>

Both any and unknown are used to represent any type of value, but there are important differences:

- any: Allows any kind of value to be assigned to a variable, and you can access properties or methods on the value without any checks. It effectively disables type checking for that variable.
   - This can lead to runtime errors if you perform operations that are not valid for that type.

- unknown: Also represents any value, but you are required to perform some type of checking before using it. This makes unknown safer than any since you cannot assume anything about its type without first validating it.

</details>

### Question 5

<details>
<summary>What are TypeScript's utility types, and can you name a few common ones?</summary>

TypeScript provides several utility types to manipulate types. Some of the most commonly used ones are:

- Partial<T>: Constructs a type with all properties of T set to optional.
- Required<T>: Constructs a type with all properties of T set to required.
- Readonly<T>: Constructs a type with all properties of T set to read-only.
- Record<K, T>: Constructs an object type with keys of type K and values of type T.
- Pick<T, K>: Constructs a type by picking a set of properties K from T.
- Omit<T, K>: Constructs a type by omitting a set of properties K from T.

</details>

### Question 6

<details>
<summary>What is type narrowing in TypeScript, and how does it work?</summary>

Type narrowing is the process of refining the type of a variable within a block of code, typically based on control flow logic. TypeScript narrows the type of a variable when it can deduce a more specific type from certain conditions (like if statements, type guards, etc.).

Common methods of type narrowing:
- Type guards: Using typeof, instanceof, or custom type guard functions to narrow down types.
- Equality checks: Checking for specific values like null, undefined, or specific strings/numbers.

</details>

### Question 7

<details>
<summary>What is the purpose of `never` in TypeScript, and when would you use it?</summary>

The never type in TypeScript represents a value that never occurs. It is often used for functions that do not return a value, or functions that throw exceptions and thus never complete normally.

Use cases for never:

1. Functions that always throw an error:

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

2. Functions with infinite loops:

```typescript
function infiniteLoop(): never {
  while (true) {}
}
```
The never type is useful for exhaustiveness checking, especially when working with unions.

</details>

### Question 8

<details>
<summary>What is the `as` keyword in TypeScript, and when would you use it?</summary>

The as keyword in TypeScript is used for type assertion, allowing you to tell TypeScript to treat a value as a specific type. It doesn't change the runtime behavior, but it helps TypeScript understand the type better.

Use cases:
- When you are sure about the type but TypeScript is unable to infer it.
- When you want to override the type checking for specific variables or expressions.

</details>

### Question 9

<details>
<summary>What are mapped types in TypeScript, and how do you use them?</summary>

Mapped types allow you to create new types by transforming properties of an existing type using the `keyof` and `in` operators. This is useful when you want to create modified versions of existing object types in a reusable and DRY way.

Common built-in mapped types include Partial<T>, Required<T>, Readonly<T>, and Record<K, T>.

</details>

### Question 10

<details>
<summary>What are enums in TypeScript, and what are the differences between numeric and string enums?</summary>

Enums are a feature in TypeScript that allow you to define a set of named constants. They can be numeric or string enums.

- String enums provide clearer and more readable output, especially in debugging or logging.
- Numeric enums allow reverse mapping (e.g., Direction[0] === "Up"), which is not possible with string enums.

</details>

### Question 11

<details>
<summary>How do classes work in TypeScript, and what features do they support that JavaScript classes do not?</summary>

Classes in TypeScript are similar to ES6 classes in JavaScript, but with additional features from static typing. TypeScript supports:

- Access modifiers: public, private, protected
- Readonly properties
- Optional properties
- Parameter properties in constructors
- Interfaces for enforcing class structure
- Abstract classes for base definitions

These TypeScript-only features enable more robust and maintainable object-oriented code than JavaScript alone.

</details>
