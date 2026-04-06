import { useContext } from "react";
import Book from "./Book";
import { BookContext } from "../context/BookContext";

const Allbooks = () => {
    const { books, loading } = useContext(BookContext)

  if (loading) return <p>Loading...</p>;
  return (
    <div>
        <h1 className="text-center">Books</h1>
        <div className="grid grid-cols-3 gap-10">
            {books.map(book => <Book key={book.bookId} book={book} />)}
        </div>
    </div>
  );
};

export default Allbooks;
