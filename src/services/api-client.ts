import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d6318807009d4c78a65641b370ac9d9f",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
