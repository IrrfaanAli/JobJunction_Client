import React from 'react';

const Blogs = () => {
    return (
        <div>
            <p className='text-3xl mb-7'>When you used context API</p>
            <p>The Context API is a feature in React that allows data to be passed down from a parent component to its descendants without having to manually pass the data through each level of the component tree. This can make it easier to manage and share data between components in a React application.

                Developers can use the Context API when they have data that needs to be accessed by many components at different levels in the component tree. Instead of passing props down through multiple levels of components, they can create a context and provide it to the component tree with the data that needs to be shared. Then, any component that needs access to that data can access it through the context without having to pass it through all the intermediary components.

                To use the Context API, developers can create a context object using the createContext() method, and then wrap the component tree with a provider component that supplies the data to be shared. Any descendant components that need access to the data can then use the useContext() hook to access the data from the context.


                Overall, the Context API can be useful in simplifying and optimizing the management and sharing of data between components in a React application.</p>

            <p className='text-3xl mb-7 mt-3'>What is custom hook</p>
            <p>A custom hook in React is a reusable function that encapsulates a certain logic or behavior that can be shared across multiple components. Custom hooks are created using the use prefix, just like the built-in hooks in React.

                Custom hooks allow developers to extract common logic from components and reuse it across different components without duplicating code. They can be used to manage state, handle side effects, or perform any other task that is common to multiple components.Custom hooks can also use other built-in hooks or other custom hooks to achieve more complex behavior. They can make it easier to manage complex stateful logic in components and make code more reusable and easier to maintain.</p>
            <p className='text-3xl mb-7 mt-3'>What is useRef and its uses</p>
               <p>In React, useRef is a built-in hook that allows you to create a mutable reference to an element or a value that persists across re-renders of a component. It returns a JavaScript object with a current property that can be used to store and access the current value of the reference</p>
               <p>Here are some common uses of useRef in React:</p>
               <li>Accessing the value of an input field or a DOM element: You can use useRef to get a reference to a DOM element, and then access its value or other properties directly using the current property of the reference object. This is useful when you need to perform some operation on the element, like setting the focus, without triggering a re-render of the component.</li>
               <li>Storing a value or a state that doesn't trigger a re-render: Because the current property of a useRef object is mutable and doesn't trigger a re-render, you can use it to store a value or a state that doesn't affect the rendering of the component. This can be useful for storing data that is used by multiple components, or for keeping track of the previous state of a component.</li>
               <li>Implementing imperative logic: Sometimes you need to perform an action that doesn't fit well with the declarative nature of React, like measuring the size of a DOM element or starting an animation. In these cases, you can use useRef to store a reference to an external library or API, and then call its methods imperatively using the current property of the reference object.</li>
            <p className='text-3xl mb-7 mt-3'>What is useMemo and its uses</p>
            <p>In React, useMemo is a built-in hook that allows you to memoize the result of a function call and cache it so that it doesn't have to be recomputed every time the component re-renders. It takes a function and a list of dependencies, and returns the memoized result of the function.</p>
             <p>Here are some common uses of useMemo in React:</p>
             <li>Optimizing expensive calculations: If a component has a computationally expensive calculation that is performed frequently, it can cause the component to re-render unnecessarily and slow down the application. By using useMemo to memoize the result of the calculation, the component can avoid re-calculating the result on every re-render.</li>
             <li>Avoiding unnecessary re-renders: If a component depends on a large data set or a complex object, it can cause the component to re-render unnecessarily if the object reference changes, even if the object's values haven't changed. By using useMemo to memoize the object or a part of it, the component can avoid re-rendering unless the memoized value actually changes.</li>
             <li>Caching API responses: If a component fetches data from an API and the response is the same for the same inputs, you can use useMemo to cache the response and avoid unnecessary network requests.</li>

        </div>
    );
};

export default Blogs; <p>Blogs</p>