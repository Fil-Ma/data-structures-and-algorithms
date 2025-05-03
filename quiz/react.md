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

</details>

### Question 8

<details>
<summary>Explain how useEffect works and how dependency arrays affect its behavior.</summary>

</details>

### Question 9

<details>
<summary>What are the rules of hooks, and why must they be followed?</summary>

</details>

### Question 10

<details>
<summary>What is React's concurrent mode, and what problems does it aim to solve?</summary>

</details>

### Question 11

<details>
<summary>Explain the concept of a React fiber and how it differs from the old stack-based reconciliation.</summary>

</details>

### Question 12

<details>
<summary>What are React render props and higher-order components, and when might you use each?</summary>

</details>

### Question 13

<details>
<summary>What is the purpose of useCallback and useMemo, and how do they help with performance?</summary>

</details>

### Question 14

<details>
<summary>How would you implement code-splitting in a React application?</summary>

</details>

### Question 15

<details>
<summary>How does React handle error boundaries, and how would you implement one?</summary>

</details>

### Question 16

<details>
<summary>What is React.memo, and how does it improve performance?</summary>

</details>

### Question 17

<details>
<summary>When would React.memo not work as expected, and how can you fix that?</summary>

</details>

### Question 18

<details>
<summary>What is the difference between useRef and createRef, and when should you use useRef?</summary>

</details>

### Question 19

<details>
<summary>What happens when you call a useState setter multiple times in a row?</summary>

</details>

### Question 20

<details>
<summary>Why does setting state in a loop or async callback sometimes not work as expected?</summary>

</details>

### Question 21

<details>
<summary>What is the difference between useEffect and useLayoutEffect?</summary>

</details>

### Question 22

<details>
<summary>What is useReducer, and how does it compare to useState?</summary>

</details>

### Question 23

<details>
<summary>How would you handle complex state updates and side effects with useReducer?</summary>

</details>

### Question 24

<details>
<summary>What are the key differences between React Context and Redux?</summary>

</details>

### Question 25

<details>
<summary>Can you explain how you'd use Redux Toolkit and how it simplifies Redux usage?</summary>

</details>

### Question 26

<details>
<summary>What is prop drilling in React, and how can it be avoided or mitigated?</summary>

</details>

### Question 27

<details>
<summary>What is the difference between a Single Page Application (SPA) and a Multi-Page Application (MPA)?</summary>

</details>

### Question 28

<details>
<summary>What is virtualization in the context of rendering lists in React?</summary>

</details>

### Question 29

<details>
<summary>When would virtualization be necessary, and what are its limitations?</summary>

</details>
