import axios from "axios";

export const fetchData = async ({
  apiKey,
  startDate,
  endDate,
  symbol,
  base,
  phase = 1,
}) => {
  try {
    if (phase == 1) {
      const response = await axios.get(
        `https://api.apilayer.com/exchangerates_data/timeseries?apikey=${apiKey}&start_date=${startDate}&end_date=${endDate}&symbols=${symbol}&base=${base}`
      );
      return response.data;
    }

    const response = await axios.get(
      `https://api.apilayer.com/exchangerates_data/latest?apikey=${apiKey}&symbols=${symbol}&base=USD`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


