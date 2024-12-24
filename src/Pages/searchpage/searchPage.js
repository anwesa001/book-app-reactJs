import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/layouts/navbar/navbar";
import Footer from "../../components/layouts/footer/footer";
import "./searchPage.style.css";
import bookData from "../../components/layouts/util/bookData";
import SearchResultCard from "../../components/cards/searchrsltcard/srchrsltcard";

const SearchPage = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (location.state && location.state.trim()) {
      const searchValue = bookData.filter((data) =>
        data.name.toLowerCase().includes(location.state.toLowerCase())
      );
      setSearchResult(searchValue);
    }
  }, [location.state]);

  return (
    <section>
      <Navbar darkTheme={true} />
      <div className="search-result-container">
        <div className="container">
          <h2>Your Search Result:</h2>

          {searchResult.length > 0 ? (
            searchResult.map((result) => (
              <SearchResultCard key={result.id} bookData={result} />
            ))
          ) : (
            <p>No results found for your search.</p>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SearchPage;
