import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage/Homepage";
import BookPage from "./Pages/Bookspage/BookPage";
import BookDetailsPage from "./Pages/Bookdetailpage/Bookdetails";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import { CartProvider } from "./Pages/addtoCart/CartContext";
import CartPage from "./Pages/addtoCart/CartPage";
import SearchPage from "./Pages/searchpage/searchPage";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/books-details/:id" element={<BookDetailsPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* Add cart route */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
