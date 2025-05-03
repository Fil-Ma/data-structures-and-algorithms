### Question 1

<details>
<summary>What are the main differences between a class component and a functional component?</summary>

Class components were the original way to create components in React, allowing access to features like state and lifecycle methods through this. Functional components were initially stateless and used only for rendering UI. However, with the introduction of hooks in React 16.8, functional components gained the ability to manage state (useState), side effects (useEffect), and more.

Functional components are now preferred because they are simpler, more concise, and easier to test and reuse. Unlike class components, they don't require binding this, and they make it easier to separate concerns using custom hooks.

</details>

### Question 2

<details>
<summary>What is JSX and how does it work under the hood?</summary>

JSX stands for JavaScript XML. It allows developers to write HTML-like syntax directly within JavaScript, making the structure of components more readable and expressive. Under the hood, JSX is not valid JavaScript—it is transpiled by tools like Babel into React.createElement() calls.

</details>

### Question 3

<details>
<summary>What are props in React, and how are they different from state?</summary>

Props (short for “properties”) are read-only data passed from a parent component to a child component. They are used to configure or customize a component and flow unidirectionally from top to bottom. Props are immutable within the receiving component — they cannot be changed by the child.

State, on the other hand, is mutable data that is local to a component and can be updated using hooks like useState (in functional components) or this.setState (in class components). While props are used for external configuration, state is used to track internal, dynamic data that can change over time — like form inputs, toggles, or fetched data.

Changing either props (from above) or state (internally) causes a re-render of the component.

</details>

### Question 4

<details>
<summary>How does the key prop help React with rendering lists?</summary>

The key prop is a special attribute used when rendering lists of elements in React. It helps React identify which items have changed, been added, or removed between renders. By assigning a unique and stable key to each list item (such as an ID), React can efficiently reconcile the virtual DOM and update only the necessary elements, rather than re-rendering the entire list.

Without unique keys, React may re-use or re-order DOM elements incorrectly, leading to rendering bugs or performance issues.

</details>

### Question 5

<details>
<summary>How does React's reconciliation algorithm (diffing) work?</summary>

React's reconciliation algorithm, also known as the diffing algorithm, is how React efficiently updates the DOM when the state of a component changes. Instead of re-rendering the entire DOM, React creates a Virtual DOM — a lightweight copy of the real DOM — and uses it to determine the minimum number of changes required.

Here’s how it works:

1. When state or props change, React re-renders the component to produce a new Virtual DOM tree.
2. It then compares the new Virtual DOM tree with the previous version using a diffing algorithm.
3. Based on this comparison, it generates a set of “patches”, or changes, and applies them to the real DOM in the most efficient way possible.

React makes a few key assumptions to make this process fast:

- Element type changes (e.g., <div> to <span>) are treated as a complete replacement.
- Keys are critical in list diffing — React uses them to track items and determine which items moved, were removed, or added.
- It compares elements at the same level in the tree, not across different branches.

By optimizing this process, React minimizes expensive DOM operations and ensures high performance even with frequent UI updates.

</details>

### Question 6

<details>
<summary>What is the difference between controlled and uncontrolled components?</summary>

In React, a controlled component is one where the component’s state is managed by React. This means that the form element’s value is controlled by the parent component via props and updated via React state (typically using useState or this.setState in class components). For example, input elements are controlled by passing a value prop and updating it on user input, ensuring React is always in sync with the form data.

Uncontrolled components, on the other hand, manage their own state internally through the DOM. Instead of passing a value prop, an uncontrolled input uses defaultValue for initialization and accesses the current value through a ref. This makes uncontrolled components more similar to traditional HTML form elements.

</details>

### Question 7

<details>
<summary>How do you lift state up in React, and when would you do it?</summary>

Lifting state up is the process of moving shared state to the closest common parent component so that multiple child components can access and update it via props. You do this when two or more sibling components need to coordinate behavior or share data.

When to use it:
- When sibling components need to communicate (e.g., one changes a value that affects the other).
- When parent-level logic needs to react to changes in child input (e.g., form validation).
- When centralizing state improves clarity or control.

</details>

### Question 8

<details>
<summary>Explain how useEffect works and how dependency arrays affect its behavior.</summary>

