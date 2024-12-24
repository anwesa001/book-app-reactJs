import React from "react";
import Navbar from "../../components/layouts/navbar/navbar";
import SearchInputForm from "../../components/form/searchinputform/searchinputform";
import "../Bookspage/bookpage.style.css";
import ProductListAll from "../../components/layouts/productlistall/productlistall";
import Footer from "../../components/layouts/footer/footer";

const BookPage = () => {
  return (
    <section>
      <Navbar darkTheme={true} />

      <div className="search-container">
        <h2>
          Dive into the world of <span className="text-primary">Books</span> !
        </h2>
        <SearchInputForm darkTheme={false} />
      </div>

      <ProductListAll />
      <Footer />
    </section>
  );
};

export default BookPage;
