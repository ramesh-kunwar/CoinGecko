import { useEffect } from "react";

const CoinTable = () => {
  async function download() {
    const url = "https://api.coingecko.com/api/v3/ping";
    const response = await fetch(url);
    const result = await response.json();
    console.log(result, "  result");
    return result;
  }
  useEffect(() => {
    //
    download();
  }, []);

  return <div>CoinTable</div>;
};

export default CoinTable;