useEffect is a React hook used to perform side effects in function components, such as interacting with the DOM, fetching data, setting up subscriptions, or manually modifying state outside the render flow. It runs after the component has rendered.

The behavior of useEffect depends on its dependency array, which is passed as the second argument:

- No dependency array: the effect runs after every render (initial and updates).
- Empty array ([]): the effect runs only once, after the component mounts — similar to componentDidMount in class components.
- Array with dependencies: the effect runs only when any of the dependencies change between renders.

Additionally, useEffect can return a cleanup function, which React calls:

- before running the effect again, and
- when the component unmounts.

This is useful for clearing timeouts, unsubscribing from listeners, or aborting fetch requests — to prevent memory leaks or unintended behavior.

</details>

### Question 9

<details>
<summary>What are the rules of hooks, and why must they be followed?</summary>

React has two fundamental Rules of Hooks that must be followed to ensure hooks behave as expected:

1. Only call hooks at the top level of your React function.
This means you should not call hooks inside loops, conditions, or nested functions. This ensures hooks are called in the same order every render, which is critical for React to correctly associate hook state with a component.

2. Only call hooks from React function components or from custom hooks.
You should never call hooks from regular JavaScript functions. Hooks are designed to work in the context of React’s rendering system, and calling them outside this context breaks that behavior.

</details>

### Question 10

<details>
<summary>What is React's concurrent mode, and what problems does it aim to solve?</summary>

Concurrent Mode is an advanced feature in React that allows React to work on multiple tasks at the same time and interrupt rendering when needed. It’s designed to make applications more responsive and resilient by improving how React handles rendering under heavy or dynamic workloads.

What Problems It Solves:
- Slow or blocking renders – In traditional (synchronous) rendering, React processes updates one at a time, and long renders can block the main thread, causing input lag or frozen UIs.
- Poor user experience during transitions – Without concurrent features, updating large components can delay interactions like typing, clicking, or animations.
- Lack of prioritization – React couldn't distinguish between urgent and non-urgent updates (e.g., a button click vs. a background data load).

What Concurrent Mode Enables:
- Interruptible rendering – React can pause rendering work, do something more urgent (like responding to a user event), and then resume where it left off.
- Better prioritization – It can prioritize important updates like user input over less critical tasks.
- Time-slicing – Long rendering tasks are broken into smaller chunks, so the browser stays responsive.

Smooth transitions – It enables APIs like startTransition to mark certain updates as non-urgent, improving perceived performance.

Note: Concurrent Mode is not enabled by default, but React 18 introduced automatic concurrency features like automatic batching, useTransition, and concurrent rendering with Suspense.

</details>

### Question 11

<details>
<summary>Explain the concept of a React fiber and how it differs from the old stack-based reconciliation.</summary>

React Fiber is the reconciliation engine introduced in React 16 to replace the older stack-based algorithm. It’s a complete rewrite of the core algorithm that powers how React updates the DOM.

Old Stack-Based Reconciliation (Pre-React 16):
- React used a recursive, synchronous rendering model.
- Once a component started rendering, it would run to completion — there was no way to pause or interrupt it.
- This approach caused performance issues in complex apps, especially if updates took a long time (blocking user interactions).

React Fiber: Key Differences & Benefits

1. Incremental Rendering (Interruptibility):
    - Fiber breaks rendering work into small units called "fibers".
    - React can now pause, abort, or resume work, allowing the browser to handle user input during long renders.

2. Priority and Scheduling:
    - Each fiber has priority, so React can decide what updates are urgent (e.g., clicks) and what can wait (e.g., background data).
    - Enables features like startTransition() and concurrent rendering.

3. Better Error Handling:
    - Fiber supports error boundaries that can gracefully handle errors in the component tree.

4. Better Support for Asynchronous Rendering:
    - Enables modern features like Suspense, useTransition, and concurrent features added in React 18.

5. Reusability of Work:
    - The fiber tree allows React to keep track of both the current and work-in-progress trees, improving update efficiency.

</details>

### Question 12

<details>
<summary>What are React render props and higher-order components, and when might you use each?</summary>

Render props and higher-order components (HOCs) are design patterns in React that allow logic and behavior to be shared across components in a reusable way.

