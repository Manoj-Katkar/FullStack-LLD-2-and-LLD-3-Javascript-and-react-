// Frontend Interview Preparation Notes

// Fundamentals and Advanced JavaScript

// 1. Variables: var, let, const
//    - var: Function-scoped, allows re-declaration, can be hoisted.
//    - let: Block-scoped, prevents re-declaration, more predictable scoping.
//    - const: Block-scoped, immutable references (though object contents can still change).

// 2. Data Types: 
//    - Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt.
//    - Reference types: Objects, Arrays, Functions. Stored as references in memory.

// 3. Functions: 
//    - Declaration: Named functions defined using the `function` keyword.
//    - Expression: Functions assigned to variables, can be anonymous.
//    - Arrow functions: ES6 shorthand syntax, has no `this` or `arguments` binding.

// 4. Hoisting: 
//    - Variables and function declarations are "hoisted" to the top of their scope. 
//    - Functions are fully hoisted, but `var` variables are undefined until initialization.

// 5. Closures: 
//    - Functions that "close over" variables from their lexical environment, allowing inner functions to access variables from outer functions even after the outer function has returned.

// 6. IIFE (Immediately Invoked Function Expression): 
//    - A function that is executed immediately after it is defined. Useful for encapsulating scope to avoid polluting the global namespace.
//    Example: `(function() { console.log('IIFE') })();`

// 7. Event Loop: 
//    - JavaScript's runtime model is single-threaded, but async operations (timers, promises) are handled via the event loop, which picks tasks from the callback queue to execute when the call stack is empty.

// 8. Callbacks, Promises, Async/Await: 
//    - Callbacks: Functions passed as arguments to other functions, executed later.
//    - Promises: Objects representing eventual completion or failure of async operations.
//    - Async/Await: Syntactic sugar around promises, making async code easier to read and write. 

// 9. Error Handling: 
//    - try/catch: Used to handle runtime errors.
//    - throw: Manually trigger an error.
//    - Custom Errors: Extending the Error class to create domain-specific errors.

// 10. Prototypes, Inheritance, Object-oriented JS: 
//    - Prototype: Every JS object has a hidden `[[Prototype]]` property that can be used for inheritance.
//    - Inheritance: Objects can inherit properties and methods from other objects via prototypes.
//    - OOP: JS supports object-oriented programming via constructor functions, ES6 classes, and the `this` keyword.

// 11. ES6+ Features: 
//    - Destructuring: Unpacking values from arrays or properties from objects into variables.
//    - Spread/Rest: `...` used for both expanding arrays/objects and collecting function arguments.
//    - Classes: Syntactic sugar over constructor functions, providing easier OOP syntax.
//    - Modules: Import/export functionality for modularizing code.
//    - Template Literals: `backticks` allow for easier string interpolation and multi-line strings.

// Design Patterns and System Design

// 1. Singleton Pattern: 
//    - Ensures that a class has only one instance and provides a global access point to it.
//    - Example: Database connections in a Node.js app are often implemented as singletons.

// 2. Factory Pattern: 
//    - A function that creates and returns objects based on input without exposing the exact class being instantiated.
//    - Example: UserFactory creating different types of users based on user roles.

// 3. Module Pattern: 
//    - Encapsulates private variables and functions while exposing only specific methods as public.
//    - Example: IIFE combined with closures can create private variables in a module.

// 4. Observer Pattern: 
//    - Defines a one-to-many dependency where changes in one object (subject) automatically notify and update other objects (observers).
//    - Example: Event listeners in JavaScript.

// 5. MVC (Model-View-Controller): 
//    - Architectural pattern that separates an application into three main components: Model (data), View (UI), and Controller (business logic).
//    - Example: Express.js can follow an MVC structure in backend development.

// 6. Separation of Concerns (SoC): 
//    - Dividing a system into distinct sections where each section addresses a separate concern (e.g., UI, business logic, data).
//    - Helps with code maintainability and scalability.

// 7. SOLID Principles: 
//    - Five design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
//    - Example: Single Responsibility principle states that a class should only have one reason to change (handle one responsibility).

// 8. Microservices vs. Monolithic Architecture: 
//    - Microservices: Independent services running separately, communicating via APIs. Scalable, flexible.
//    - Monolithic: A single, unified codebase. Easier to start with, but harder to scale.

// 9. Caching Strategies: 
//    - Client-side caching: Store assets (like images) in the user's browser to reduce server load.
//    - Server-side caching: Store data on the server (Redis, Memcached) to reduce database queries and speed up responses.

// 10. RESTful API Design: 
//    - Principles for building scalable APIs. Includes HTTP methods (GET, POST, PUT, DELETE), stateless communication, and resource-based URLs.
//    - GraphQL: An alternative to REST, allows clients to request only the data they need, improving flexibility and efficiency.

