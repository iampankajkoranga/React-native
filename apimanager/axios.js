import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://tm.tapi.videoready.tv',
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});