A render prop is a technique where a component receives a function as a prop, and calls it to render UI, often passing state or behavior to it. The function is typically named render or passed as children. Use a render prop when you want to keep components more composable and flexible, especially when dealing with dynamic rendering based on internal logic.

An HOC is a function that takes a component as input and returns a new component with enhanced behavior. It’s commonly used for logic reuse like authentication, theming, or data fetching. Use an HOC when you want to wrap existing components to inject reusable behavior (especially in older codebases or libraries like Redux).

</details>

### Question 13

<details>
<summary>What is the purpose of useCallback and useMemo, and how do they help with performance?</summary>

useCallback and useMemo are React hooks used to optimize performance by preventing unnecessary recalculations or re-creations of functions and values during re-renders.

useCallback
This hook returns a memoized version of a callback function, which only changes if one of the dependencies has changed. It's useful when passing functions to child components to avoid unnecessary re-renders, especially when those children are wrapped in React.memo.

useMemo
This hook returns a memoized value calculated by the function you provide. It only re-computes the value when one of the dependencies changes. It's useful when the computation is expensive and should not run on every render.

When to use:
- Use these hooks only when you identify performance bottlenecks.
- Overusing them can add complexity and hurt performance due to the overhead of tracking dependencies.

</details>

### Question 14

<details>
<summary>How would you implement code-splitting in a React application?</summary>

Code-splitting in React is a technique used to improve performance by breaking the application into smaller bundles that can be loaded on demand, instead of delivering one large JavaScript bundle upfront.

It helps reduce the initial load time by deferring the loading of code that isn’t immediately necessary (e.g., route-specific components).

1. Using React.lazy and Suspense
React provides built-in support for code-splitting components via dynamic imports.

2. Route-Based Splitting with React Router
You can lazy-load components for different routes.

</details>

### Question 15

<details>
<summary>How does React handle error boundaries, and how would you implement one?</summary>

Error boundaries are special React components that catch JavaScript errors anywhere in their child component tree, log them, and display a fallback UI without crashing the whole application. They help make React apps more resilient by isolating failures to specific parts of the UI.

React uses class components to implement error boundaries. They catch errors during:

- Rendering
- Lifecycle methods
- Constructors of child components

However, they do not catch:

- Event handler errors (you must handle those with try/catch)
- Asynchronous code errors (e.g. setTimeout, Promises)
- Server-side rendering errors

</details>

### Question 16

<details>
<summary>What is React.memo, and how does it improve performance?</summary>

React.memo is a higher-order component in React that is used to memoize functional components, meaning it prevents unnecessary re-renders when the component’s props haven’t changed.

When you wrap a component with React.memo, React compares the current props to the previous props using a shallow comparison. If the props are the same, React skips rendering and reuses the previous output.

Performance Benefits:

- Reduces unnecessary re-renders of pure components.
- Helps improve performance in large component trees, especially when:
    - The component does heavy computation or renders large DOM.
    - The component is frequently re-rendered due to parent updates.
    - The props are stable or primitive values (like numbers or strings).

When Not to Use:

- If the component is small and inexpensive to render, React.memo might add unneeded complexity.
- If props are complex objects or frequently change references (like inline functions), React.memo might be ineffective unless you also use useCallback or useMemo.

</details>

### Question 17

<details>
<summary>When would React.memo not work as expected, and how can you fix that?</summary>

React.memo may fail to optimize performance or even hurt it if used incorrectly. Here are common scenarios where it doesn't work as expected — and how to fix them:

1. Props Change on Every Render (Different References)
Issue: If props include objects, arrays, or functions defined inline, their reference changes on each render — even if their contents are the same.
Fix: Use useMemo or useCallback to memoize props before passing them.

2. Frequent Parent Re-renders with Complex Props
Issue: If the parent component updates often and passes complex data (or functions), React.memo won’t help unless you also control how props are created.

Fix:
- Minimize re-renders in the parent.
- Memoize props.
- Combine React.memo with useCallback/useMemo.

3. Component Contains Internal State or Side Effects
Issue: If the component manages state or side effects that change often, memoization won’t prevent those from running.
Fix: Use memoization only for pure, stateless components where render output fully depends on props.

