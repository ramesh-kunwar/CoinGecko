import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import CoinTable from "../components/CoinTable/CoinTable";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CoinTable />
    </div>
  );
};

export default Home;
