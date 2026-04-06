import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { BookContext } from '../context/BookContext';

const BookDetails = () => {
    const params = useParams();
    const {bookId} = params;

    const { books } = useContext(BookContext)

   const  booksDetails = books.find((book => book.bookId == bookId  ))
   console.log(booksDetails);

  return (
    <div className='flex items-center justify-center gap-20 mt-20 pb-20'>
        <img className='w-106.25 h-auto' src={booksDetails.image} alt="" />
        <div className='space-y-4 flex items-start flex-col'>
            <h1 className='font-bold text-[40px] text-naviblue font-playfair' >{booksDetails.bookName}</h1>
            <p className='font-medium text-xl text-naviblue/80'>By : {booksDetails.author}</p>
            <hr />
            <p>{booksDetails.category}</p>
            <hr />
            <p className='font-bold leading-6 text-naviblue'>Review <span className='text-naviblue/70 text-[16px] font-normal '></span>{booksDetails.review}</p>
            <div className='flex gap-5'>
                <p className='font-bold leading-6 text-naviblue '>tag </p>
                {booksDetails.tags.map((d, i)=> <p key={i} className='text-lightgreen bg-lightgreen/5 rounded-7 px-4 py-1.75'>{d}</p>)}
            </div>
            <hr />
            <p>Numbers of pages: <span className='text-naviblue'></span></p>
            <p>Publisher: </p>
            <p>Years od publishing:</p>
            <p>Rating: </p>
            <div>
                <button>Read</button>
                <button>WishList</button>
            </div>
        </div>
    </div>
  )
}

export default BookDetails