4. Improper Custom Comparison Function
Issue: A custom comparator passed to React.memo may return true incorrectly, preventing necessary updates.
Fix: Write accurate, case-specific comparison logic — or stick with the default shallow check unless you're confident.

</details>

### Question 18

<details>
<summary>What is the difference between useRef and createRef, and when should you use useRef?</summary>

| Aspect            | `useRef`                         | `createRef`                                             |
| ----------------- | -------------------------------- | ------------------------------------------------------- |
| Used In           | **Function components**          | **Class components** (or rarely in function components) |
| Value Persistency | **Persistent** across re-renders | **New** ref object on every render                      |
| Reactivity        | Does **not trigger re-renders**  | Same (also non-reactive)                                |
| Syntax            | `const ref = useRef()`           | `const ref = createRef()`                               |

</details>

### Question 19

<details>
<summary>What happens when you call a useState setter multiple times in a row?</summary>

When you call a useState setter multiple times synchronously (in the same render cycle), React does not immediately update the state. Instead, it batches the updates and applies them all at once before the next render. The outcome depends on whether you’re using direct values or the functional form of the setter.

Key Takeaways:
- React batches state updates for performance, especially during event handlers.
- Using functional updates ensures each call sees the most recent state.
- This behavior is especially important when updating state multiple times in a loop or handler.

</details>

### Question 20

<details>
<summary>Why does setting state in a loop or async callback sometimes not work as expected?</summary>

Setting state in a loop or asynchronous callback in React may not work as expected because React batches state updates and because state updates are asynchronous. This means that relying on stale or outdated state values can lead to incorrect or unexpected results.

Summary
- State updates in React are asynchronous and batched.
- In loops or async code, always use functional updates when relying on the current value.
- Avoid assuming state is updated immediately after calling a setter.

</details>

### Question 21

<details>
<summary>What is the difference between useEffect and useLayoutEffect?</summary>

The main difference between useEffect and useLayoutEffect lies in when they run during the rendering phase of a React component.

useEffect
- Runs after the component has been painted to the screen.
- It is asynchronous and non-blocking, so it doesn't block the browser from updating the UI.
- Ideal for side effects like:
    - Fetching data
    - Setting up subscriptions
    - Updating state based on external events

useLayoutEffect
- Runs synchronously after DOM mutations but before the browser paints.
- It blocks the paint until the effect runs — similar to componentDidMount/componentDidUpdate in class components.
- Useful for:
    - Measuring DOM elements (getBoundingClientRect)
    - Mutating the DOM (e.g. setting scroll position)
    - Fixing visual glitches that would otherwise briefly flash on screen

Important Notes
- Overusing useLayoutEffect can hurt performance by blocking rendering.
- Prefer useEffect unless you need to measure or manipulate layout before the browser paints.

</details>

### Question 22

<details>
<summary>What is useReducer, and how does it compare to useState?</summary>

useReducer is a React Hook used to manage complex state logic in function components. It works similarly to a Redux-style reducer: state updates are triggered by dispatching actions to a reducer function.

| Feature       | `useState`                          | `useReducer`                        |
| ------------- | ----------------------------------- | ----------------------------------- |
| Simplicity    | Simpler syntax, easier to read      | More structured and explicit        |
| State Shape   | Best for primitive or flat values   | Better for complex or nested state  |
| Update Method | Directly call `setState(value)`     | Dispatch actions to a reducer       |
| Debugging     | Harder to trace multiple updates    | Clearer intent through action types |
| Scalability   | Less scalable for large state logic | Scales better with complex logic    |

When to Use useReducer
- When state logic depends on the previous state
- When there are multiple related state values
- When you need clear, centralized control of state transitions (e.g., forms, wizards, toggles)
- When you want Redux-like structure in small components without using Redux

</details>

### Question 23

<details>
<summary>How would you handle complex state updates and side effects with useReducer?</summary>

useReducer is ideal for managing complex or interrelated state because it centralizes updates in a single pure reducer function. For side effects (like fetching data), you separate those effects from the reducer to maintain purity.

Best Practices
- Keep reducers pure: Never put async logic, side effects, or subscriptions in them.
- Use a centralized action format for clarity and scalability ({ type, payload }).
- Split logic with custom hooks if needed (e.g., useUserReducer).

