### Question 1

<details>
<summary>What are the differences between var, let and const</summary>

Var, let and const are all variables declarators. Var was available in javascript since the beginning, let and const instead were added
with ES06 in 2015. The main differences are:

1. **scope**: var allows to declare variables that are available everywhere in the global or function scope depending where it is declared. Let and const are instead bound to the current block scope.
2. **hoisting**: all variables are hoisted in the sense that the declaration is moved at the top of the scope in the moment that the code is compiled but accessing a variable before the initialization can produce errors. To be specific accessing let and const variables before initialization produces a reference error since at this point the variables have yet no content (this is also defined as Temporal Dead Zone). Accessing a var variable before initialization will return undefined.
3. **shadowing**: var variables can be re-declared in the same scope, and the new declaration will shadow the previous one. It can happen also with let and const if variables of the same name are declared inside a nested scope. In the last case it will be different since those variables will not be available in the scope outside but it is a common best practice to avoid using the same names.

A feature of const variables is that they must be initialized at the moment they are declared and their value cannot change. There are special cases when it is possible to change the inner content of the variable and these cases are:

- objects: it is possible to add/change/remove attributes
- arrays: it is still possible to add/change/remove elements

To avoid modifications of object and array declared with const keyword we can use:

- Object.freeze (shallow freeze - it does not work if not in strict mode)
- libraries like immutable.js

</details>

### Question 2

<details>
<summary>Define all the primitive types in JavaScript</summary>

The primitive types are the lowest available data type in javascript. They are:

- number: the type of any number positive or negative included between the max safe integer representation. Special values of number are +Infinity, -Infinity, +0, -0, NaN
- string: the type used to represent a sequence of single characters.
- boolean: the type used to represent true/false data
- bigint: this is an annotation that allows to represent and operate with number greater than the max safe integer representation.
- symbol: a unique identifier usually used for the keys of objects.
- undefined: represents an absence of value, usually assigned by default for example to variables.
- null: it usually represent an absence of a value. If we use the typeof operator on it we will get "object" as result.

</details>

### Question 3

<details>
<summary>Define the reference types in JavaSCript</summary>

Reference types store memory addresses rather than values. They are:

- objects: data structures with attributes stored in pairs key/value
- arrays: ordered collection of values
- functions: a collable object
- map: stores key/value pairs
- set: stores collections of unique values

</details>

### Question 4

<details>
<summary>What are template literals</summary>

Template literals were introduced in ES06 and they allow to define strings of content with the use of the backtick. Advantages of this form are:

- they allow to define string on multiple lines
- they allow to inject javascript by using the notation ${}

This feature improves readability and minimizes the need for string concatenation.

</details>

### Question 5

<details>
<summary>What is the difference between using primitive types and reference types</summary>

Primitive types' variables simply store values, reference types instead store memory addresses. Copying variables may produce unpredictable result since copyed values will be the stored objects and not the strict values. In order to avoid wrong modification it is necessary to perform deep copies of values.

Shallow copy

- equal operator: const obj2 = obj2
- spread operator: const obj2 = { ...obj1 }
- object.assign
- const copyArr = arr.slice() or [...arr]

Deep copy

- structuredClone
- JSON.parse(JSON.stringify(...)) - limitations undefined, functions, Date, Map, Set, RegExp, etc
- loadash cloneDeep

</details>

### Question 6

<details>
<summary>Define all the signatures to declare a function. Illustrate the differences</summary>

There are 3 possible ways to declare a function:

- function declaration, in the form function myFunction() {}
- function expressions, in the form const myFunction = function(){}
- arrow functions, added in ES06

| Characteristics         | **Function Declaration**                           | **Function Expression**                                       | **Arrow Function**                                                               |
| ----------------------- | -------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **hoisting**            | Yes - they can be executed before declaration      | No - the declaration is hoisted but the initialization is not | No - behaves like function expressions                                           |
| **Named**               | Yes - it helps with debugging                      | Yes and no - they can be named or anonymous                   | No - typically anonymous (though they infer the name from the variable/property) |
| **`this` binding**      | Dynamic - determined by how the function is called | Dynamic - same as function declaration                        | Lexical - inherits `this` from the surrounding scope                             |
| **`arguments` object**  | Yes                                                | Yes                                                           | No - does not have its own `arguments` object                                    |
| **Used as constructor** | Yes - can be used with `new`                       | Yes - can be used with `new`                                  | ❌ No - cannot be used as a constructor (`new` throws)                           |
| **Syntax**              | `function foo() {}`                                | `const foo = function() {}`                                   | `const foo = () => {}`                                                           |

</details>

### Question 7

<details>
<summary>Difference between object and map</summary>

