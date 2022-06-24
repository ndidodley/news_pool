import React from 'react';
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

const MyComponent = () => {
    return (
        <>
            <Header/>
            <div className='m-auto h-64 pt-16'>
                <h1 className='font-bold text-center text-2xl font-heading my-4'>
                    Sorry your page hasn't been found
                </h1>
                <p className='font-body text-center text-gray-500 text-center'>
                    Navigate back to the <Link href='/'>
                    <a className='text-[#D3373C]'>Home</a>
                </Link> page
                </p>
            </div>
            <Footer/>
        </>
    );
};

export default MyComponent;