</details>

### Question 24

<details>
<summary>What are the key differences between React Context and Redux?</summary>

| Feature                | **React Context**                                   | **Redux**                                                         |
| ---------------------- | --------------------------------------------------- | ----------------------------------------------------------------- |
| **Primary Purpose**    | Prop drilling solution, global state for small apps | Complex state management for large-scale apps                     |
| **State Management**   | Simple, directly inside Context provider            | Centralized store with actions and reducers                       |
| **Performance**        | Less optimized for frequent updates (rendering)     | Optimized for performance (middleware, selective updates)         |
| **API Complexity**     | Simple API (`useContext`, `Provider`)               | More complex (actions, reducers, store, middleware)               |
| **Middleware Support** | No built-in middleware                              | Extensive middleware support (e.g., Redux Thunk, Redux Saga)      |
| **State Propagation**  | Directly through Context API                        | Dispatching actions and updates via the Redux store               |
| **DevTools**           | Limited devtools support                            | Full DevTools support for time-travel debugging, state inspection |
| **Global State**       | Suitable for simple use-cases (e.g., themes, auth)  | Better suited for large, complex state management                 |
| **Learning Curve**     | Low (simpler setup and usage)                       | Higher (requires understanding actions, reducers, middleware)     |
| **Reactivity**         | React components re-render on context value change  | More granular control over state updates, selective re-rendering  |
| **Community**          | Part of React itself                                | Popular, external library, with a large ecosystem                 |

When to Use React Context:
- When you need to share simple global state (e.g., themes, authentication, language preference) across components.
- For small to medium-sized apps where performance is not a critical concern (Context can cause unnecessary re-renders if not optimized properly).
- When you don't require middleware or complex state logic like actions and reducers.

When to Use Redux:
- When your app has complex state logic and requires more fine-grained control over state updates.
- For large-scale applications that need efficient performance optimizations and tools like Redux DevTools for debugging.
- When you need middleware support (e.g., handling async logic with Redux Thunk or Redux Saga).
- When you want to use selective state updates with actions and reducers to control re-renders in a more structured way.

</details>

### Question 25

<details>
<summary>Can you explain how you'd use Redux Toolkit and how it simplifies Redux usage?</summary>

Redux Toolkit (RTK) is the official, recommended way to write Redux logic, offering a set of utilities to streamline Redux development. It aims to solve many of the boilerplate issues and complexity associated with Redux, making it easier and more efficient to use.

Before Redux Toolkit, setting up Redux involved a lot of boilerplate, such as manually writing action creators, reducers, and combining reducers. RTK provides helpers and best practices to reduce that boilerplate and improve developer experience.

Key Features of Redux Toolkit:

1. configureStore:
- Simplifies store setup by automatically including redux-thunk for async logic, and allows you to add middleware easily.
- Handles devtools automatically in development mode.

2. createSlice:
- Combines the action creators and reducers into a single unit.
- Automatically generates action types and action creators, reducing the need to write them manually.

3. createAsyncThunk:
- Helps you simplify async actions by handling the lifecycle (pending, fulfilled, rejected) of asynchronous requests automatically.
- Automatically dispatches action types for success, failure, and loading states.

4. createEntityAdapter:
- Simplifies managing normalized data (like lists of items) by providing utilities to keep track of ids and entities.
- Great for managing collections of data like users, products, etc., that can be updated individually.

</details>

### Question 26

<details>
<summary>What is prop drilling in React, and how can it be avoided or mitigated?</summary>

Prop drilling refers to the process where data (typically state or functions) is passed down from a parent component to a deeply nested child component through multiple levels of intermediate components via props.

For example, if you have a deeply nested component structure, and a parent component needs to pass data to a child component that’s several levels deep, this data must pass through every intermediate component, even if those components don’t need it.

Problems with Prop Drilling:

- Harder to Maintain:
   - As your component tree grows deeper, it becomes difficult to track what data is being passed down where.
   - Changes in the parent or intermediate components might require modifications across many child components.

- Unnecessary Re-renders:
   - Intermediate components that don’t use the passed-down props will still cause re-renders whenever the data changes.