| Feature                      | **Plain Object (`{}`)**                                           | **Map (`new Map()`)**                                       |
| ---------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------- |
| **Key Types**                | Strings or Symbols only                                           | Any value (objects, functions, primitives)                  |
| **Key Order**                | Not guaranteed (though insertion order is preserved in modern JS) | Guaranteed insertion order                                  |
| **Iteration**                | Requires `for...in` or `Object.entries()`                         | Built-in `map.forEach()` or `for...of` with `map.entries()` |
| **Performance (large data)** | Slower for frequent add/remove operations                         | Optimized for performance with dynamic keys                 |
| **Size**                     | No built-in `.size` property                                      | `.size` property returns number of entries                  |
| **Prototype pollution risk** | Yes — inherits from `Object.prototype`                            | No — does not inherit unwanted default keys                 |
| **Serialization**            | Easier with `JSON.stringify()`                                    | Needs manual conversion before serialization                |
| **Utility Methods**          | None built-in (you use `Object.*` functions)                      | Rich: `.set()`, `.get()`, `.has()`, `.delete()`, `.clear()` |

</details>

### Question 8

<details>
<summary>Difference between array and set</summary>

Key differences between array and set

| Feature                  | `Array`                                      | `Set`                                 |
| ------------------------ | -------------------------------------------- | ------------------------------------- |
| **Duplicates Allowed**   | ✅ Yes                                       | ❌ No — all values must be unique     |
| **Order Maintained**     | ✅ Yes — insertion order is preserved        | ✅ Yes — insertion order is preserved |
| **Indexing**             | ✅ Yes — accessed by index (`arr[0]`)        | ❌ No — no index-based access         |
| **Data Type**            | Can store any value (primitives, objects)    | Same — can store any JS value         |
| **Methods Available**    | Rich — `map`, `filter`, `reduce`, etc.       | Fewer — mostly `add`, `has`, `delete` |
| **Performance (lookup)** | Slower — `O(n)` for search with `includes()` | Faster — `O(1)` with `has()`          |

Sets will treat reference types in a particular manner. To be specific:

- reference types will be the same only in the case that they will have the same memory address
- 2 different objects with the same attributes but different memory address will be treated as different

</details>

### Question 9

<details>
<summary>What are closures</summary>

Closures are a mechanism of JavaScript where a function is able to retain its lexical context even after execution. It is commonly used in functions returning other functions, although the outer function is executed once, the inner function will retain the lexical scope of the outer function even later.

</details>

### Question 10

<details>
<summary>Define the call, apply and bind methods</summary>

Call, apply and bind are all methods of functions:

- call allows to execute a function by passing a this context
- apply does the same of call but it allows to pass an array for the arguments
- bind allows to bind the function to a specific this. It returns a reference to another function that can be later used

</details>

### Question 11

<details>
<summary>What are default and rest parameters</summary>

The default parameter allows to assign a value to a parameter in the case that a value is not provided (i.e. the value is undefined). Rest parameters use the operator ... in order to group elements in an array or object.

</details>

### Question 12

<details>
<summary>What is a IIFE</summary>

IIFE stands for Immediately Invoked Function Execution and it refers to functions that are immediately executed after it is defined. They are presented with the notation (function() {})()

</details>

### Question 13

<details>
<summary>What is currying</summary>

Currying is a technique that allows to partially execute functions by transforming them into a series of functions.

</details>

### Question 14

<details>
<summary>What is this</summary>

This refers to the object that is executing a function. It can vary depending on the scope and how a function is called.

- if the function is part of an object (e.g. method) this will represent the invoking object
- if the function is a regular function it will represent the global object in non-strict mode (else is undefined)
- when the function is used as a constructor with the new keywork, this is bound to the newly created object

Special cases:

- arrow functions don't have a this context, they get it from the surrounding lexical scope
- in event handlers this refers to the target dom element

</details>

### Question 15

<details>
<summary>What is the difference between == and ===</summary>

They are both comparison operator. One is defined as loose equality comparator (==) and it is called so because it performs type coercion in order to evaluate the parameters. The other one is called strict equality comparator (===) and it returns true only if both operands have same type and same value.

</details>

### Question 16

<details>
<summary>What is the event loop</summary>

JavaScript is a single threaded programming language. In order to make it more performant and avoid that the ui will be blocked by the execution of code, the event loop is used. The event loop constantly check the call stack and the task queues in order to determine what to execute next.

The event loop first executes all the synchronous code on the call stack. When it is clear it then proceeds to the execution of tasks. After the last stack frame, the microtask queue is executed till completion. This queue considers operations such as promises. When the call stack is empty and there are no microtasks to execute, the event loop executes macrotasks. Since macrotasks can generate microtasks, they are executed only one per cycle so that microtasks can have the priority. Macrotasks include intervals, timeouts and ui events.

</details>

### Question 17

<details>
<summary>What is a callback</summary>

A callback is a function that is passed as parameter and that can be executed at a later time.

</details>

### Question 18

<details>
<summary>What are promises</summary>

Promises are a special type of object that was introduced to improve code readability and maintainance since the misuse of callbacks can introduce callback hell. Promises have a status that can be:

- pending - not yet resolved
- fulfilled - resolved successfully
- rejected - failed

Promises are chainable, they have methods that can chain the result into another asynchronous operation.

</details>

### Question 19

<details>
<summary>How can we achive concurrency</summary>

