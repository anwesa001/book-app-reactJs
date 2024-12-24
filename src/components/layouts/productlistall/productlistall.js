import React from "react";
import "./productlistall.style.css";
import ProductListingCard from "../../cards/product-listing-card/productlistingcard";
import { bookData } from "../util/bookData";

const ProductListAll = () => {
  console.log(bookData);
  return (
    <section className="productlistall-container">
      <div className="container">
        <div className="grid-container">
          {bookData.map((book) => {
            return (
              <div className="grid-item">
                <ProductListingCard bookData={book} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductListAll;
