import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {
    const {books} = useLoaderData();
     // use spinner
     const navigation = useNavigation()
     if(navigation.state === 'loading'){
         return <LoadingSpinner ></LoadingSpinner>
     }
    
    // console.log(books);
    // const [books, setBooks] = useState([]);

    // useEffect( () => {
    //     fetch('https://api.itbook.store/1.0/new')
    //     .then(res => res.json())
    //     .then(data => setBooks(data.books))
    // },[])
    return (
        <div className='my-container'>
            <p>This is books page: {books.length}</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
                {
                    books.map(book => <Book key={book.isbn13}
                    book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;