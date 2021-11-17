import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

function Home() {
  return (
    <div className="body_wrapper">
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Reviews></Reviews>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default Home;
