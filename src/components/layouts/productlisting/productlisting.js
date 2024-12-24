import React from "react";
import "./productlisting.style.css";
import ProductListingCard from "../../cards/product-listing-card/productlistingcard";
import { bookData } from "../util/bookData";

const ProductListing = () => {
  return (
    <div className="product-listing-container">
      <div className="container">
        <h2>
          Browse through our curated collection,{" "}
          <span className="text-primary">books</span> for every mood and moment!
        </h2>

        <div className="listing-container">
          {bookData.slice(1, 5).map((book) => (
            <ProductListingCard bookData={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
