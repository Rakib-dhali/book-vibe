import { useEffect, useState } from "react";
import Book from "./Book";

const Allbooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

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
