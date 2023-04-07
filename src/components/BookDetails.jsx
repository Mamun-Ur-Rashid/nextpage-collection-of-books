import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const BookDetails = () => {
    const bookDetails = useLoaderData();
    const [fold , setFold] = useState(true)
    console.log(bookDetails);
    const {image, title, desc, authors, publisher, year, rating, url, price} = bookDetails;
    // use spinner
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='my-container'>
            <div className='flex  max-w-screen-lg overflow-hidden bg-white border rounded shadow-lg'>
                <div className='ml-4'>
                    <img src={image} alt="book cover" className='object-cover w-full lg:h-full' />
                </div>
                <div className='p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2 ml-auto'>
                    <div>
                        <p className='badge'>Brand new</p>
                    </div>
                    <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>{title}</h5>
                    <p className='text-gray-900'>Authors: {authors.substring(0, 50)}</p>
                    <p className='text-gray-900'>Publisher: {publisher}</p>
                    <p className='text-gray-900'>Year: {year}</p>
                    <p className=' text-gray-900'>Rating: {rating}</p>
                    { fold ? (
                        <>
                         <p className=' text-gray-900'>{desc.substring(0, 100)}...</p>
                         <span className='cursor-pointer text-blue-700' onClick={() => setFold(!fold)}>Read More</span>
                        </>) : (
                            <>
                             <p className=' text-gray-900'>{desc}...</p>
                             <span className='cursor-pointer text-blue-700' onClick={() => setFold(!fold)}>Read Less</span>
                            </>
                        )
                        }
                    <div className='flex gap-5 items-center mt-8'>
                        <a href={url} target='_blank' className='btn'>Buy Now</a>
                        <p className='items-center font-extrabold text-gray-600'>Price: {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;