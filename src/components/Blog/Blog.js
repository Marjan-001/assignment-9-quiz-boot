import React from 'react';
import './Blog.css'


const Blog = () => {
    return (

        <div className='blog'>

            <h4 className=" text-white text-2xl font-bold dark:text-gray-400">
                What is the purpose of react router?
            </h4>
            <blockquote className="p-6 border my-4  border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
                <p className="text-xl italic font-medium leading-relaxed text-white dark:text-white">"React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL"</p>
            </blockquote>

            <h4 className="text-white text-2xl font-bold mt-2 dark:text-gray-400">
                How does Context Api works?
            </h4>
            <blockquote className="p-6 my-4 border border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
                <p class="text-xl italic font-medium leading-relaxed text-white dark:text-white">"

                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux."</p>
            </blockquote>

            <h4 className=" mt-2 text-white text-2xl font-bold dark:text-gray-400">
                Write about useRef?
            </h4>
            <blockquote className="p-6 pb-2 my-4 border border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
                <p className="text-xl italic font-medium leading-relaxed text-white dark:text-white">"The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly."</p>
            </blockquote>


        </div>

    );
};

export default Blog;