// DOM Fundamentals and DOM Manipulation

// 1. DOM Tree: 
//    - The DOM is a tree-like structure representing the hierarchy of elements on a web page.
//    - Each element is a node (Element nodes, Text nodes, Comment nodes).

// 2. Methods to Access Elements: 
//    - `getElementById`: Returns a single element by ID.
//    - `querySelector`: Returns the first matching element by CSS selector.
//    - `querySelectorAll`: Returns all elements that match the CSS selector.
//    - `createElement`: Creates a new DOM element.

// 3. DOM Events: 
//    - Events like clicks, keypresses, and form submissions can be handled with `addEventListener`.
//    - Example: `document.getElementById('myBtn').addEventListener('click', myFunction);`

// 4. Event Delegation: 
//    - Attaching a single event listener to a parent element to handle events for its child elements. Useful for dynamically added elements.

// 5. Event Bubbling and Capturing: 
//    - Bubbling: Events propagate from the innermost target element up to the outer elements.
//    - Capturing: Events propagate from the outermost element to the target element. Controlled using the third parameter in `addEventListener`.

// 6. Manipulating CSS: 
//    - `element.classList.add()`, `element.classList.remove()`: Add/remove classes dynamically.
//    - Inline styles can be manipulated using the `style` property: `element.style.backgroundColor = 'blue';`

// 7. Forms and Input Handling: 
//    - Access form data using `value` properties of inputs.
//    - Handle events like `input`, `change`, and `submit` to work with form data dynamically.

// CSS Preprocessors

// 1. Sass and Less: 
//    - CSS preprocessors that add features like variables, nesting, and mixins, which are not available in standard CSS.
//    - Example: Defining color variables or reusable chunks of CSS using mixins (code reuse).

// 2. Benefits: 
//    - Modular code: Separate code into smaller, more manageable pieces.
//    - Variables: Store repeated values (e.g., colors, fonts) and use them throughout the stylesheet.
//    - Nesting: Allows you to nest CSS selectors inside one another, representing the DOM structure more intuitively.

// 3. Compile-time CSS Generation: 
//    - Sass or Less files are compiled into standard CSS before being sent to the browser.

// Responsive Design

// 1. Media Queries: 
//    - A technique to apply different styles based on the device's characteristics (like screen size).
//    - Example: `@media screen and (max-width: 600px) { ... }` applies styles for devices with widths less than 600px.

// 2. Mobile-first Approach: 
//    - Design for mobile devices first, then progressively enhance for larger screens.
//    - Ensures optimal performance on smaller devices.

// 3. Fluid Grids and Flexible Layouts: 
//    - Use percentages or flexible units (like `vw`, `vh`, `rem`, `em`) to create layouts that adapt to various screen sizes.

// 4. Flexbox: 
//    - A CSS layout model that provides an easy way to align items within a container.
//    - Key properties: `justify-content`, `align-items`, `flex-grow`, `flex-shrink`.

// 5. CSS Grid: 
//    - A more powerful layout system that provides control over both rows and columns in a grid-like layout.
//    - Example: `grid-template-rows`, `grid-template-columns`, `grid-area` to define the structure of the grid.







// !Events and Triggers

// 1. Event types:
// - click: Fired when a user clicks on an element. Example: A button click triggers an action.
// - keydown: Fired when a key is pressed on the keyboard.
// - submit: Fired when a form is submitted. Useful for handling form submissions.
// - load: Fired when the page or media elements (like images) fully load.
// - input: Fired when the value of an input element changes, useful in forms or search fields.

// 2. Custom events:
// - JavaScript allows you to create and dispatch custom events using the `Event` constructor and `dispatchEvent`.
//   Example:
//   const event = new Event('customEvent');
//   element.dispatchEvent(event);

// 3. Debouncing and Throttling:
// - Debouncing: Ensures a function is only executed after a certain delay following the last event call.
//   Useful in scenarios like typing in a search bar to avoid triggering searches for each keystroke.
// - Throttling: Limits the number of times a function can be executed over a time period. Useful for events like window resizing or scroll.

// 4. PreventDefault and StopPropagation:
// - preventDefault(): Prevents the default action associated with an event, such as stopping a form from submitting.
//   Example: 
//   event.preventDefault();
// - stopPropagation(): Stops the event from bubbling up or down the DOM tree, preventing it from triggering other event handlers.
//   Example:
//   event.stopPropagation();

// Bootstrap and TailwindCSS

// 1. Bootstrap:
// - A popular component-based CSS framework offering pre-built UI components like cards, buttons, modals, etc.
// - Bootstrap includes a 12-column grid system for creating responsive layouts, and a set of Flexbox utilities for alignment and spacing.
// - You can quickly create complex, responsive layouts by using Bootstrap's predefined classes.

