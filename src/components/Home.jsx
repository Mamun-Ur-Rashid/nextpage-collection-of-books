import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import reader from '../assets/reader.json'

const Home = () => {
    return (
        <div className='my-container flex justify-between'>
            <div>
                <button className='badge'>ON SALE!!</button>
                <h1 className='text-3xl font-bold'>A reader lives a <br /> thousand lives <span className='text-blue-500'>before he dies</span></h1>
                <p className='my-4'>Books are a uniquely portable magic. Books serve to show a <br /> man that those original thoughts of his aren't very new after <br />all. The man who does not read good books is no better than <br />the man who can't.</p>
                <div className='inline-flex items-center gap-x-3'>
                    <div>
                        <button className='btn'><Link to='books'>Visit Store <span></span></Link></button>
                    </div>
                    <div>
                        <Link className='font-bold'>learn More</Link>
                    </div>
                </div>
            </div>
            <div className=' relative lg:w-1/2'>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96'>
                    <Lottie animationData={reader} loop={true}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Home;