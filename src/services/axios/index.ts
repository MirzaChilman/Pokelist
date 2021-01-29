import axios from "axios";
import { BASE_URL } from "../../commons";

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
