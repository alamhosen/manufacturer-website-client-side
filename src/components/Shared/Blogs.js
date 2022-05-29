import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-12 my-8'>
            <div className='mb-4'>
                <h2 className='text-2xl font-bold mb-3'>How will you improve the performance of a React Application?</h2>

                <p>Optimization is the first key for developer who want to keep user engaged on an app. We can improve the performance of a React Application by following bellow tips.</p>
                <p>useMemo() is a React hook that is used to cache functions in React, CPU-expensive functions.</p>
                <p>Keeping component state local where necessary</p>
                <p>Memoizing React components to prevent unnecessary re-renders</p>
                <p>Caching functions and Lazy loading: Lazy loading is one of the crazy optimizing techniques. We can use Lazy loading.</p>
            </div>

            <div className='mb-4'>
                <h2 className='text-2xl font-bold mb-3'>What are the different ways to manage a state in a React application?</h2>
                <p>There are 4 ways to manage a state in a React application.</p>
                <p>Local state: Data we manage in one or another component.</p>
                <p>Global state: Data we manage across multiple components.</p>
                <p>Server state: Data that comes from any external server that we must be integrated with our UI state.</p>
                <p>URL state: Data that exists on URLs, including the pathname and query parameters.</p>
            </div>

            <div className='mb-4'>
                <h2 className='text-2xl font-bold mb-3'>How does prototypical inheritance work?</h2>
                <p>Prototypal Inheritance is an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, the Singleton Pattern.</p>
            </div>

            <div className='mb-4'>
                <h2 className='text-2xl font-bold mb-3'>You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>We can use find() method to search product by name. The find() method returns the first value that matches from the collection. When one it matches the value in findings, it will not check the remaining values in the array of collection.</p>
            </div>
            <div className='mb-4'>
                <h2 className='text-2xl font-bold mb-3'>What is a unit test? Why should write unit tests?</h2>
                <p>Unit testing is a way to test of software where can be individual units or components of a software are tested. Because of validate each unite of software code performs as expected. Unit Testing is done by the developers during they develop of an application.</p>
                <p>Unit tests help to fix error early in the development time and save costs. Unit test helps developers to understand that the code works perfectly or not. Good unit tests provide as project documentation.</p>
            </div>

        </div>
    );
};

export default Blogs;