- Increased Boilerplate:
   - With each intermediate layer, you must explicitly pass down the props, leading to unnecessary code and making the component tree less readable.

How to Avoid or Mitigate Prop Drilling:

1. React Context API:
   - React Context provides a way to share data across components without explicitly passing it down through each level of the component tree.
   - This can eliminate prop drilling by allowing the data to be accessed directly from any component that subscribes to the context.

2. State Management Libraries (e.g., Redux):
   - For larger applications, state management libraries like Redux or Recoil can be used to manage global state outside of the component tree. These libraries allow you to connect any component to the global state directly, without prop drilling.
   - This is especially useful in complex apps where many components need to access and update the same data.

3. Component Composition:
   - Instead of passing props down through multiple levels, you can compose components and pass the necessary state or actions only to the components that need them.

</details>

### Question 27

<details>
<summary>What is the difference between a Single Page Application (SPA) and a Multi-Page Application (MPA)?</summary>

A Single Page Application (SPA) is a web application or website that dynamically updates the content within a single page without refreshing the entire page. When you interact with a SPA, only specific parts of the page are updated, rather than reloading the whole page. This is achieved by using JavaScript to dynamically render views, often using frameworks like React, Angular, or Vue.js.

A Multi-Page Application (MPA) is a traditional web application where each page is a separate HTML document. In MPAs, when you navigate from one page to another, the browser reloads the entire page, including the HTML, CSS, and JavaScript. MPAs are typically used for more complex, content-heavy websites like blogs, news sites, and e-commerce platforms.

| Feature                    | **Single Page Application (SPA)**                                       | **Multi-Page Application (MPA)**                                  |
| -------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Page Loading**           | Single initial load, updates content dynamically.                       | Full page reload on navigation.                                   |
| **User Experience**        | Smooth transitions and fast after initial load.                         | Slower transitions due to page reloads.                           |
| **SEO**                    | SEO challenges due to dynamic content, but solvable with SSR/SSG.       | SEO-friendly since each page is a separate HTML document.         |
| **Routing**                | Managed by JavaScript (client-side routing).                            | Managed by the server (server-side routing).                      |
| **Bandwidth Usage**        | Lower bandwidth after initial load.                                     | Higher bandwidth due to full page reloads.                        |
| **Suitability**            | Best for interactive, dynamic apps (e.g., dashboards, social apps).     | Best for static or content-heavy sites (e.g., blogs, e-commerce). |
| **Development Complexity** | More complex to set up due to client-side routing and state management. | Simpler to set up using traditional server-side routing.          |

</details>

### Question 28

<details>
<summary>What is virtualization in the context of rendering lists in React?</summary>

Virtualization in the context of rendering lists in React refers to a performance optimization technique used to efficiently render large lists of items. Instead of rendering every item in a large list at once (which can be slow and cause performance issues), only a subset of items that are visible in the viewport (or a little beyond) are actually rendered.

This technique is often referred to as "windowing" or "list virtualization", and it ensures that React only renders the items that are currently in view, plus some buffer items for smooth scrolling. As the user scrolls, new items are rendered, and items that are no longer visible are removed from the DOM.

Why Virtualization?

- Rendering large lists in React can cause performance problems because each item in the list gets added to the DOM, resulting in:
- Increased Memory Usage: All items are present in memory at once, which can slow down the app, especially when dealing with thousands of items.
- Slower Rendering: Rendering all items can lead to a laggy experience, as React has to update the DOM for each new item.
- Slow Scrolling: When all items are present in the DOM, scrolling becomes slower because the browser has to manage and render too many DOM elements.

</details>

### Question 29

<details>
<summary>When would virtualization be necessary, and what are its limitations?</summary>

When to Use Virtualization:

- When rendering long lists with hundreds or thousands of items.
- When performance is critical, and rendering all items at once would cause slowdowns or memory issues.
- In infinite scroll scenarios where new items are loaded dynamically as the user scrolls.

Limitations:

- Virtualization works best for large lists. For smaller lists, the overhead of setting up virtualization might not be worth it.
- Complex interactive elements (e.g., modals, animations) might not work as expected with virtualization, so testing and tuning might be required.

</details>
