import axios, {
  AxiosInstance,
  AxiosRequestHeaders,
  HeadersDefaults,
} from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 5000, // Timeout if necessary
});

export const fetchData = async (url: string, options = {}) => {
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};
