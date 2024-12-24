import React from "react";
import "./productlistingcard.style.css";
import { Link } from "react-router-dom";

const ProductListingCard = ({ bookData }) => {
  return (
    <div className="product-listing-card">
      <div className="product-listing-img-container">
        <img
          src={bookData.url}
          alt="product-listing-image"
          className="product-listing-image"
        />
      </div>
      <div className="product-listing-details-container">
        <h3>{bookData.name}</h3>
        <p className="author-name">{bookData.author}</p>
        <p className="genre">{bookData.genre}</p>
        <p className="pricing">&#8377; {bookData.price}</p>
      </div>

      <div className="card-btn-container">
        <Link to={`/books-details/${bookData.id}`} className="prdctlstng-btn">
          Check Details
        </Link>
      </div>
    </div>
  );
};

export default ProductListingCard;
