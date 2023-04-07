import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    // console.log(book)
    return (
        <Link to={`/book/${book.isbn13}`}>
            <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
            <img src={book.image} alt="image cover" className='object-cover'
            />
            <div className='bg-black bg-opacity-75 w-72 h-80 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                <p className='p-2'>{book.title}</p>
                <br />
                <p className='p-2'>{book.subtitle.substring(0, 45)}...</p>
                <br />
                <p className='p-2 mt-auto'>Price: {book.price}</p>
            </div>
        </div>
        </Link>
    );
};

export default Book;