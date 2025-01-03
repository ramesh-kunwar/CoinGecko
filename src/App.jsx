import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CoinTable from "./components/CoinTable/CoinTable";
import Navbar from "./components/Navbar/Navbar";
import { CurrencyContext } from "./context/CurrencyContext";
import Home from "./pages/Home";

function App() {
  const [currency, setCurrency] = useState("usd");
  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Home />
      </CurrencyContext.Provider>
    </>
  );
}

export default App;
