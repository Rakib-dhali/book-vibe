import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  return (
    <Link to={`/bookdetails/${book.bookId}`} className="p-6 rounded-2xl border border-naviblue/15 font-worksans space-y-5">
      <div className="flex items-center justify-center bg-[#f3f3f3] p-8">
        <img className="w-33.5" src={book.image} alt="" />
      </div>
      <div className="flex items-start justify-start gap-5">
        {book.tags.map((tag, i) => (
          <p key={i} className="text-lightgreen bg-lightgreen/5 rounded-4xl px-4 py-3.5">
            {tag}
          </p>
        ))}
      </div>
      <h2 className="font-bold text-2xl text-naviblue font-playfair">{book.bookName}</h2>
      <p className="font-medium text-naviblue/80">By: {book.author}</p>

      <div className="flex items-center justify-between border-t border-dashed pt-3">
        <p className="text-naviblue/80 font-medium ">{book.category}</p>
        <p className="text-naviblue/80 font-medium flex items-center  gap-5 mr-4">
          {book.rating} <FaRegStar color="#131313" />
        </p>
      </div>
    </Link>
  );
};

export default Book;