// 2. TailwindCSS:
// - TailwindCSS is a utility-first CSS framework that lets you apply individual styling rules directly in the HTML with classes like `text-center`, `bg-blue-500`.
// - Tailwind allows easy customization of themes using the `tailwind.config.js` file. You can define your own color palettes, fonts, and more.
// - Responsive utilities like `md:`, `lg:`, and `xl:` let you apply styles at different screen sizes (e.g., mobile, tablet, desktop).

// 3. Comparison:
// - Bootstrap focuses on a component-based approach, where you use predefined, styled UI elements.
// - TailwindCSS takes a utility-based approach, where you build your UI by applying small, reusable CSS classes directly to the HTML elements for greater control and customization.

//! AlpineJS

// 1. Reactive data binding:
// - AlpineJS allows for declaring data using `x-data` inside an element. This data is bound to the DOM and updates when the data changes.
// - `x-bind`: Dynamically bind attributes to elements. Example:
//   <img :src="imageUrl">
// - `x-model`: Two-way data binding between form inputs and your data model. Example:
//   <input x-model="name">

// 2. Event handling:
// - `x-on`: Handles events like clicks, keypresses, etc., directly in the HTML. Example:
//   <button x-on:click="doSomething()">Click me</button>
// - `x-show` and `x-if`: Conditional rendering directives to show or hide elements based on data. Example:
//   <div x-show="isVisible">This is visible</div>

// 3. Minimalistic and No-Build Setup:
// - AlpineJS is designed to enhance static HTML pages with minimal JavaScript. No build steps or complex configurations are needed, making it perfect for adding interactivity to simpler projects without using a full framework like Vue or React.

// Any JavaScript-based framework you know

// 1. React.js:
// - React is a component-based JavaScript library for building UIs. It breaks down the UI into reusable components.
// - JSX is a syntax extension of JavaScript used in React to write HTML-like code within JS files. It simplifies UI creation with a declarative style.

// 2. State management:
// - useState: A React Hook that allows you to add state to functional components. Example:
//   const [count, setCount] = useState(0);
// - useReducer: A hook for managing complex state logic, similar to Redux-style reducers.
// - Context API: A built-in way to manage global state in a React app without prop-drilling. It allows you to share data between deeply nested components without manually passing props.

// 3. Lifecycle methods (useEffect) and Custom Hooks:
// - useEffect: React Hook that runs side-effects in functional components, such as fetching data or updating the DOM after rendering. Example:
//   useEffect(() => {
//     fetchData();
//   }, []);
// - Custom hooks: Custom logic extracted from components for reuse. Useful for handling complex logic like form validation or API calls across multiple components.

// 4. Routing (React Router):
// - React Router is used for handling navigation in a React app. It supports features like nested routes, dynamic parameters in URLs, and programmatic navigation using `useHistory` or `useNavigate`.
// - Nested routing allows defining routes inside other routes for a modular layout.

// Frontend Optimization

// 1. Minification, Bundling:
// - Minification removes unnecessary characters from the code (like spaces and comments) to reduce file sizes.
// - Bundling combines multiple files into one or a few files to reduce the number of HTTP requests required by a webpage.
// - Tools like Webpack and Vite are commonly used to bundle and optimize JavaScript and CSS for production.

// 2. Lazy Loading:
// - Lazy loading defers loading of non-critical resources (like images or scripts) until they are needed. For example, loading images only when they are in the viewport using the Intersection Observer API.
//   Example:
//   const observer = new IntersectionObserver(callback, options);

// 3. Code Splitting:
// - Code splitting involves breaking up the JavaScript bundle into smaller, more manageable chunks that are loaded only when necessary. This improves page load time by reducing the initial bundle size.
//   Example in React (Dynamic imports):
//   const SomeComponent = React.lazy(() => import('./SomeComponent'));

// 4. Asset Caching and Prefetching:
// - Caching stores files locally (in the browser) to avoid downloading them again on subsequent visits. 
// - Prefetching loads resources ahead of time, typically for future navigations, improving performance and user experience.

// Core Web Vitals and Their Importance in Frontend Development

// 1. Largest Contentful Paint (LCP):
// - LCP measures the time it takes for the largest visible element (like a hero image or large text block) to load. A good LCP score indicates that the main content of the page is loading quickly.

// 2. First Input Delay (FID):
// - FID measures the time from when a user first interacts with a page (clicking a button, typing, etc.) to the time when the browser can respond to that interaction. A lower FID means the page is more responsive to user input.

// 3. Cumulative Layout Shift (CLS):
// - CLS measures the visual stability of a page. It quantifies how often elements shift or jump around during page load. Low CLS ensures that the layout is predictable and doesn't cause unexpected shifts for the user.

// 4. Importance:
// - Core Web Vitals are essential for a better user experience, faster load times, and improved SEO rankings. Google uses these metrics to rank websites, so optimizing for them helps in search engine results.

