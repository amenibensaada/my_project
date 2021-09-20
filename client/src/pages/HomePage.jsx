import React, { useState } from "react";
import Bar from "../Components/AppBar";
import HomeImage from "../Components/HomeImage";
import Cards from "../Components/Card";
import LatestProducts from "../Components/LatestProducts";
import CardLatestProducts from "../Components/CardLatestProduct";
import BestProduct from "../Components/BestProduct";
import Bestcollection from "../Components/BestCollection";

function HomePage() {
  return (
    <div className="home">
      <Bar />
      <HomeImage />

      <Cards />
      <LatestProducts />
      <CardLatestProducts />
      <BestProduct />
      <Bestcollection />
    </div>
  );
}
export default HomePage;
