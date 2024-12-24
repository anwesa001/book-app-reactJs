import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./srchrsltcard.style.css";

const SearchResultCard = ({ bookData }) => {
  return (
    <section className="cart-item">
      <div className="cart-item-img-container">
        <img src={bookData.url} alt="cart-item-img" className="cart-item-img" />
      </div>
      <div className="cart-item-content-container">
        <h2>{bookData.name}</h2>
        <p>{bookData.author}</p>

        <Link to={`/books-details/${bookData.id}`} className="btn-primary">
          Product Details
        </Link>
      </div>
    </section>
  );
};

export default SearchResultCard;
