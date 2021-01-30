import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.response.use(undefined, (error) => {
  // Errors handling
  const { response } = error;
  const { data } = response;
  if (data) {
    console.error(data);
  }
});

export default apiClient;
