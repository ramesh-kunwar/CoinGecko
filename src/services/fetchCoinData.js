import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData() {
  try {
    const response = await axiosInstance.get("/coins/markets?vs_currency=usd");
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
