### Question 1

<details>
<summary>What are the differences between var, let and const</summary>

Var, let and const are all variables declarators. Var was available in javascript since the beginning, let and const instead were added
with ES06 in 2015. The main differences are:

| Feature                        | `var`                                     | `let`                              | `const`                            |
| ------------------------------ | ----------------------------------------- | ---------------------------------- | ---------------------------------- |
| **Scope**                      | Function-scoped                           | Block-scoped                       | Block-scoped                       |
| **Hoisting**                   | Yes, hoisted (initialized as `undefined`) | Yes, hoisted (but not initialized) | Yes, hoisted (but not initialized) |
| **Re-declaration**             | Allowed in same scope                     | Not allowed in same scope          | Not allowed in same scope          |
| **Re-assignment**              | Allowed                                   | Allowed                            | ❌ Not allowed                      |
| **Initial value required?**    | No                                        | No                                 | ✅ Yes                              |
| **Global binding on `window`** | Yes (in global scope)                     | No                                 | No                                 |


**shadowing**: it happens when a variable declared within a certain scope (like a block or function) has the same name as a variable in an outer scope. The inner variable "shadows" the outer one, making it inaccessible within that inner scope.

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

- number: represents both integers and floating point numbers included between the max safe integer representation. Special values of number are +Infinity, -Infinity, +0, -0, NaN
- string: represents text data.
- boolean: represents logical data (true, false)
- bigint: this is an annotation that allows to represent and operate with number greater than the max safe integer representation.
- symbol: A unique and immutable value often used as object keys to avoid name collisions
- undefined: represents an absence of value, usually assigned by default for example to variables.
- null: it usually represent an absence of a value. If we use the typeof operator on it we will get "object" as result.

</details>

### Question 3

<details>
<summary>Define the reference types in JavaSCript</summary>

Reference types (also called non-primitive types) are data types that store references to memory locations, rather than actual values. Unlike primitives, these are mutable, and they include:

- objects: data structures with attributes stored in pairs key/value
- arrays: ordered collection of values
- functions: a callable object
- map: stores key/value pairs
- set: stores collections of unique values

</details>

### Question 4

<details>
<summary>What are template literals</summary>

Template literals are string literals that allow embedded expressions, multi-line strings, and improved readability. They were introduced in ES6 (ES2015).

