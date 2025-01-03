import { useContext, useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
import { CurrencyContext } from "../../context/CurrencyContext";

const CoinTable = () => {
  const { currency } = useContext(CurrencyContext);
  console.log(currency, " currency");
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching, error } = useQuery(
    ["coing", page],
    () => fetchCoinData(page, currency),
    {
      // retry: 2,
      // retryDelay: 1000,
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60 * 5,
    }
  );
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
      {/* Header of the table */}
      <div className="full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center">
        <div className="basis-[35%]">Coin</div>
        <div className="basis-[25%]">Price</div>
        <div className="basis-[20%]">24h change</div>
        <div className="basis-[20%]">Market Cap</div>
      </div>

      <div className="flex flex-col w-[80vw] mx-auto">
        {isLoading && <div>Loading...</div>}
        {data &&
          data?.map((coin) => {
            return (
              <div
                key={coin.id}
                className="w-full bg-transparent  flex px-2 py-4 font-semibold items-center justify-between"
              >
                <div className="flex items-cener justify-start gap-3 basis-[35%]">
                  <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                  <div className="flex flex-col">
                    <div className="text-3xl">{coin.name}</div>

                    <div className="text-xl">{coin.symbol}</div>
                  </div>
                </div>
                <div className="basis-[25%]">{coin.currency}</div>
                <div className="basis-[25%]">{coin.high_24h}</div>
                <div className="basis-[20%]">{coin.price_change_24h}</div>
                <div className="basis-[20%]">{coin.market_cap}</div>
              </div>
            );
          })}
      </div>

      <div className="flex gap-4 justify-center items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="btn btn-primary btn-wide text-white text-2xl"
        >
          Prev
        </button>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="btn btn-primary btn-wide text-white text-2xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CoinTable;
