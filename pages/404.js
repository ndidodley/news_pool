import React from 'react';
import Link from "next/link";

const MyComponent = () => {
    return (
        <div className='bg-gray-100 h-screen w-screen p-8 '>
            <div className='m-auto h-64'>
                <h1 className='font-bold text-center text-2xl font-heading my-4'>
                    Sorry your page hasn't been found
                </h1>
                <p className='font-body text-center text-gray-500 text-center'>
                    Navigate back to the <Link href='/'>
                    <a className='text-blue-500'>Home</a>
                </Link> page
                </p>
            </div>
        </div>
    );
};

export default MyComponent;