They are written using backticks (`) instead of quotes. This feature improves readability and minimizes the need for string concatenation.

</details>

### Question 5

<details>
<summary>What is the difference between using primitive types and reference types</summary>

| Feature                | **Primitive Types**                                                    | **Reference Types**                               |
| ---------------------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| **Definition**         | Basic data types                                                       | Objects and complex structures                    |
| **Stored in memory**   | As **values**                                                          | As **references** (memory addresses)              |
| **Mutable?**           | ❌ Immutable (cannot be changed)                                        | ✅ Mutable (can be changed)                        |
| **Copied by**          | **Value** — a copy of the actual value                                 | **Reference** — a pointer to the same object      |
| **Comparison (`===`)** | Compared by **value**                                                  | Compared by **reference (identity)**              |
| **Examples**           | `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` | `object`, `array`, `function`, `Map`, `Set`, etc. |

In order to avoid wrong modification it is necessary to perform deep copies of values.

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

A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. In other words, closures allow a function to "remember" the environment in which it was created.

When a function is created, it captures the local variables from its surrounding context. Even if the function is called outside of that context, it still has access to those captured variables.

</details>

### Question 10

<details>
<summary>Define the call, apply and bind methods</summary>

The call(), apply(), and bind() methods are all related to how functions are invoked and how they can manipulate the this context. Here's a detailed breakdown of each:

- The call() method allows you to invoke a function with a specified this value and individual arguments.
- The apply() method is similar to call(), but instead of passing individual arguments, you pass them as an array (or an array-like object).
- The bind() method returns a new function that, when called, has its this value set to the provided value and the initial arguments pre-set.

</details>

### Question 11

<details>
<summary>What are default and rest parameters</summary>

Default parameters and rest parameters are features introduced in ES6 (ES2015), and they both deal with function parameters, but they have different use cases. Here's a breakdown:

- Default parameters allow you to specify default values for function parameters in case no arguments are passed (or undefined is passed) for those parameters.
- Rest parameters allow you to represent an indefinite number of arguments as an array. They are useful when you want a function to handle any number of arguments passed to it.

| Feature      | **Default Parameters**                                           | **Rest Parameters**                                      |
| ------------ | ---------------------------------------------------------------- | -------------------------------------------------------- |
| **Purpose**  | Set default values for missing arguments.                        | Collect multiple arguments into an array.                |
| **Usage**    | Assigned to individual parameters.                               | Placed at the **end** of the parameter list.             |
| **Syntax**   | `param = defaultValue`                                           | `...restParams`                                          |
| **Use Case** | When you want to provide default values for optional parameters. | When you don’t know how many arguments you will receive. |

</details>

### Question 12

<details>
<summary>What is a IIFE</summary>

An IIFE (pronounced "iffy") is a JavaScript function that is defined and executed immediately after its creation.

It’s a function expression that is invoked (called) right away without needing to be called explicitly. IIFEs are often used for creating a local scope, to avoid polluting the global scope.

</details>

### Question 13

<details>
<summary>What is currying</summary>

Currying is a functional programming technique where a function that takes multiple arguments is transformed into a series of functions, each taking one argument. Instead of calling the function with all its arguments at once, you call it with one argument at a time, and each function returns another function that accepts the next argument until all arguments are provided.

Currying essentially breaks down a function that takes multiple arguments into a series of functions that take one argument at a time.

</details>

### Question 14

<details>
<summary>What is this</summary>

In JavaScript, this refers to the context in which a function is called. It is a special keyword that allows you to access properties and methods of the object that owns the currently executing code. However, the value of this can change depending on how and where the function is called.

1. Global Context
In the global execution context (outside any function or object), this refers to the global object.
- In browsers, the global object is window.
- In Node.js, the global object is global.

2. Object Method Context
When a function is called as a method of an object, this refers to the object the function is a method of.

3. Constructor Function Context (with new)
When a function is used as a constructor (called with the new keyword), this refers to the newly created instance of the object.

4. Explicitly Binding this with call(), apply(), and bind()
You can explicitly bind the value of this using the call(), apply(), and bind() methods.

5. Arrow Functions and this
Arrow functions behave differently when it comes to this. They don’t have their own this; instead, they inherit this from the surrounding (lexical) context in which they were defined.

</details>

### Question 15

<details>
<summary>What is the difference between == and ===</summary>

The difference between == and === lies in how they compare values:

- == (Loose Equality / Abstract Equality): This operator compares values after performing type coercion (automatic conversion of values to a common type).
- === (Strict Equality): This operator compares values without type coercion, meaning both the value and the type must be the same.

</details>

### Question 16

<details>
<summary>What is the event loop</summary>

The Event Loop is a core concept in JavaScript that allows for asynchronous execution of code. It enables JavaScript to handle non-blocking operations (like I/O operations, timers, network requests) in a single-threaded environment. The event loop ensures that JavaScript remains responsive even when performing time-consuming tasks.

In simple terms, the Event Loop is responsible for executing code, handling events, and processing messages in the event queue.

- Call Stack: This is where JavaScript keeps track of what functions are currently running. It is a stack data structure, meaning the most recently called function is always executed first.
- Callback Queue (Event Queue): This is where asynchronous tasks (like setTimeout, I/O operations, etc.) are placed after they are completed. These tasks are waiting to be executed.
- Web APIs (in browsers): These are provided by the browser (or Node.js) and allow asynchronous operations like HTTP requests (fetch, XMLHttpRequest), timers (setTimeout, setInterval), and DOM events (click, keypress, etc.).
- Event Loop: The Event Loop monitors the Call Stack and the Callback Queue. It takes functions from the Callback Queue and pushes them to the Call Stack when the Call Stack is empty.

The Event Loop enables JavaScript to handle asynchronous code efficiently. Here's how it works with more complex asynchronous tasks:

- Promises: When a promise resolves or rejects, its then (or catch) callback is added to the Callback Queue. The Event Loop will then pick it up once the Call Stack is empty.
- Microtasks: Promises have a higher priority than regular tasks in the Callback Queue. They are added to the Microtask Queue, and the Event Loop processes the Microtask Queue before moving to the regular Callback Queue.

</details>

### Question 17

<details>
<summary>What is a callback</summary>

A callback is a function that is passed as an argument to another function and is intended to be executed later, once a certain event or task has been completed. This is a fundamental concept in JavaScript, especially for handling asynchronous operations like timers, events, and server responses.

Callbacks are a way to extend the behavior of a function, allowing you to run a specific piece of code at the appropriate time.

When callbacks are nested within each other, especially in asynchronous operations, it can lead to a phenomenon called Callback Hell (or Pyramid of Doom), where the code becomes difficult to read and maintain.

</details>

### Question 18

<details>
<summary>What are promises</summary>

A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations more effectively by avoiding the pitfalls of callback hell (nested callbacks).

A Promise is like a contract in which you make a promise to do something, and when that thing is done, you either fulfill or reject the promise based on whether the task was successful or failed.

A Promise can be in one of three states:

1. Pending: The initial state, where the asynchronous operation is still ongoing and the Promise hasn't been resolved or rejected yet.
2. Fulfilled: The asynchronous operation has completed successfully, and the Promise is resolved with a result (the value returned).
3. Rejected: The asynchronous operation has failed, and the Promise is rejected with an error (the reason for the failure).

Once a Promise is created, you can use the .then() and .catch() methods to handle its result:

- .then(onFulfilled, onRejected): This method is called when the Promise is either fulfilled or rejected. It allows you to handle both successful outcomes (via onFulfilled) and errors (via onRejected).
- .catch(onRejected): This method is a shortcut to handle errors (rejections) of a Promise.

</details>

### Question 19

<details>
<summary>How can we achieve concurrency</summary>

JavaScript is single-threaded (it has one call stack), but it can handle concurrent operations using asynchronous programming techniques. Concurrency allows multiple tasks to be in progress at the same time, even if they don’t actually run at the same instant on separate threads.

In JavaScript, concurrency is achieved primarily through:

1. Asynchronous APIs + Event Loop
JavaScript can perform I/O operations (like network requests, file reads, timers) without blocking the main thread using non-blocking asynchronous APIs, and the event loop ensures the results are handled later.

2. Promises
You can run multiple Promises concurrently by not awaiting them immediately

3. Promise.all / Promise.allSettled / Promise.race
- Promise.all() runs Promises in parallel and waits for all to resolve.
- Promise.allSettled() waits for all to finish, regardless of success or failure.
- Promise.race() resolves or rejects as soon as any Promise settles.

These methods allow concurrent execution and are key tools for managing multiple asynchronous tasks efficiently.

4. async/await with Concurrent Execution
To achieve actual concurrency with async/await, start all tasks first, then await them.

5. Web Workers (for true parallelism)
JavaScript can’t normally use multiple threads, but Web Workers allow running code in separate background threads (mostly in the browser).

</details>

### Question 20

<details>
<summary>What is async await</summary>

async/await is syntactic sugar built on top of Promises that allows you to write asynchronous code in a clean, readable, and synchronous-looking style.

It makes working with asynchronous operations much easier, avoiding deeply nested .then() chains and improving code readability and maintainability.

async Keyword
- Declares an asynchronous function.
- Always returns a Promise, even if you return a value directly.
- Inside an async function, you can use await.

await Keyword
- Can only be used inside async functions.
- Pauses the execution of the async function until the awaited Promise resolves or rejects.
- Returns the resolved value or throws the rejected error.

You can handle errors from awaited Promises using try...catch, similar to synchronous error handling.

</details>

### Question 21

<details>
<summary>Explain the process of how ui events are executed</summary>

When an event occurs, it doesn’t just target one element—it may propagate:

- Capturing phase: Event moves from the root down to the target.
- Target phase: Event reaches the actual target element.
- Bubbling phase: Event bubbles back up from the target to the root.

You can control propagation using:
- event.stopPropagation() to stop bubbling or capturing
- { capture: true } in addEventListener() for capture phase

</details>

### Question 22

<details>
<summary>How can we stop event propagation in the bubbling phase</summary>

- event.stopPropagation(): You can stop event propagation during the bubbling phase by using the method
- event.stopImmediatePropagation(): Stops other listeners of the same event on the same element from executing, in addition to stopping bubbling.

</details>

### Question 23

<details>
<summary>What is event delegation</summary>

Event delegation is a technique in JavaScript where you attach a single event listener to a parent element, and handle events that bubble up from its child elements. Instead of attaching individual listeners to many child elements, the parent listens for events and uses logic to act only when specific child elements trigger the event.

Why Use Event Delegation?
- Improves performance (fewer event listeners)
- Handles dynamic elements (new child elements added later)
- Simplifies code maintenance

</details>

### Question 24

<details>
<summary>What is the difference between the event target and the event currentTarget</summary>

Both event.target and event.currentTarget are properties on an event object in JavaScript, but they refer to different elements during event handling:

event.target
- Refers to the actual element that triggered the event.
- It's where the event originated.
- Stays the same during bubbling or capturing.

event.currentTarget
- Refers to the element that the event listener is attached to.
- It can be different from event.target when using event delegation or bubbling

</details>

### Question 25

<details>
<summary>Explain debouncing and throttling</summary>

Both debouncing and throttling are techniques used to control how often a function is executed, especially in response to high-frequency events like scroll, resize, input, or keydown.

Debouncing
Debouncing ensures a function is only called after a certain delay has passed since the last time it was invoked.

Throttling
Throttling ensures a function is only called at most once every X milliseconds, no matter how often the event occurs.

</details>

### Question 26

<details>
<summary>What are minification and bundling</summary>

Minification and bundling are build optimization techniques used in front-end development to improve performance and reduce load times in production environments.

**Minification**
Minification is the process of removing all unnecessary characters from source code without changing its functionality.

Purpose:
- Reduce file size → faster download and parsing by the browser

What gets removed:
- Whitespace
- Comments
- Newlines
- Shortens variable and function names (e.g., totalAmount → a)

**Bundling**
Bundling is the process of combining multiple JavaScript (or CSS, etc.) files into one or a few files.

Purpose:
- Reduce number of HTTP requests
- Manage module dependencies (import/export)
- Optimize delivery of assets

</details>

### Question 27

<details>
<summary>What is lazy loading</summary>

Lazy loading is a performance optimization technique where certain resources (like images, components, or scripts) are loaded only when needed, rather than upfront when the page loads.

| Feature        | Eager Loading                            | Lazy Loading                          |
| -------------- | ---------------------------------------- | ------------------------------------- |
| When it loads  | Immediately during page load             | On demand or when needed              |
| Initial speed  | Slower due to loading everything upfront | Faster due to reduced initial payload |
| Resource usage | Higher                                   | Lower and more efficient              |

</details>

### Question 28

<details>
<summary>What is code splitting</summary>

Code splitting is a performance optimization technique that involves breaking your JavaScript bundle into smaller, separate chunks that can be loaded on demand, rather than as a single large file.

1. Entry Point Splitting
Multiple entry points are defined in your bundler config (e.g., Webpack). Useful in multi-page apps.

2. Dynamic import()
Code is split at runtime and loaded only when needed.

3. Route-based Splitting (e.g., React Router)
Load route components only when navigating to them.

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

### Question 31

<details>
<summary>What are the differences between sessionStorage, localStorage, and cookies in JavaScript?</summary>

JavaScript provides three primary ways to store data on the client side: sessionStorage, localStorage, and cookies. They all have different behaviors and use cases:

| Feature         | `sessionStorage`                                           | `localStorage`                             | Cookies                                                    |
| --------------- | ---------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------- |
| **Persistence** | Only for the duration of the session (until tab is closed) | Persistent until manually deleted          | Until expiration or manually deleted                       |
| **Capacity**    | Around 5MB                                                 | Around 5MB                                 | 4KB per cookie                                             |
| **Access**      | Only accessible in the current tab                         | Accessible across tabs and windows         | Sent with every HTTP request                               |
| **Security**    | No security flags                                          | No security flags                          | Can be secured using `Secure` and `HttpOnly` flags         |
| **Use Case**    | Temporary data storage (e.g., form data)                   | Long-term data storage (e.g., preferences) | Small data or server-side communication (e.g., session ID) |


</details>