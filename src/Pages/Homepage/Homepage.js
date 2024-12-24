import React from "react";
import Hero from "../../components/layouts/hero/Hero";
import ProductListing from "../../components/layouts/productlisting/productlisting";
import Footer from "../../components/layouts/footer/footer";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <ProductListing />
      <Footer />
    </section>
  );
};

export default HomePage;
