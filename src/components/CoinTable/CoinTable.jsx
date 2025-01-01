import { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";

const CoinTable = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching, error } = useQuery(
    ["coing", page],
    () => fetchCoinData(page, "usd"),
    {
      retry: 2,
      retryDelay: 1000,
      cacheTime: 1000 * 60 * 5,
    },
  );

  useEffect(() => {
    console.log(data, " Data");
  }, [data]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      CoinTable
      <button onClick={() => setPage(page + 1)}>Click</button>
      <p>Page: {page}</p>
    </div>
  );
};

export default CoinTable;
