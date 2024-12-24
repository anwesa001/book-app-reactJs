import React, { useState, useEffect, useContext } from "react";
import "./detailssec.style.css";
import { useParams } from "react-router-dom";
import { bookData as allBooksData } from "../util/bookData";
import { CartContext } from "../../../Pages/addtoCart/CartContext";

const DetailsSection = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let newData = allBooksData.filter((book) => book.id === parseInt(id));
    setBookData(newData[0]);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(bookData);
    alert(`${bookData.name} has been added to your cart!`);
  };

  return (
    <section className="detail-section-container">
      <div className="container">
        <div className="flex-container">
          <div className="book-img-container">
            <img src={bookData.url} alt="book" />
          </div>
          <div className="book-detail-container">
            <h2>{bookData.name}</h2>
            <p className="text-secondary">{bookData.author}</p>
            <p className="book-description">{bookData.description}</p>
            <p>
              <strong>Language:</strong> {bookData.language}
            </p>
            <p>
              <strong>Total no. of Pages:</strong> {bookData.printLength}
            </p>
            <h3>&#8377; {bookData.price}</h3>
            <button onClick={handleAddToCart} className="btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
