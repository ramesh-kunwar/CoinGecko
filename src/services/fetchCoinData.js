import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(page = 1, currency = "usd") {
  const perpage = 10;
  try {
    const response = await axiosInstance.get(
      `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perpage}&page=${page}`,
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
