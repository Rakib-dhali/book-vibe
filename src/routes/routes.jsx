import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import NotFound from "../pages/NotFound.jsx";
import HomePage from "../pages/HomePage.jsx";
import Books from "../pages/Books.jsx";
import Readlist from "../pages/Readlist.jsx";
import BookDetails from "../components/BookDetails.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element:  <HomePage/>
      },
      {
        path: "books",
        element: <Books/>
      },
      {
        path: "readlist",
        element: <Readlist/>
      },
      {
        path: "bookdetails/:bookId",
        element: <BookDetails/>
      }
      
    ]
  },
]);