Javascript offers different methods to apply concurrency, mainly with some promise's static methods:

- Promise.all - it resolves when all promises fulfill
- Promise.allSettled - it resolves when all promises settle
- Promise.any - it resolves when any of the promises fulfills
- Promise.race - it resolves when any of the promises settles

</details>

### Question 20

<details>
<summary>What is async await</summary>

Async/await was introduced in ES08 and it further simplifies the use of asynchronicity. Async allows to transform any function into a promise. Await allows to wait that a promise will be fulfilled.

The use of try {} catch allows to determine how the application will behave in the case that an error will occurr or in the case that a promise will reject.

</details>

### Question 21

<details>
<summary>Explain the process of how ui events are executed</summary>

The execution of events in Javascript involves 3 phases:

- capturing: the event travels from the root to the target element
- target
- bubbling: the event is then propagated to all parent elements

</details>

### Question 22

<details>
<summary>How can we stop event propagation in the bubbling phase</summary>

We can stop the propagation by using the stopPropagation method that will stop the event from bubbling to its ancestor. There are cases when a target may have multiple event listeners that may be propagated in the case that the same ui event happens; in this case we can use stopimmediatepropagation to stop any other listener attached to the target.

</details>

### Question 23

<details>
<summary>What is event delegation</summary>

With the knowledge of what event bubbling is, we can optimize the execution of event listeners by delegating the listener to an ancerstor. This way we don't have to attach the same listener to multiple elements.

</details>

### Question 24

<details>
<summary>What is the difference between the event target and the event currentTarget</summary>

The target is the element that triggered the event (typically the element the user interacted with). The current target instead is the element to which the event listener is currently attached. This is useful in event delegation.

</details>

### Question 25

<details>
<summary>Explain debouncing and throttling</summary>

They are both techniques that allows us to optimize code execution in particular in the case of excessive execution of functions and events.

- Debouncing is a technique that allows to execute a function only after an idle timespan is passed. Basically it waits for an interval from the last function call.
- Throttling is a technique that allows to execute a function only once in a specific timespan. Basically the function is executed once and all function call that happen before the timeout expiration will be cancelled.

</details>

### Question 26

<details>
<summary>What are minification and bundling</summary>

Minification and bundling are optimization techniques used to decrease the size of files required to run the application. To be specific minification is the process that involves the removal of unused content like comments, spaces, and in certain cases to simplify variable names. Bundling is the process of joining content or code in a same file in order to decrease overhead on the number of requests performed to obtain the working application.

</details>

### Question 27

<details>
<summary>What is lazy loading</summary>

Lazy loading is a technique that allows to load content on demand, only when required. This improves the overall application, since instead that downloading everything we can just load the required content first. Lazy loading can be applied to:

- media (e.g. images)
- javascript modules
- third party resources (e.g. analytics)

</details>

### Question 28

<details>
<summary>What is code splitting</summary>

Code splitting takes optimization a step further by intelligently breaking up large JavaScript bundles into smaller, manageable chunks. Rather than forcing users to download an entire application at once, code splitting ensures they only download what’s necessary at any given moment.

- entry point splitting: Splits the code based on different entry points of the application
- vendor splitting: Separates third-party libraries
- dynamic imports: Uses dynamic import() statements to load code on-demand
- route splitting: Common in single-page applications (SPAs), where code for a particular route is loaded only when the user navigates to that route.

</details>

### Question 29

<details>
<summary>Can you explain the difference between for...in and for...of loops in JavaScript? When would you use each, and what are the potential pitfalls of using them interchangeably?</summary>

The for...in loop is used to iterate over the enumerable property keys of an object, including inherited properties if they are enumerable. It is best suited for iterating over object properties, not arrays, as it may return unexpected keys such as those added manually or from the prototype chain.

The for...of loop, on the other hand, is used to iterate over iterable values, such as arrays, strings, Maps, Sets, and other iterable objects. It accesses the actual values rather than keys or indices and is generally preferred for array iteration due to its cleaner syntax and predictable behavior.

Using for...in on arrays can lead to unexpected results, especially if the array has custom properties or if order matters. Therefore, for...in is ideal for objects, while for...of is more appropriate for arrays and other iterable collections.

</details>

### Question 30

<details>
<summary>What is a prototype in JavaScript, and how does prototypal inheritance work?</summary>

In JavaScript, a prototype is an object that other objects can inherit properties and methods from. Every JavaScript object has an internal link ([[Prototype]]) to another object, which is its prototype. This forms a prototype chain, allowing properties and methods to be shared across objects.

Prototypal inheritance means that an object can use properties and methods defined on its prototype, even if they are not defined directly on the object itself. This enables reuse and efficient memory usage, as shared behavior is stored in one place—the prototype.

In modern JavaScript, objects can inherit from other objects via Object.create(), or more commonly through class syntax using the class and extends keywords, which under the hood still use prototypes.

The chain continues up until it reaches Object.prototype, which is the root prototype; its prototype is null, marking the end of the chain.

</details>